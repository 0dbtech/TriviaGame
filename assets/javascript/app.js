$(document).ready(function() {

      console.log("javascript test");

//Question Objects START 
var Q1 = {
      question:"What is the population size of NYC as of 2016?",
      answer1:"over 8,000,000",
      answer2:"over 12,000,000",
      answer3:"over 5,000,000",
      answer4:"over 6,000,000",
      correctAnswer: function(){
            return this.answer1;
      },
      //responsive off
      gif:'<iframe src="https://giphy.com/embed/l46C5G0CQoniAisP6" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/studiosoriginals-subway-queens-action-bronson-l46C5G0CQoniAisP6">via GIPHY</a></p>',
      
};

//access correct answer method
// console.log("testing Q object " + Q1.correctAnswer());

var Q2 = {
      question:"In which year was the City of New York established?",
      answer1:"1622",
      answer2:"1651",
      answer3:"1632",
      answer4:"1624",
      correctAnswer: function(){
            return this.answer4;
      },
      gif:'<iframe src="https://giphy.com/embed/C1yJhyUOIwTYs" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sky-new-york-america-C1yJhyUOIwTYs">via GIPHY</a></p>',

};

var Q3 = {
      question:"Approximately how many people use NYC public transit annually?",
      answer1:"Way too many",
      answer2:"800 million",
      answer3:"3.5 billion",
      answer4:"1.75 billion",
      correctAnswer: function(){
            return this.answer4;
      },
       gif:'<iframe src="https://giphy.com/embed/3oEdv9pgtUVVYdpaY8" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/wnyc-nyc-subway-rat-3oEdv9pgtUVVYdpaY8">via GIPHY</a></p>',

};

var Q4 = {
      question:"Which is the highest elevated Subway platform in NYC?",
      answer1:"Woodside-61 St",
      answer2:"Smith-9th St",
      answer3:"Van Cortlandt Park-242 St",
      answer4:"Gun Hill Rd",
      correctAnswer: function(){
            return this.answer2;
      },
       gif:'<iframe src="https://giphy.com/embed/26gsiCIKW7ANEmxKE" width="480" height="244" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/car-oprah-winfrey-26gsiCIKW7ANEmxKE">via GIPHY</a></p>',
};

var Q5 = {
      question:"Which of following was NOT filmed at Silvercup Studios in Long Island City?",
      answer1:"The Sopranos",
      answer2:"Ugly Betty",
      answer3:"30 Rock",
      answer4:"Law & Order",
      correctAnswer: function(){
            return this.answer4;
      },
       gif:'<iframe src="https://giphy.com/embed/141xGebUNJWiGI" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/thread-gold-jamaica-141xGebUNJWiGI">via GIPHY</a></p>',
};

var Q6 = {
      question:"Which of the following bridges is used for rail traffic only?",
      answer1:"Hell Gate Bridge",
      answer2:"Williamsburg Bridge",
      answer3:"Queensboro Bridge",
      answer4:"Manhattan Bridge",
      correctAnswer: function(){
            return this.answer1;
      },
       gif:'<iframe src="https://giphy.com/embed/PmEQpCs0xSpC8" width="480" height="319" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/brooklyn-bridge-evening-PmEQpCs0xSpC8">via GIPHY</a></p>',
};

var Q7 = {
      question:"Which genre of music originated in the Bronx?",
      answer1:"Disco",
      answer2:"Hip Hop",
      answer3:"Jazz",
      answer4:"Punk Rock",
      correctAnswer: function(){
            return this.answer2;
      },
       gif:'<iframe src="https://giphy.com/embed/d77o7i3tHnKda" width="480" height="324" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dj-kitty-cat-d77o7i3tHnKda">via GIPHY</a></p>',
};
//Question Objects END

//GLOBAL variables except timer
//array for question objects
var questionsArray = [Q1,Q2,Q3,Q4,Q5,Q6,Q7];
      console.log("testing questions array " + questionsArray[0].question);
var unAnsweredCount = 0;
var correctCount = 0;
var wrongCount = 0;
var selectedAnswer = "";
//index of current question
var iQuestionsArray = 0
var currentQuestion = questionsArray[iQuestionsArray];

      console.log("current question is " + currentQuestion.question);

//functions START
function pageLoad(){
     
      console.log("page load");
      $("#start").html("<h3>Start Game</h3>");
      $('#timer-dom').hide();
      $('.trivia-dom').hide();
      // $('.trivia-dom').empty();
      $('.score-dom').hide();
      $('.score-dom').empty();
 
      return;
      }

function startGame(){
            console.log("starting game");
      
      //reset gloabl vars for new game DO NOT initialize
      unAnsweredCount = 0;
      correctCount = 0;
      wrongCount = 0;
      selectedAnswer = "";
      iQuestionsArray = 0;
      currentQuestion = questionsArray[iQuestionsArray];
            console.log("iQuestionsArray:" + iQuestionsArray);     
            //show answer result container class for new games, populated between questions by append elements
            $('.qresults-dom').show();
            $('#start').hide();
            $('.score-dom').hide();
            $('.score-dom').empty();
            // $('.trivia-dom').show();
            $('#timer-dom').show();
            $('.trivia-dom').show();
            loadQuestion();

      return;
      }

function isGameOver(){
     
      if (iQuestionsArray !== questionsArray.length-1){
            console.log("not finished yet, next question " + iQuestionsArray + " " + questionsArray.length);
            nextQuestion();
            
            }
      else{
            showResults()
      }
      
      return;
}

function showResults (){
            $('.trivia-dom').hide();
            $('#timer-dom').hide();
            $('.score-dom').append("<h2>Here's how well you know New York City:</h2>");
            $('.score-dom').append("<h2>Correct Answers: " + correctCount + "</h2>");
            $('.score-dom').append("<h2>Wrong Answers: " + wrongCount + "</h2>");
            $('.score-dom').append("<h2>Unanswered: " + unAnsweredCount + "</h2>");
            $('.qresults-dom').hide();
            $('.score-dom').show();
            $('#start').html("<h3>Play Again</h3>");
            $('#start').show();
      return;
}



function wrongAnswer(){
            console.log("playing WRONG answer");
            $('.trivia-dom').hide();
            $("#wrong-dom").append("<h2>Wrong Answer!</h2>");
            $("#wrong-dom").append("<h2>The correct answer is " + currentQuestion.correctAnswer() + "</h2>");
            //note 'single' inside "double"
            //video source relative path based on html location
            $("#wrong-dom").append("<video id='vid-dom' width='320' height='176' autoplay><source src='assets/videos/wrong.mp4' type='video/mp4'></video>");
      var vid = document.getElementById("vid-dom");
      function playVid() {
            vid.play();
            }
            $('#wrong-dom').show();
            runTimer2();
            playVid();
            wrongCount++;
      
      return;
}      

function correctAnswer(){
            console.log("playing CORRECT answer");
            $('.trivia-dom').hide();
            $('#correct-dom').append("<h2>Correct!</h2>");
            $("#correct-dom").append("<h2>" + currentQuestion.correctAnswer() + " is Correct!</h2>");
            $("#correct-dom").append(currentQuestion.gif);
            $('#correct-dom').show();
            runTimer2();
            correctCount++;

      return;
}  

function unAnswered(){
            console.log("unanswered time up");
            $('.trivia-dom').hide();
            $("#timeup-dom").append("<h2>Time is up!</h2>");
            $("#timeup-dom").append("<h2>The correct answer is " + currentQuestion.correctAnswer() + "</h2>");
            $("#timeup-dom").append('<iframe src="https://giphy.com/embed/1XdfVRTyn5d31Q1lG0" width="480" height="428" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reaction-mood-stephen-colbert-1XdfVRTyn5d31Q1lG0">via GIPHY</a></p>');
            $('#timeup-dom').show();
            runTimer2();
            unAnsweredCount++;

      return;
}      



function nextQuestion(){
            iQuestionsArray++;
            console.log("iQuestionsArray value is " + iQuestionsArray);
            currentQuestion = questionsArray[iQuestionsArray];
            console.log("Next Question is " + currentQuestion.question);
            console.log("checking value at game end " + iQuestionsArray);
            loadQuestion();

      return;
      }


function checkAnswer(){
            console.log("checking Answer");
      
      //PAUSE TIMER 1
      if (selectedAnswer === currentQuestion.correctAnswer()){
            correctAnswer()
      }
      else {
            wrongAnswer();
      }
      // runTimer2();
      return;
} 


function loadQuestion (){
            //hide and empty previous question elements
            $('#correct-dom').hide();
            $("#correct-dom").empty();
            $('#wrong-dom').hide();
            $("#wrong-dom").empty();
            $('#timeup-dom').hide();
            $("#timeup-dom").empty();
            //populate current question elements
            $('.trivia-dom').show();
            $('#question-dom').html("<h2>" + currentQuestion.question + "</h2>");
            $('#answer1-dom').attr('data-answer', currentQuestion.answer1);
            $('#answer1-dom').html("<h2>" + currentQuestion.answer1 + "</h2>");
            $('#answer2-dom').attr('data-answer', currentQuestion.answer2);
            $('#answer2-dom').html("<h2>" + currentQuestion.answer2 + "</h2>");
            $('#answer3-dom').attr('data-answer', currentQuestion.answer3);
            $('#answer3-dom').html("<h2>" + currentQuestion.answer3 + "</h2>");
            $('#answer4-dom').attr('data-answer', currentQuestion.answer4);
            $('#answer4-dom').html("<h2>" + currentQuestion.answer4 + "</h2>");
            //start clock
            runTimer();
            //test scores
            console.log("correctCount: " + correctCount);
            console.log("wrongCount: " + wrongCount);
            console.log("unAnsweredCount: " + unAnsweredCount);
            console.log("current question is " + currentQuestion.question);
    
      return; 
//END loadQuestion    
}


//TIMER START////////////

//enter time in sec     
var timerNumber = 30;


    //  Variable that will hold our interval ID when we execute
    //  the "run" function
var intervalId;

    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function runTimer() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
//prevent negative counter
//enter time again     
            timerNumber = 30;
            }

//Between questions timer
function runTimer2() {
//prevent negative counter
//enter time again      
            timerNumber = 6;
            clearInterval(intervalId);
            intervalId = setInterval(decrement2, 1000);
            }    

//DECREMENT Question
//  The decrement function.
function decrement() {

      //  Decrease number by one.
            timerNumber--;

      //  Show the number in the #timer-dom tag.
            $("#timer-dom").html("<h2>Time remaining:  " + timerNumber + "</h2>");

      //  Once number hits zero...
      if (timerNumber === 0) {

      //  ...run the stop function.
            stop();

//test score updates
            unAnswered();

            }

      }

//DECREMENT 2 Between Questions
function decrement2() {

      //  Decrease number by one.
            timerNumber--;

      //  Once number hits zero...
      if (timerNumber === 0) {

      //  ...run the stop function.
      stop();

      isGameOver();        
     
            }
      }


function stop() {
            clearInterval(intervalId);
    
      }

//TIMER END////////

/////////////////////////////////////////////////////      
//PAGE LOAD FUNCTIONS
pageLoad();

// Click events
$("#start").on("click", function() {
            startGame();
      return;
      });

$("#restart").on("click", function() {
            pageLoad();
      return;
      });     

$(".answers-dom").on("click", function() {
      selectedAnswer = ($(this).attr("data-answer"));
            console.log("You selected " + selectedAnswer);
            checkAnswer();
      return;
      });

// DOCUMENT READY END
});