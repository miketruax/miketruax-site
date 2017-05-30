import { Component, OnInit } from '@angular/core';
import {horizontalSlideAnimation} from "../../animations/horizontal-slide.animation";

@Component({
  selector: 'tictactoe',
  templateUrl: 'tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TicTacToeComponent implements OnInit {
  againstComputer = false;
  activePlayer: number = -1;
  nameOne: string = '';
  nameTwo: string = '';
  currentBoard: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  availMoves: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  gameOver: boolean = false;
  winner: Object = {name:'', winner:null};
  constructor() {

  }
  againstWhom(againstComp: boolean){
    this.againstComputer = againstComp;
    this.activePlayer = 0;
    if(againstComp){
      this.nameTwo = "SkyNet";
    }

  }
  resetBoard(){
    this.againstComputer = false;
    this.activePlayer = -1;
    this.nameOne = '';
    this.nameTwo = '';
    this.winner = {name:'', winner:null};
    this.currentBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.availMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.gameOver = false;
  }

  highlight(e, direction: boolean){
    let target = e.target;
    if (!target.classList.contains('box-filled-1') && !target.classList.contains('box-filled-2')) {
      if(direction){
        if(this.activePlayer ==1) {
          target.style.backgroundImage = ('url(../../../assets/img/portfolio/tictactoe/o.svg)')
        }
        else{
          target.style.backgroundImage = ('url(../../../assets/img/portfolio/tictactoe/x.svg)')
        }
      }
      else{
        target.style.background = ('');
      }
    }
  }

  placeMove(e: any, pos: number){
      let target;
      if(e.target){
        target = e.target;
      }
      else{
        target = e;
      }
      if (target.classList.contains('box-filled-1') || target.classList.contains('box-filled-2')) {
        return;
      }
        let players = document.getElementsByClassName('players');
        players[0].classList.toggle('active');
        players[1].classList.toggle('active');
        target.classList.add('box-filled-' + this.activePlayer);
        if(this.activePlayer === 1) {
          target.style.backgroundImage = ('url(../../../assets/img/portfolio/tictactoe/o.svg)');
        } else{
          target.style.backgroundImage = ('url(../../../assets/img/portfolio/tictactoe/x.svg)');
        }


        this.updateBoard(pos);//updates the board for both AI and win verification passes current index
        this.activePlayer = this.activePlayer === 1 ? 2 : 1;

        let winner = this.checkWinner();
        if (this.activePlayer === 2 && this.againstComputer && !this.gameOver) { //auto plays if against computer
          this.computerMove();
        }
        if (this.gameOver) { //if gameOver is 1 (player 1), 2(player 2), or 3(tie) ends game
          this.endGame(winner); //ends game with gameOver value
        }

  }

  checkWinner() { //takes current board setup and checks for gameOver
    for (let i = 0; i < 9; i += 3) { //checks for horizontal lines
      if (this.currentBoard[i] === this.currentBoard[i + 1] && this.currentBoard[i] === this.currentBoard[i + 2] && this.currentBoard[i] !== 0) {
        this.gameOver = true;
        return (this.currentBoard[i]);
      }
    }
    for (let j = 0; j < 3; j++) { //checks for horizontal lines
      if (this.currentBoard[j] === this.currentBoard[j + 3] && this.currentBoard[j] === this.currentBoard[j + 6] && this.currentBoard[j] !== 0) {
        this.gameOver = true;
        return (this.currentBoard[j]); //return either 1 or 2 (for player that matched)
      }
    }
    if (this.currentBoard[0] === this.currentBoard[4] && this.currentBoard[0] === this.currentBoard[8] && this.currentBoard[4] !== 0) { //checks one diagonal
      this.gameOver = true;
      return (this.currentBoard[4]); //return either 1 or 2 (for player that matched)
    }
    if (this.currentBoard[2] === this.currentBoard[4] && this.currentBoard[2] === this.currentBoard[6] && this.currentBoard[4] !== 0) {//checks one diagonal
      this.gameOver = true;
      return (this.currentBoard[4]); //return either 1 or 2 (for player that matched)
    }
    if (!this.availMoves.length) {
      this.gameOver = true;
      return 3;
    } //if no moves left and there's no gameOver,  it's a tie
    return 0;
  }

  startGame(){
    this.activePlayer = 1;
  }

  computerMove() {
  let highestScore = -10000; //used to compare potential best moves
  let index; //to save index for later use

  this.availMoves.forEach((val, idx)=>{
    this.currentBoard[this.availMoves[idx]] = 2;
    let score = this.evaluateTotalScore();
    //compares potential play to base score of -10000 this is on the offchance all
    //moves are bad. It will then pick the least bad of the bunch
    if (score > highestScore) {
      highestScore = score; //if higher, this becomes the best play
      index = idx; //saves index to click box after all passes
    }
    this.currentBoard[this.availMoves[idx]] = 0; //resets the move to test a different one
  });
    let boxes = document.getElementsByClassName('box');
    this.placeMove(boxes[this.availMoves[index]], this.availMoves[index]);


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

      if (this.currentBoard[a] == 2) { //starting with first in line
        lineScore = 1; //if it contains an X, plus a point
      } else if (this.currentBoard[a] == 1) {
        lineScore = -1; //if it contains an O, minus one point
      }


      if (this.currentBoard[b] == 2) { //assuming second was X
        if (lineScore == 1) { //if both points a and b were X, this is a good line, goto 10
          lineScore = 10;
        } else if (lineScore == -1) { // if first in line was X and second O, cancel each other out
          return 0; //line will be a wash as there can be no win for either on this line
        } else {
          lineScore = 1; // if first was empty and this was X score to 1 as a win is possible
        }
      } else if (this.currentBoard[b] == 1) { //if b was O
    //if a and b were O, this is a bad line, set score to -15 this gives a block more weight
    //and allows for only a single pass-through as opposed to going down multiple branches
        if (lineScore == -1) {
          lineScore = -15;
        } else if (lineScore == 1) { //if a was X and b was 0 return zero, no win possible on this line
          return 0;
        } else { //if a empty and b O, set to -1 starting off bad for this line
          lineScore = -1;
        }
      }

      if (this.currentBoard[c] == 2) { //assuming c is X
    //if there's one X it goes to 10 (better play) or if 2X's already it goes to 100 with the 3rd X here
        if (lineScore > 0) {
          lineScore *= 10;
        } else if (lineScore < 0) { //if -10 for 2 O's or -1 for 1 O with this X the line is dead, return 0
          return 0;
        } else { //if no points so far, it means blank, blank, X so return 1. This might be a good line
          lineScore = 1;
        }
      } else if (this.currentBoard[c] == 1) { //assuming x is 0
    //if it's a bad line already, it moves from -1 -> -10 or -10 -> -100 (although not possible techincally as the game would have ended)
        if (lineScore < 0) {
          lineScore *= 10;
        } else if (lineScore > 1) { //if it's a positive line (1 for 1 X or 10 for 2 X's)
          return 0; //return zero as this is a dead line. No points for either side.
        } else {
          lineScore = -1; //if others were blank, this becomes a line with only 1 O
        }
      }
      return lineScore; //if it wasn't already, return the score for this line
    };
    evaluateTotalScore() { //goes through line by line to get sum of score
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
    };

  updateBoard(idx: number) { //updates the board
    this.currentBoard[idx] = this.activePlayer; // sets played spot to 1 or 2 based off player
    let index = this.availMoves.indexOf(idx); // finds the play just made
      // unneeded really but still good practice as it's usually needed for an index splice
    if (index > -1) {
      this.availMoves.splice(index, 1); //removes the one just played form possible moves
    }
  }


    endGame(winner: number) {

    if (winner === 1) { //assuming first player won
      // if a valid name was entered, display name with wins! otherwise display Winner!
        this.winner['name'] = this.nameOne;
        this.winner['winner'] = 1
      }
      else if (winner === 2) //same as above for gameOver ===1
      {
        this.winner['name'] = this.nameTwo;
        this.winner['winner'] = 2;
        if(this.againstComputer){
          console.log('SKYNET IS ASSUMING DIRECT CONTROL');

        }
      }
      else if (winner === 3) { // in case of a tie, display such and tie screen
        this.winner['winner'] = 3

      }
  };


  ngOnInit() {

  }

}

