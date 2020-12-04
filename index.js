var readlineSync = require("readline-sync");
const chalk = require('chalk');

var userName = readlineSync.question(chalk.blackBright.bgWhiteBright.bold("Welcome to the quiz based on Sanatana Dharma!\nPlease tell us your name to begin: \n"));

var score = 0;
var scores = [];

console.log(chalk.redBright.bgWhiteBright.bold("\nHi, "+ userName + ", Before we begin,\nlet's check the rules: "))

console.log(chalk.magenta("\n1. This quiz consists of 5 questions.\n2. Each correct answer will fetch you 2 points. \n3. Each incorrect answer will result in -1 marks.\n4. You should respond in [a/b/c/d] depending on \nyour choice.\n\nLet's begin now!!!\n"))

function quiz(question, options, answer) {

  console.log(chalk.cyan("\n" + question));
  console.log(options);


  var userAnswer = readlineSync.question("Your response: ");
  if (userAnswer == answer) {
    console.log(chalk.green("Your Answer is Correct!"));
    score = score + 2;
  }
  else {
    console.log(chalk.red("Sorry, your answer is incorrect"));
    score = score -1;
  }
}

  let questions = [{
    "question": "Q1. How many Maha Puranas are there?",
    "options": " a) 20\n b) 18 \n c) 16 \n d) 8 \n",
    "answer": "b"
  },
  {
    "question": "Q2. Who was the First Avatar of Lord Vishnu?",
    "options": " a) Matsya\n b) Kalki\n c) Vamana\n d) Ram\n",
    "answer": "a"
  },
   {
    "question": "Q3. Which was the Yuga in which Shri Ram was born?",
    "options": " a) Satayuga\n b) Tretayuga\n c) Dwaparyuga\n d) Kaliyuga\n",
    "answer": "b"
  },
  {
    "question": "Q4. Which is the river, on whose banks, the holy town of Ayodhya stands?",
    "options": " a) Ganga\n b) Yamuna\n c) Sarayu\n d) Godavari\n",
    "answer": "c"
  },
  {
    "question": "Q5. How many `Mathas` were founded by Adi Shankaracharya?",
    "options": " a) 6\n b) 8\n c) 2\n d) 4\n",
    "answer": "d"
  }, 
  ]

function playQuiz() {
  for(var i = 0; i < questions.length; i++) {
    obj = questions[i];
    quiz(obj.question, obj.options, obj.answer);
    console.log("--------------------------");
  }
  console.log("Your Total Score: ", score);
  scores.push(score);
}

playQuiz();



function maxScore(scores) {

var maximum = scores[0];
for (var i = 0; i<scores.length; i++) {

  if(maximum<scores[i]) {
    maximum = scores[i];
  }

}

return maximum;
}

function askChoice() {
  choice = readlineSync.question("Want to play again? Reply Y or N: ");
  return choice;
}


while (askChoice() == "Y") {
  score = 0;
  playQuiz();
  highestScore = maxScore(scores);
  console.log("Your Highest Score is: ", highestScore);

}