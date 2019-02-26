import { Component, OnInit } from "@angular/core";
import { GameBoard } from "./models/game-board.model";
import { GameInfo } from "./models/game-info.model";

@Component({
  selector: "tictactoe",
  templateUrl: "tictactoe.component.html",
  styleUrls: ["./tictactoe.component.scss"]
})
export class TicTacToeComponent implements OnInit {
  gameInfo: GameInfo;
  gameBoard: GameBoard;

  constructor() {}
  
  
  startGame(againstComp: boolean) {
    this.gameInfo.computerActive = againstComp;
    this.gameInfo.activePlayer = 1;
  }


  resetGame() {
    this.gameInfo = { gameOver: false };
    this.gameBoard = {
      currentBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      availableMoves: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    };
  }

  placeMove(pos: number) {
    if (this.gameBoard.currentBoard[pos] !== 0) {
      return;
    }
    this.updateBoard(pos); //updates the board for both AI and win verification passes current index
    this.gameInfo.activePlayer = this.gameInfo.activePlayer === 1 ? 2 : 1;
    this.gameInfo.winner = this.checkWinner();
    if (!this.gameInfo.gameOver && this.gameInfo.activePlayer === 2 && this.gameInfo.computerActive) {
      //auto plays if against computer
      this.computerMove();
    }
  }

  checkWinner() {
    //takes current board setup and checks for gameOver
    for (let i = 0; i < 9; i += 3) {
      //checks for horizontal lines
      if (
        this.gameBoard.currentBoard[i] !== 0 &&
        this.gameBoard.currentBoard[i] === this.gameBoard.currentBoard[i + 1] &&
        this.gameBoard.currentBoard[i] === this.gameBoard.currentBoard[i + 2]
      ) {
        this.gameInfo.gameOver = true;
        return this.gameBoard.currentBoard[i];
      }
    }
    for (let j = 0; j < 3; j++) {
      //checks for vertical lines
      if (
        this.gameBoard.currentBoard[j] !== 0 &&
        this.gameBoard.currentBoard[j] === this.gameBoard.currentBoard[j + 3] &&
        this.gameBoard.currentBoard[j] === this.gameBoard.currentBoard[j + 6]
        
      ) {
        this.gameInfo.gameOver = true;
        return this.gameBoard.currentBoard[j]; //return either 1 or 2 (for player that matched)
      }
    }
    if (
      this.gameBoard.currentBoard[0] !== 0 &&
      this.gameBoard.currentBoard[0] === this.gameBoard.currentBoard[4] &&
      this.gameBoard.currentBoard[0] === this.gameBoard.currentBoard[8]
      
    ) {
      //checks one diagonal
      this.gameInfo.gameOver = true;
      return this.gameBoard.currentBoard[4]; //return either 1 or 2 (for player that matched)
    }
    if (
      this.gameBoard.currentBoard[2] !== 0  &&
      this.gameBoard.currentBoard[2] === this.gameBoard.currentBoard[4] &&
      this.gameBoard.currentBoard[2] === this.gameBoard.currentBoard[6]
    ) {
      //checks one diagonal
      this.gameInfo.gameOver = true;
      return this.gameBoard.currentBoard[4]; //return either 1 or 2 (for player that matched)
    }
    if (!this.gameBoard.availableMoves.length) {
      this.gameInfo.gameOver = true;
      return 3;
    } //if no moves left and there's no gameOver,  it's a tie
    return 0;
  }

  computerMove() {
    let highestScore = -10000; //used to compare potential best moves
    let index; //to save index for later use
    this.gameBoard.availableMoves.forEach((val) => {

      this.gameBoard.currentBoard[val] = 2;
      let score = this.evaluateTotalScore();
      //compares potential play to base score of -10000 this is on the offchance all
      //moves are bad. It will then pick the least bad of the bunch
      
      if (score > highestScore) {
        highestScore = score; //if higher, this becomes the best play
        index = val; //saves index to click box after all passes
      }
      this.gameBoard.currentBoard[val] = 0; //resets the move to test a different one
    });
    this.placeMove(index);
  }

