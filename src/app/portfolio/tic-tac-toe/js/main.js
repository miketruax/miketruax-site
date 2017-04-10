var againstPlayer; //whether or not it's against player or AI
var activePlayer; //active player
var nameOne; //first players Name
var nameTwo; //second players Name
var currentBoard;
var availMoves;

var initialize = function () {
  nameOne = $('#playOne').val(); //saves player 1 and 2s names
  nameTwo = $('#playTwo').val();
  $('body').html($board); //sets board up initially
  $('document').ready(function () {
    $('#O').html(nameOne); //shows players names 1 and two
    $('#X').html(nameTwo);
    $('.box').on('click', placeMove); //addsEventlisteners to ensure click funcionality works
    $('.player1').addClass('active'); //in case of restart
    $('.player2').removeClass('active'); //in case of restart resets starting player
    activePlayer = 1; //starts back with active player being 1
    currentBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //resets board
    availMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8]; //resets to blank board state
    $('.box').on('mouseenter', highlightXO);
    $('.box').on('mouseleave', removeXO);
  });
};

var toStart = function () { //resets to the start page and adds event listeners
  $('document').ready(function () { //ensures all portions reloaded
    $('body').html($start);

    $('.computer').on('click', function () { //if computer clicked, will use AI for playing
      againstPlayer = false;
      $('.againstWhom').slideToggle('slow', function () { //slides out buttons for selecting whom to play against
        $('#nameOne').show('slow'); //slides in just field for name 1
        $('.startName').show('slow'); //slides it start button
        $('#playTwo').val('SkyNet'); //sets hidden text box to be name SkyNet... always watching....
      });
    });
    $('.player').on('click', function () { //if computer clicked, will use AI for playing
      againstPlayer = true; //against player not AI
      $('.againstWhom').slideToggle('slow', function () {
        $('#nameOne').show('slow'); //slides in both player one and player two names
        $('#nameTwo').show('slow');
        $('.startName').show('slow'); //slides in start button
      });
    });

    $('.startName').on('click', function () { //allows two human players
      initialize(); //starts board
    });
  });
};


var highlightXO = function () { // highlights X or O depending on active player
  if (!$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')) {
    activePlayer == 1 ? $(this).css("background-image", 'url(../work-portfolio/tic-tac-toe/img/o.svg)') : $(this).css("background-image", 'url(../work-portfolio/tic-tac-toe/img/x.svg)');
  }
};
var removeXO = function () { //removes background image after mouse leave
  if (!$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')) {
    $(this).css("background", '');
  }
};

