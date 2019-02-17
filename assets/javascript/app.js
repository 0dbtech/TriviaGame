$(document).ready(function() {

console.log("javascript test");





//Question Objects START 
var Q1 = {
      question:"This is Q1",
      answer1:"Q1 Answer 1",
      answer2:"Q1 Answer 2",
      answer3:"Q1 Answer 3",
      answer4:"Q1 Answer 4",
      correctAnswer: function(){
            return this.answer1;
      },
      //responsive off
      gif:'<iframe src="https://giphy.com/embed/l46C5G0CQoniAisP6" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/studiosoriginals-subway-queens-action-bronson-l46C5G0CQoniAisP6">via GIPHY</a></p>',
      
};

//access correct answer method
console.log("testing Q object " + Q1.correctAnswer());

var Q2 = {
      question:"This is Q2",
      answer1:"Q2 Answer 1",
      answer2:"Q2 Answer 2",
      answer3:"Q2 Answer 3",
      answer4:"Q2 Answer 4",
      correctAnswer: function(){
            return this.answer2;
      },
      //responsive off
      gif:'',

};
console.log("testing Q object " + Q2.correctAnswer());

var Q3 = {
      question:"This is Q3",
      answer1:"Q3 Answer 1",
      answer2:"Q3 Answer 2",
      answer3:"Q3 Answer 3",
      answer4:"Q3 Answer 4",
      correctAnswer: function(){
            return this.answer3;
      },
       //responsive off
       gif:'',

};
console.log("testing Q object " + Q3.correctAnswer());

var Q4 = {
      question:"This is Q4",
      answer1:"Q4 Answer 1",
      answer2:"Q4 Answer 2",
      answer3:"Q4 Answer 3",
      answer4:"Q4 Answer 4",
      correctAnswer: function(){
            return this.answer4;
      },
       //responsive off
       gif:'',
};

console.log("testing Q object " + Q4.correctAnswer());

//array for question objects
var questionsArray = [Q1,Q2,Q3,Q4];
console.log("testing questions array " + questionsArray[0].question);

//Question Objects END

//GLOBAL variables
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
      // isGameStarted = true;
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
      $('.score-dom').append("<h2>Here's how well you know NYC:</h2>");
      $('.score-dom').append("<h2>Correct Answers: " + correctCount + "</h2>");
      $('.score-dom').append("<h2>Wrong Answers: " + wrongCount + "</h2>");
      $('.score-dom').append("<h2>Unanswered: " + unAnsweredCount + "</h2>");
      $('.qresults-dom').hide();
      $('.score-dom').show();
      $('#start').html("<h3>Play Again</h3>");
      $('#start').show();

  
      // var unAnsweredCount = 0;
      // var correctCount = 0;
      // var wrongCount = 0;
}

//media functions

//END media functions

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
      $('#correct-dom').append("<h2>CORRECT!</h2>");
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
      $("#timeup-dom").append("<h2>TIME IS UP!</h2>");
      $("#timeup-dom").append("<h2>The correct answer is " + currentQuestion.correctAnswer() + "</h2>");
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

//Under construction
function checkAnswer(){
      console.log("checking Answer");
      
      //PAUSE TIMER 1
      if (selectedAnswer === currentQuestion.correctAnswer()){
      correctAnswer()
      
      }
      else {
      wrongAnswer();
      
      }
      runTimer2();
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

    //  Interval Demonstration
    //  Set our number counter to 100.
//enter time     
    var timerNumber = 11;


    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
            //     $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
            //     $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function runTimer() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
//prevent negative counter
//enter time again     
     timerNumber = 11;


    }

    //Between questions timer
    function runTimer2() {
      timerNumber = 3;
      clearInterval(intervalId);
      intervalId = setInterval(decrement2, 1000);
//prevent negative counter
//enter time again     
    


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

        //  Alert the user that time is up.

////ADD answer select functions here        
      //   alert("Time Up!");

//test score updates
      //   correctAnswer();
      //   wrongAnswer();
      //   unAnswered();
        unAnswered();
      //   loadQuestion();

        //Next question
      //   loadQuestion();
      }
    }

//DECREMENT 2 Between Questions
    //  The decrement function.
    function decrement2() {

      //  Decrease number by one.
      timerNumber--;

      // //  Show the number in the #timer-dom tag.
      // $("#timer-dom").html("<h2>Time remaining:  " + timerNumber + "</h2>");


      //  Once number hits zero...
      if (timerNumber === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.

////ADD answer select functions here        
      //   alert("Time Up!");

//test score updates
      //   correctAnswer();
      //   wrongAnswer();
      //   unAnswered();
      isGameOver();        
      // nextQuestion();
      //   loadQuestion();

        //Next question
      //   loadQuestion();
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
//unanswered?      
    }

  

//TIMER END////////


/////////////////////////////////////////////////////      
//PAGE LOAD
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
      // coinValue = parseInt(coinValue);
      // counter += coinValue;
      // console.log("coin value is " + coinValue );
      // scoreCheck();  
      console.log("You selected " + selectedAnswer);
      checkAnswer();
      return;
      });



// DOCUMENT READY END
});