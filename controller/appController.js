
$(function () {
    var form = $('#record-question');
    var scoreboard = $('#scoreboard');
    var button = $('#button-area');

    var view = new AppView (button, scoreboard, form);
});

function renderAnswers(currentQuestion) {
    showChoices = '<form id="record-question">';
    //render answers dynamically
    $.each(questionGroup[currentQuestion].potentialAnswer, function(index, value){
        showChoices += '<div><input class="" type="radio" id="answer-'+index+'" name="possibleAnswer" value="'+index+'"><label for="answer-'+index+'">'+value+'</label></div>'
    });
    showChoices+= '</form>';
    htmlAnswers.append(showChoices);
}
//view.render pass insance of question
//link event to view in controller
// controller checks if correct by validation