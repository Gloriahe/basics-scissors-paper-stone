//user name to personalize the game
var userName = "";

//number of times player wins vs computer wins vs draws
var mode = "";

//set number of player wins, computer wins, draws to 0
var numPlayerWins = 0;
var numComputerWins = 0;
var numDraws = 0;

//game mode normal
var mode = "normal";

var main = function (input) {
  //computer choice
  var comChoice = generateComChoice();
  console.log(comChoice);
  console.log(input);

  console.log(userName);
  if (userName == "") {
    userName = input;
    return `${userName}, let's play!`;
  }
  console.log(userName);

  if (input == `reversePlay`) {
    mode = `reverse`;
    return "reverse mode activated";
  } else if (input == `normalPlay`) {
    mode = `normal`;
    return "back to normal mode";
  }

  if (mode == `reverse`) {
    return reverseGame(input, comChoice);
  }

  return normalGame(input, comChoice);
};

//generate a random number between 0 and 3
var generateNum = function () {
  var randomDecimal = Math.random() * 3;

  //convert to integer
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

//assign an element to a value between 0 and 3
var generateComChoice = function () {
  var numComChoice = 3;
  var randomComChoice = generateNum(numComChoice);

  if (randomComChoice == 1) {
    return "scissors";
  }

  if (randomComChoice == 2) {
    return "paper";
  }

  if (randomComChoice == 3) {
    return "stone";
  }
};
//scissors beat stone, stone beats paper, paper beats scissors
var reverseGame = function (input, comChoice) {
  //draw stays the same
  if (input == comChoice) {
    return `The computer chose ${comChoice} and you chose ${input}. It is a draw. Play again!`;
  }

  //lost
  else if (
    (input == "scissors" && comChoice == "paper") ||
    (input == "paper" && comChoice == "stone") ||
    (input == "stone" && comChoice == "scissors")
  ) {
    return `The computer chose ${comChoice} and you chose ${input}. You lost! Try again!`;
  }

  //Winning
  else if (
    (input == "scissors" && comChoice == "stone") ||
    (input == "paper" && comChoice == "scissors") ||
    (input == "stone" && comChoice == "paper")
  ) {
    return `The computer chose ${comChoice} and you chose ${input}. You won! Congrats!`;
  }
  //input validation
  else if (input != "scissors" || input != "paper" || input != "stone") {
    return `Your input ${input} is invalid. Please only enter scissors, paper, or stone.`;
  }
};
var normalGame = function (input, comChoice) {
  //draw
  if (input == comChoice) {
    return `The computer chose ${comChoice} and you chose ${input}. It is a draw. Play again!`;
  }

  //winning
  else if (
    (input == "scissors" && comChoice == "paper") ||
    (input == "paper" && comChoice == "stone") ||
    (input == "stone" && comChoice == "scissors")
  ) {
    return `The computer chose ${comChoice} and you chose ${input}. You won! Congrats!`;
  }

  //lost
  else if (
    (input == "scissors" && comChoice == "stone") ||
    (input == "paper" && comChoice == "scissors") ||
    (input == "stone" && comChoice == "paper")
  ) {
    return `The computer chose ${comChoice} and you chose ${input}. You lost! Try again!`;
  }
  //input validation
  else if (input != "scissors" || input != "paper" || input != "stone") {
    return `Your input ${input} is invalid. Please only enter scissors, paper, or stone.`;
  }
};