  /*This function goes through the three cells input from above
     and uses min max to see if one line is better than another to
     play on. Basically points for a line will scale up the more
     2's you have (X's for computer) and scale down for more 1s (O's for player)
     the whole line is then returned and added to the score above. The concept
     is that if an opponent has a line with two and you don't block, the score
     will be very negative and thus a bad move. If you have two in a row and don't
     finish it with the third, it will be positive but not as much as if you finished
     the line. I have yet to be able to beat it so that's a plus for the minMax
     and a huge minus for fun....
     */
  checkLine(a, b, c) {
    let lineScore = 0;

    if (this.gameBoard.currentBoard[a] == 2) {
      //starting with first in line
      lineScore = 1; //if it contains an X, plus a point
    } else if (this.gameBoard.currentBoard[a] == 1) {
      lineScore = -1; //if it contains an O, minus one point
    }

    if (this.gameBoard.currentBoard[b] == 2) {
      //assuming second was X
      if (lineScore == 1) {
        //if both points a and b were X, this is a good line, goto 10
        lineScore = 10;
      } else if (lineScore == -1) {
        // if first in line was X and second O, cancel each other out
        return 0; //line will be a wash as there can be no win for either on this line
      } else {
        lineScore = 1; // if first was empty and this was X score to 1 as a win is possible
      }
    } else if (this.gameBoard.currentBoard[b] == 1) {
      //if b was O
      //if a and b were O, this is a bad line, set score to -15 this gives a block more weight
      //and allows for only a single pass-through as opposed to going down multiple branches
      if (lineScore == -1) {
        lineScore = -15;
      } else if (lineScore == 1) {
        //if a was X and b was 0 return zero, no win possible on this line
        return 0;
      } else {
        //if a empty and b O, set to -1 starting off bad for this line
        lineScore = -1;
      }
    }

    if (this.gameBoard.currentBoard[c] == 2) {
      //assuming c is X
      //if there's one X it goes to 10 (better play) or if 2X's already it goes to 100 with the 3rd X here
      if (lineScore > 0) {
        lineScore *= 10;
      } else if (lineScore < 0) {
        //if -10 for 2 O's or -1 for 1 O with this X the line is dead, return 0
        return 0;
      } else {
        //if no points so far, it means blank, blank, X so return 1. This might be a good line
        lineScore = 1;
      }
    } else if (this.gameBoard.currentBoard[c] == 1) {
      //assuming x is 0
      //if it's a bad line already, it moves from -1 -> -10 or -10 -> -100 (although not possible techincally as the game would have ended)
      if (lineScore < 0) {
        lineScore *= 10;
      } else if (lineScore > 1) {
        //if it's a positive line (1 for 1 X or 10 for 2 X's)
        return 0; //return zero as this is a dead line. No points for either side.
      } else {
        lineScore = -1; //if others were blank, this becomes a line with only 1 O
      }
    }
    return lineScore; //if it wasn't already, return the score for this line
  }

  evaluateTotalScore() {
    //goes through line by line to get sum of score
    let score = 0;
    score += this.checkLine(0, 1, 2); //checks horizontal line
    score += this.checkLine(3, 4, 5); //checks horizontal line
    score += this.checkLine(6, 7, 8); //checks horizontal line
    score += this.checkLine(0, 3, 6); //checks vertical line
    score += this.checkLine(1, 4, 7); //checks vertical line
    score += this.checkLine(2, 5, 8); //checks vertical line
    score += this.checkLine(0, 4, 8); //checks diagonal line
    score += this.checkLine(2, 4, 6); //checks diagonal line
    return score; //returns score for comparison
  }

  updateBoard(idx: number) {
    //updates the board
    this.gameBoard.currentBoard[idx] = this.gameInfo.activePlayer; // sets played spot to 1 or 2 based off player
    let index = this.gameBoard.availableMoves.indexOf(idx); // finds the play just made
    // unneeded really but still good practice as it's usually needed for an index splice
    if (index > -1) {
      this.gameBoard.availableMoves.splice(index, 1); //removes the one just played form possible moves
    }
  }

  get gameOverMessage() {
      if(this.gameInfo.winner === 1){
        return `${this.gameInfo.playerOne && this.gameInfo.playerOne.length < 25 ? this.gameInfo.playerOne : 'O'} wins!`
      }
      if(this.gameInfo.winner === 2){
      console.log("SKY NET IS ASSUMING DIRECT CONTROL");
      return `${this.gameInfo.playerTwo && this.gameInfo.playerTwo.length < 25 ? this.gameInfo.playerTwo : 'X'} wins!`
      }
      return `It's a tie!`
  }

  ngOnInit() {
    this.resetGame();
  }
}
