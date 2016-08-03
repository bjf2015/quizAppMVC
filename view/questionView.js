function QuestionView () {

}

//function that dynamically adds each question to HTML or DOM
QuestionView.prototype.renderQuestion = function renderQuestion(currentQuestion) {
    console.log(questionGroup);
    //render questions dynamically
    newQuestion = '<h1 id="question-area">' + questionGroup[currentQuestion].questionText + '</h1>';
    htmlQuestion.append(newQuestion);
}

