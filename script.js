
function Question(text,choises,answer) {
    this.text = text;
    this.choises = choises;
    this.answer = answer;
}

//Question prototype
Question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
}


//Quiz Constructor
function Quiz(question) {
    this.question = question;
    this.score =0;
    this.questionIndex =0;
}

//Quiz prototype
Quiz.prototype.getQuestion = function() {
    return this.question[this.questionIndex];
}
//Quiz Finish
Quiz.prototype.isFinish = function() {
return this.question.length === this.questionIndex;
}
//Quiz guess
Quiz.prototype.guess = function(answer) {
    var question = this.getQuestion();
    if(question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}


var q1 = new Question ("What's the best programming language ?",
["C#","javascript","phyton","asp.net"],"javascript");

var q2 = new Question ("What's the most popular programming language ?",
["C#","javascript","phyton","asp.net"],"javascript");

var q3 = new Question ("What's the best modern  programming language ?",
["C#","javascript","phyton","asp.net"],"javascript");

var question = [q1,q2,q3]


//start quiz

var quiz  = new Quiz(question);


loadQuestion();

function loadQuestion() {
    if(quiz.isFinish()) {
        showScore();
    }
    else{
        var question = quiz.getQuestion();
        var choises = question.choises;
    
        document.querySelector('#question').textContent = question.text;

        for(var i=0; i<choises.length;i++){
            console.log(choises[i]);
            var element = document.querySelector('#choice'+i);
            element.innerHTML = choises[i];
            guess('btn'+i,choises[i]);

        }
    }
}

function guess(id,guess) {
    var btn = document.getElementById(id);
    btn.onclick = function() {
        quiz.guess(guess);
        loadQuestion()
    }
}

function showScore() {
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
    document.querySelector('.card-body').innerHTML = html;
}