var placeMove = function () { //allows placement of X or O
//ensures you're not able to click an overwrite a play
  if (!$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')) {
    $('.players').toggleClass('active'); //switches active player
    $(this).addClass('box-filled-' + activePlayer);
    updateBoard($(this).index());//updates the board for both AI and win verification passes current index
    activePlayer = activePlayer === 1 ? 2 : 1;
    if (activePlayer === 2 && !againstPlayer && checkWinner() === 0) { //auto plays if against computer
      computerMove();

    }
    if (checkWinner() !== 0) { //if gameOver is 1 (player 1), 2(player 2), or 3(tie) ends game
      endGame(checkWinner()); //ends game with gameOver value
    }
  }
};

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
var checkLine = function (a, b, c) {
  var lineScore = 0;

  if (currentBoard[a] == 2) { //starting with first in line
    lineScore = 1; //if it contains an X, plus a point
  } else if (currentBoard[a] == 1) {
    lineScore = -1; //if it contains an O, minus one point
  }


  if (currentBoard[b] == 2) { //assuming second was X
    if (lineScore == 1) { //if both points a and b were X, this is a good line, goto 10
      lineScore = 10;
    } else if (lineScore == -1) { // if first in line was X and second O, cancel each other out
      return 0; //line will be a wash as there can be no win for either on this line
    } else {
      lineScore = 1; // if first was empty and this was X score to 1 as a win is possible
    }
  } else if (currentBoard[b] == 1) { //if b was O
//if a and b were O, this is a bad line, set score to -15 this gives a block more weight
//and allows for only a single passthrough as opposed to going down multiple branches
    if (lineScore == -1) {
      lineScore = -15;
    } else if (lineScore == 1) { //if a was X and b was 0 return zero, no win possible on this line
      return 0;
    } else { //if a empty and b O, set to -1 starting off bad for this line
      lineScore = -1;
    }
  }

  if (currentBoard[c] == 2) { //assuming c is X
//if there's one X it goes to 10 (better play) or if 2X's already it goes to 100 with the 3rd X here
    if (lineScore > 0) {
      lineScore *= 10;
    } else if (lineScore < 0) { //if -10 for 2 O's or -1 for 1 O with this X the line is dead, return 0
      return 0;
    } else { //if no points so far, it means blank, blank, X so return 1. This might be a good line
      lineScore = 1;
    }
  } else if (currentBoard[c] == 1) { //assuming x is 0
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
var evaluateTotalScore = function () { //goes through line by line to get sum of score
  var score = 0;
  score += checkLine(0, 1, 2); //checks horizontal line
  score += checkLine(3, 4, 5); //checks horizontal line
  score += checkLine(6, 7, 8); //checks horizontal line
  score += checkLine(0, 3, 6); //checks vertical line
  score += checkLine(1, 4, 7); //checks vertical line
  score += checkLine(2, 5, 8); //checks vertical line
  score += checkLine(0, 4, 8); //checks diagonal line
  score += checkLine(2, 4, 6); //checks diagonal line
  return score; //returns score for comparison
};

var computerMove = function () {
  var highestScore = -10000; //used to compare potential best moves
  var index; //to save index for later use

  for (var i = 0; i < availMoves.length; i++) {
    currentBoard[availMoves[i]] = 2; //makes a move for outcome testing
    var score = evaluateTotalScore();
//compares potential play to base score of -10000 this is on the offchance all
//moves are bad. It will then pick the least bad of the bunch
    if (score > highestScore) {
      highestScore = score; //if higher, this becomes the best play
      index = i; //saves index to click box after all passes
    }
    currentBoard[availMoves[i]] = 0; //resets the move to test a different one
  }
  $('.boxes').children()[availMoves[index]].click(); //clicks the box that resulted in highest line scores


};


var updateBoard = function (item) { //updates the board
  currentBoard[item] = activePlayer; // sets played spot to 1 or 2 based off player
  var index = availMoves.indexOf(item); // finds the play just made
// unneeded really but still good practice as it's usually needed for an index splice
  if (index > -1) {
    availMoves.splice(index, 1); //removes the one just played form possible moves
  }
};


var checkWinner = function () { //takes current board setup and checks for gameOver
  for (var i = 0; i < 9; i += 3) { //checks for horizontal lines
    if (currentBoard[i] === currentBoard[i + 1] && currentBoard[i] === currentBoard[i + 2] && currentBoard[i] !== 0) {
      return (currentBoard[i]);
    }
  }
  for (var j = 0; j < 3; j++) { //checks for horizontal lines
    if (currentBoard[j] === currentBoard[j + 3] && currentBoard[j] === currentBoard[j + 6] && currentBoard[j] !== 0) {
      return (currentBoard[j]); //return either 1 or 2 (for player that matched)
    }
  }
  if (currentBoard[0] === currentBoard[4] && currentBoard[0] === currentBoard[8] && currentBoard[4] !== 0) { //checks one diagonal
    return (currentBoard[4]); //return either 1 or 2 (for player that matched)
  }
  if (currentBoard[2] === currentBoard[4] && currentBoard[2] === currentBoard[6] && currentBoard[4] !== 0) {//checks one diagonal
    return (currentBoard[4]); //return either 1 or 2 (for player that matched)
  }
  if (!availMoves.length) {
    return 3;
  } //if no moves left and there's no gameOver,  it's a tie
  return 0;
};


var endGame = function (winner) {
  $('body').html($win); //loads win snippet
  $('document').ready(function () {
//ensures loaded before adding event listeners and adjusting html
//shoudln't be needed really but hey.
    if (winner === 1) { //assuming first player won
// if a valid name was entered, display name with wins! otherwise display Winner!
      nameOne ? $('.message').html(nameOne + ' wins!') : $('.message').html('Winner!');
      $('.screen-win').addClass('screen-win-one'); //change to display winning page
    }
    else if (winner === 2) //same as above for gameOver ===1
    {
      nameTwo ? $('.message').html(nameTwo + ' wins!') : $('.message').html('Winner!');
      $('.screen-win').addClass('screen-win-two');
    }
    else if (winner === 3) { // in case of a tie, display such and tie screen
      $('.message').html('It\'s a Tie!');
      $('.screen-win').addClass('screen-win-tie');
    }
    $('.button').on('click', toStart); // new start button!
  });
};

toStart(); //start it up!

