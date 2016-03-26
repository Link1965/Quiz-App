var questions = [ {
    id: 1,
    question: "What is the name of the Golden Goddesses that created the land of Hyrule?",
    answers: ["Saria, Zelda, and Impa","Din, Nayru, and Farore","Lily, Violet, and Rose","Annalise, Clara, and Josaphine"],
    correctAnswer: "Saria, Zelda, and Impa"
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
    answers: ["Forest Lullaby","Minuet of Forest","Bolero of Trees","Serenade of the Woods"]
    correctAnswer: "Minuet of Forest"
    }];

$(document).ready(function(){
    $("#start").click(function()
        $(".introduction").hide();
        $("#question").show();
    );

    questions.forEach(function(question){
        $("#question").append("<h2>" + question.question + "</h2>");
    question.answers.forEach(function(answer){
        $("#question").append("<p>" + answer + "</p>");
        });
    });  
});