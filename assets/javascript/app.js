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
};
console.log("testing Q object " + Q4.correctAnswer());

//array for question objects
var questionsArray = [Q1,Q2,Q3,Q4];
console.log("testing questions array " + questionsArray[0].question);

//Question Objects END

//variables
var unAnsweredCount = 0;
var correctCount = 0;
var wrongCount = 0;
var isGameStarted = false;

//index of current question
var iQuestionsArray = 0


var currentQuestion = questionsArray[iQuestionsArray];

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
      // $('.trivia-dom').show();
      $('#timer-dom').show();
      loadQuestion();

      return;
      // isGameStarted = true;
      }

function wrongAnswer(){
      console.log("playing WRONG answer");
      $('.trivia-dom').hide();
      $("#wrong-dom").append("<h2>Wrong Answer!</h2>");
      $("#wrong-dom").append("<h2>The correct answer is " + currentQuestion.correctAnswer() + "</h2>");
      $('#wrong-dom').show();
      runTimer2();
      wrongCount++;
return;
}      

function correctAnswer(){
      console.log("playing CORRECT answer");
      $('.trivia-dom').hide();
      $('#correct-dom').append("<h2>CORRECT!</h2>");
      $("#correct-dom").append("<h2>" + currentQuestion.correctAnswer() + " is Correct!</h2>");
      $('#correct-dom').show();
      runTimer2();
      correctCount++;
return;
}  

function unAnswered(){
      console.log("unanswered time up");
      $('.trivia-dom').hide();
      $("#timeup-dom").append("<h2>TIME IS UP!</h2>");
      $("#timeup-dom").append("<h2>Appending</h2>");
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
            loadQuestion();
      return;
      }

//Under construction
function checkAnswer(){
      console.log("checking Answer");
      //PAUSE TIMER 1
      runTimer2();
      wrongAnswer();
return;
} 

function endGame(){
      console.log("Game Over");
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
      $('#correct-dom').hide();
      $("#correct-dom").empty();
      $('#wrong-dom').hide();
      $("#wrong-dom").empty();
      $('#timeup-dom').hide();
      $("#timeup-dom").empty();

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
        nextQuestion();
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
      checkAnswer();
      return;
      });



// DOCUMENT READY END
});