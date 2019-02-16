$(document).ready(function() {

console.log("javascript test");





//Question Objects START 
var Q1 = {
      question:"This is Q1",
      answer1:"Q1 Answer 1",
      answer2:"Q1 Answer 2",
      answer3:"Q1 Answer 3",
      answer4:"Q1 Answer 4",
      correctAnswer:"Q1 correct answer is",

};
console.log("testing Q object " + Q1.question);

var Q2 = {
      question:"This is Q2",
      answer1:"Q2 Answer 1",
      answer2:"Q2 Answer 2",
      answer3:"Q2 Answer 3",
      answer4:"Q2 Answer 4",
      correctAnswer:"Q2 correct answer is",

};
console.log("testing Q object " + Q2.question);

var Q3 = {
      question:"This is Q3",
      answer1:"Q3 Answer 1",
      answer2:"Q3 Answer 2",
      answer3:"Q3 Answer 3",
      answer4:"Q3 Answer 4",
      correctAnswer:"Q3 correct answer is",

};
console.log("testing Q object " + Q3.question);

var Q4 = {
      question:"This is Q4",
      answer1:"Q4 Answer 1",
      answer2:"Q4 Answer 2",
      answer3:"Q4 Answer 3",
      answer4:"Q4 Answer 4",
      correctAnswer:"Q4 correct answer is",

};
console.log("testing Q object " + Q4.question);

//array for question objects
var questionsArray = [Q1,Q2,Q3,Q4];
console.log("testing questions array " + questionsArray[0].question);

//Question Objects END

//variables
var unanswered = 0;
var correct = 0;
var incorrect = 0;
var isGameStarted = false;
var correctAnswerTest = "Answer 1 is correct"
var currentQuestion = questionsArray[0];

console.log("current question is " + currentQuestion.question);

//functions START
function pageLoad(){
      if (isGameStarted === false){
      console.log("page load");
      $("#start").html("<h3>Start Game</h3>");
      $('#timer-dom').hide();
      $('.trivia-dom').hide();
      $('.score-dom').hide();
      }
      return;

      }

function startGame(){
      console.log("starting game");
      isGameStarted = true;
      $('#start').hide();
      $('.trivia-dom').show();
      $('.timer-dom').show();
      loadQuestion();

      return;
      // isGameStarted = true;
      }

function wrongAnswer(){
      console.log("playing WRONG answer");
return;
}      

function correctAnswer(){
      console.log("playing CORRECT answer");
return;
}  

function selectQuestion(){
      console.log("selecting Question");

return;
} 

function checkAnswer(){
      console.log("checking Answer");
return;
} 

// function updateDOM(){
//       $("#start").hide();
//       $("#target-number").html("<h2>Target Coin: " + targetNum + "</h2>");
//       $("#wins-dom").html("<h2>Wins: " + wins + "</h2>");
//       $("#loss-dom").html("<h2>Losses: " + losses + "</h2>");
//       $("#counter").html("<h2>Crypto Counter: " + counter + "</h2>");
//       return;
//       }

// function scoreCheck(){

//       if (counter === targetNum) {
//             alert("YOU WIN!");
//             wins++;
//             resetGame();
//           }
      
//           else if (counter >= targetNum) {
//             alert("YOU LOST!");
//             losses++;
//             resetGame();
//           }

//       updateDOM();       
//       return; 
//       }

function loadQuestion (){
      $('#question-dom').html("<h2>" + Q1.question + "</h2>");

      $('#answer1-dom').attr('data-answer', Q1.answer1);
      $('#answer1-dom').html("<h2>" + Q1.answer1 + "</h2>");

      $('#answer2-dom').attr('data-answer', Q1.answer2);
      $('#answer2-dom').html("<h2>" + Q1.answer2 + "</h2>");

      $('#answer3-dom').attr('data-answer', Q1.answer3);
      $('#answer3-dom').html("<h2>" + Q1.answer3 + "</h2>");

      $('#answer4-dom').attr('data-answer', Q1.answer4);
      $('#answer4-dom').html("<h2>" + Q1.answer4 + "</h2>");

    return;     
      }

//PAGE LOAD
pageLoad();

// Click events
$("#start").on("click", function() {
      console.log("game started " + isGameStarted);
      startGame();
      console.log("game started " + isGameStarted);
      return;
     });

$(".answers-dom").on("click", function() {
      var selectedAnswer = ($(this).attr("data-answer"));
      // coinValue = parseInt(coinValue);
      // counter += coinValue;
      // console.log("coin value is " + coinValue );
      // scoreCheck();  
      console.log("You selected " + selectedAnswer);
      });



// DOCUMENT READY END
});