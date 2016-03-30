var questions = [ {
    id: 1,
    question: "What is the name of the Golden Goddesses that created the land of Hyrule?",
    answers: ["Saria, Zelda, and Impa","Din, Nayru, and Farore","Lily, Violet, and Rose","Annalise, Clara, and Josaphine"],
    correctAnswer: "Din, Nayru, and Farore"
    }, 
    {
    id: 2,
    question: "What are the three parts of the Triforce called?",
    answers: ["Power, Wisdom, and Courage", "Bravery, Courage, and Strength","Power, Wisdom, and Bravery","Wisdom, Bravery, and Strength"],
    correctAnswer: "Power, Wisdom, and Courage"
    },
    {
    id: 3,
    question: "Where do you first meet your horse, Epona?",
    answers: ["Kokiri Forest","Gerudo Valley","Lon Lon Ranch","Goron City"],
    correctAnswer: "Lon Lon Ranch"
    }, 
    {
    id: 4,
    question: "What temple serves as the entrance to the sacred realm?",
    answers: ["Temple of Time","Shadow Temple","Fire Temple","Water Temple"],
    correctAnswer: "Temple of Time"
    }, 
    {
    id: 5,
    question: "What song would you play to warp to the Forest Temple?",
    answers: ["Forest Lullaby","Minuet of Forest","Bolero of Trees","Serenade of the Woods"],
    correctAnswer: "Minuet of Forest"
    }];

var counter = 0;
var selectedAnswers = [];
var numberCorrect = 0;

$(document).ready(function(){
    $("#start").click(function(){
        $(".introduction").hide();
        $("#start").hide();
        $("#submit").show();
        $("#question").show();
        buildQuestion(questions[counter]);
    });

    $("#submit").click(function(){
        if (!$("input[name='name']").is(':checked')) {
            /*Notify the user that the item isn't selected 
            w/ an alert or div with an error*/
            //return;
        }
        var selectedAnswer = $("input[name='answerGroup']:checked").data("id");
        selectedAnswers.push(selectedAnswer);
        if (selectedAnswer === questions[counter].correctAnswer){
            $("#correctAnswer").fadeIn(1500);
            $("#correctAnswer").delay(2000);
            $("#correctAnswer").fadeOut(1500);
            numberCorrect++;
        }

        else {
            $("#incorrectAnswer").fadeIn(1500);
            $("#incorrectAnswer").delay(2000);
            $("#incorrectAnswer").fadeOut(1500);


            //append answer to html
        }

        //buildQuestion(questions[counter++]);
        if (counter === questions.length) {

        }
        else {
            buildQuestion(questions[++counter]);
        }
    });
  
});

function buildQuestion(question){
    $("#question").html("");
    $("#question").append("<h2>" + question.question + "</h2>");
        question.answers.forEach(function(answer){
            $("#question").append('<p> <input name="answerGroup" data-id="'+ answer +'" type="radio"/>' + answer + '</p>');
        });
}