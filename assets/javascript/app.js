//=====question array object

$(document).ready(function (){

    $("#game").hide();
    $("#restart").hide();

    $("#start").on("click", function() {
        $("#start").hide();
        $("#game").show(gamePlay());         
    });

    var game = [
        {
        question: "Which NFL team won the first Super Bowl" ,
        answers: ["Green Bay Packers", "Kansas City Chiefs", "Dallas Cowboys", "Baltimore Colts"],
        correctAnswer: "Green Bay Packers",
        note: "The Packers beat the Chiefs ",
    },
    {   
        question: "what is 2 + 2",
        answers:["3", "5", "4", "6"],
        correctAnswer: "4",
        note: "hahah"
    },  
    {   
        question: "what is 3+5",
        answers:["3", "5", "8", "6"],
        correctAnswer: "8",
        note: ""

    },  
    {   
        question: "what is 2 + 7",
        answers:["3", "5", "4", "9"],
        correctAnswer: "9",
        note: ""
    },  
    {   
        question: "what is 2 * 2",
        answers:["3", "5", "4", "6"],
        correctAnswer: "4",
        note: ""
    },  
    {   
        question: "what is 10 - 7",
        answers:["3", "5", "4", "6"],
        correctAnswer: "3",
        note: ""
    },  
    {   
        question: "what is 15+12",
        answers:["23", "27", "20", "26"],
        correctAnswer: "27",
        note: ""
    },  
    {   
        question: "what is 3 + 7",
        answers:["9", "5", "14", "10"],
        correctAnswer: "10",
        note: ""
    },              
    ];
    //======variables for game 
    var questionCount = 0;
    var timer = 10;
    var correct = 0;
    var incorrect = 0;
    var count = 0;
    var showQuestion = setInterval(displayQuestion, 10000);
    var stopQuestion = clearInterval(showQuestion);
    var match;
    var guessed = false;
    var info;
    var pause = setTimeout(nextQuestion, 8000);


    //=====display timer

    /*var gametimer = setInterval(function(){
        timer--;
        $("#timer").text("Time Remaining : " + timer);
        if(timer == 0){
            $("#timer").text(" Time Remaining : " + timer);
        }
            
        },1000);*/
        

    //====functions
    function nextQuestion(){
        $("#note").hide();
        gamePlay();
        }

    function pause(){
        $(".answer").on("click", function() {
            guessed = true;
            if (guessed = true){
            pause;   
            guessed = false;
            }
        })
    }

    function displayQuestion(){
        showQuestion;
        info = game[questionCount].note;
        match = game[questionCount].correctAnswer;
        $("#questions").html(game[questionCount].question);
        $("#answerOne").html(game[questionCount].answers[0]).attr("name",game[questionCount].answers[0]);
        $("#answerTwo").html(game[questionCount].answers[1]).attr("name",game[questionCount].answers[1]);
        $("#answerThree").html(game[questionCount].answers[2]).attr("name",game[questionCount].answers[2]);
        $("#answerFour").html(game[questionCount].answers[3]).attr("name",game[questionCount].answers[3]);
        questionCount++;
        console.log(questionCount);
    };
    
    function checkQuestion(){
        $("#answerOne").on("click", function() {
            if($(this).attr("name") === match){
                console.log("right");
                correct++;
                $("#note").text("correct " + info);
            }
            else{
                $("#note").text("Sorry the correct answer is" + match + " "+" : " + info);
                console.log("wrong");
                incorrect++;    
            }    
        });

        $("#answerTwo").on("click", function() {
            if($(this).attr("name") === match){
                console.log("right")
                correct++;
                $("#note").text("correct " + info);
            }
            else{
                $("#note").text("Sorry the correct answer is " + match + ": " + info); 
                console.log("wrong");
                incorrect++;
            }   
        });

        $("#answerThree").on("click", function() {
            if($(this).attr("name") === match){
                console.log("right")
                correct++;
            }
            else{
                console.log("wrong");
                incorrect++;
            }
        });

        $("#answerFour").on("click", function() {
            if($(this).attr("name") === match){
                console.log("right")
                correct++;
            }
            else{
                console.log("wrong");
                incorrect++;
            }  
        });
    }

    function gamePlay() {  
        displayQuestion(); 
        //showQuestion;
        checkQuestion();
    } 

})
//start button and restart button that goes re runs game play 
//create a countquestion var that ++ the question and index to show next question
//setTimeout() to set to 10000 then clearTimeout to run next question function
// set questions with their choices and which choice is the correct answer 
// create time countdown 
// if answer is chosen or time reaches 0 clearInterval 
// if answer is correct add to correct show gif 
// if incorrect show answer and wait 3 seconds 
//show next question
//once all questions asked show total of correct and incorrect respnoses
   