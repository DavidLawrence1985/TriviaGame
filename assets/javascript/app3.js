//=====question array object

$(document).ready(function (){

    $("#game").hide();
    $("#endPage").hide();

    $("#start").on("click", function() {
        $("#start").hide();
        countdown();
        displayQuestion();
        checkAnswer();         
    });

    $("#restart").on("click", function(){
        questionCount = 0;
        $("#endPage").hide();
        countdown();
        displayQuestion();
        checkAnswer();
    })

    var game = [
        {
        question: "Which beer company was founded in 1984 and brews the ever-growing in popularity Samuel Adams brand?" ,
        answers: ["Harpoon Brewery", "Samuel Adams Brewery", "Boston Beer Company", "New England Brewing"],
        correctAnswer: "Boston Beer Company",
        note: "Boston Beer Company is owner Jim Koch's baby, who purportedly made Sam Adams from an old family recipe. The company has grown and is stretching the definition of what a craft beer company is for many beer geeks.",
    },
    {   
        question: "What is the ideal temperature for enjoying an ale?",
        answers:["Room temperature", "Ice cold", "Slightly warm", "Cellar temperature"],
        correctAnswer: "Cellar temperature",
        note: "52F-59F is generally considered ideal for consuming ale. 45F-46F is for lagers. 'Ice cold' is for serving any mass-produced pale light lager, thereby making taste somewhat less of a factor. Room temperature is a sliding scale and is a myth as far as how beer is served in Europe. Finally, if your beer is hot, throw it away."
    },  
    {   
        question: "Which of the following is a classic California brew which has spurned a style known as 'California Common Ale?'",
        answers:["Anchor Steam Beer", "Sierra Nevada Pale Ale", "Lagunitas DayTime ", "Bear Republic Racer 5"],
        correctAnswer: "Anchor Steam Beer",
        note: "Also known as a 'Steam Beer' (which is trademarked by Anchor Brewing Co.), this beer is made by fermenting with lager yeast at higher ale temperatures in odd fermenters resulting in a clean, somewhat fruity beer."

    },  
    {   
        question: "From an old Belgian tradition, this type of beer is fermented in an open-air vat (called a koelschip - pronounced something like cool-ship) and fermented with the wild yeasts and bacteria present in the brewery.",
        answers:["Oud Bruin", "Saison", "Gueuze", "Lambic"],
        correctAnswer: "Lambic",
        note: "Lambics are often done in koelschips in Belgium to this day. Cantillon and Rodenbach are classic examples. The yeasts and bacteria are now found to be a part of the breweries themselves (critters love to hide in wood!) in larger numbers more than anything floating free in the air of the Senne Valley. These strains are cultivated and pitched in barrels or separate fermenters by many modern brewers without the need of the open air."
    },  
    {   
        question: "According to German Beer Purity Law, what are the only ingredients to be used to make beer?",
        answers:["Water, Hops, Barley, Yeast", "Grains, Water, Yeast", "Water, Barley, Hops", "Water, Hops, Wheat"],
        correctAnswer: "Water, Barley, Hops",
        note: "According to the 1516 Bavarian law, the only ingredients that could be used in the production of beer were water, barley and hops. The text does not mention yeast as an ingredient, since its existence was not yet known."
    },  
    {   
        question: "The term IBU stands for which of the following?",
        answers:["International Beer University ", "Interpreted Beer Units", "International Beer Units", "International Bitterness Unit"],
        correctAnswer: "International Bitterness Unit",
        note: "It was once thought that Sierra Nevada'a pale ale was a bitter monster at 45 IBUs, but craft brewers have pushed that threshold over 100 and beyond, into IBUs so high that they are theoretical and cannot be detected by the human palate."
    },  
    {   
        question: "How old is the worlds oldest drinkable beer?",
        answers:["100-125 years", "300-400 years", "50-75 years", "200-225 years"],
        correctAnswer: "200-225 years",
        note: "In 2010, the world’s oldest drinkable beer was found on a Baltic Sea shipwreck, placing the beers age at  around 200 years old."

    },  
    {   
        question: "One of the most popular beer styles in America is currently IPA, what does IPA stand for?",
        answers:["Irish Pale Ale", "India Pale Ale", "International Pale Ale", "Indigenous Peoples' Ale"],
        correctAnswer: "India Pale Ale",
        note: "Traditionally with a higher alcohol by volume than pale ale, IPA was first brewed for merchant sailors traveling around the cape of Africa. The higher alcohol content would spoil much less quickly than the lower content pale ale"
    },   
    {   question:"",
        answers:["","","",""],
        correctAnswer:"",
        note: ""
}           
    ];
    //======variables for game 
    var questionCount = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered =0;
    var match;
    var guessed;
    var info;
    var timer = 15;
    var myTime = $("#timer");
    var timerId = setInterval(countdown, 1000);


        //=====display timer    
    function countdown() {
        if (timer == 0) {
           clearInterval(timerId);
           showUnanswer();
            next();
            unanswered++;
        } else {
            myTime.text(timer);
            timer--;
        }
    }

    function reset(){
        $("#game").hide();
    }

    function next(){
        setTimeout(reset, 3000);
        setTimeout(displayQuestion, 3000);
    
    }
    
    function showUnanswer(){
        $("#note").text("Out of time! The correct answer is" + " " +  match + " "+ ":" + " " + info).show();
    }
    function showCorrect(){
        $("#note").text("That is Correct" + " " + ":" + " " + info).show();
    }

    function showIncorrect(){
        $("#note").text("Sorry, you would be Wrong, The correct answer is " + " " +  match + " "+" : " + " " + info).show();
    }
    function displayQuestion(){
        timer = 15;
        myTime.text(timer);
        $("#note").empty();
        $("#game").show();
        info = game[questionCount].note;
        match = game[questionCount].correctAnswer;
        $("#questions").html(game[questionCount].question);
        $("#answerOne").html(game[questionCount].answers[0]).attr("name",game[questionCount].answers[0]);
        $("#answerTwo").html(game[questionCount].answers[1]).attr("name",game[questionCount].answers[1]);
        $("#answerThree").html(game[questionCount].answers[2]).attr("name",game[questionCount].answers[2]);
        $("#answerFour").html(game[questionCount].answers[3]).attr("name",game[questionCount].answers[3]);
        questionCount++;
        if (questionCount > 8) {
            $("game").hide();
            $("#endPage").show();
        }
        console.log(questionCount);
    };

    $(".answer").on("click", function() {
        guessed = true;
        if (guessed = true){
           // timer = 15;
            myTime.text(timer);
            clearInterval(timerId)
            next();
            guessed= false;
        }
    })
    
    function checkAnswer() {
        $("#answerOne").on("click", function() {
            if($(this).attr("name") === match){
                console.log("right");
                correct +=1;
                showCorrect();
                console.log(correct)
            }
            else{
                showIncorrect()
                console.log("wrong");
                incorrect += 1;    
            }    
        });

        $("#answerTwo").on("click", function() {
            if($(this).attr("name") === match){
                console.log("right")
                correct += 1;
                showCorrect();
            }
            else{ 
                showIncorrect();
                console.log("wrong");
                incorrect+=1;
            }   
        });

        $("#answerThree").on("click", function() {
            if($(this).attr("name") === match){
                console.log("right")
                correct+=1;
                showCorrect();
            }
            else{   
                console.log("wrong");
                incorrect++;
                showIncorrect();
            }
        });

        $("#answerFour").on("click", function() {
            if($(this).attr("name") === match){ 
                console.log("right")
                correct+=1;
                showCorrect();
            }
            else{
                console.log("wrong");
                incorrect+=1;
                showIncorrect();
            }  
        });
    }    
    
    $("#correct").text(correct);
    $("#incorrect").text(incorrect);
    $("#unanswered").text(unanswered);
});
    

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
   