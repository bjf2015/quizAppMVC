function Question(questionText, arrayOfAnswers, correctAnswer) {
    this.questionText = questionText;
    //array every question is an element of an array
    this.potentialAnswer = arrayOfAnswers;
    this.correctAnswer = correctAnswer;
    this.id = getUId();

}

Question.prototype.validateAnswer = function(answerId) {
    return answerId === this.correctAnswer;
}
