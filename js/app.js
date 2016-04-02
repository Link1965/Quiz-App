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
        if (!$("input[name='answerGroup']").is(':checked')) {
            $("#noAnswer").fadeIn(1500);
            $("#noAnswer").delay(2000);
            $("#noAnswer").fadeOut(1500);
            return;
        }
        
        var selectedAnswer = $("input[name='answerGroup']:checked").data("id");
        selectedAnswers.push(selectedAnswer);
        if (selectedAnswer === questions[counter].correctAnswer){
            $("#correctAnswer").fadeIn(0);
            $("#correctAnswer").delay(1000);
            $("#correctAnswer").fadeOut(1500);
            numberCorrect++;
        }

        else {
            $("#incorrectAnswer").fadeIn(0);
            $("#incorrectAnswer").delay(2000);
            $("#incorrectAnswer").fadeOut(1500);
            $("#incorrectAnswer").html('<h2>' + "You're incorrect!  The correct answer is: " + "</br>" + questions[counter].correctAnswer + '</h2>');
        }

        if (counter === questions.length) {
            $("#questions").hide();
            $("#submit").hide();
            $("#end-page").html('<h2>' + "You got " + numberCorrect + " / 5 answers correct!" + '</h2>');
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