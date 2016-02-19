var read = require('read');

var Question = function(id,text,answer){
	this.text = text;
	this.answer = answer;
	this.id = id;
};

var Quiz = function(){
	this.questions = [];
	this.current_question = {};
}

Quiz.prototype.add_question = function(q){
	this.questions.push(q);
	
};

Quiz.prototype.set_next_question = function(){

	if (this.questions.length > 0){
		this.current_question = this.questions[this.questions.length-1];
		this.get_answer();
	} else {
		console.log("GAME OVER");
	}
};

Quiz.prototype.get_answer = function(){
	var self = this;

	read({prompt: self.current_question.answer},function(err,answer){
		console.log(answer)
		console.log("Your answer is "+self.current_question.answer.toLowerCase() == answer.toLowerCase());
		self.questions.pop();
		self.set_next_question();
	});
	

};



var quiz = new Quiz;

for (var i=1; i<=2; i++){
	quiz.add_question(new Question(i,"Question"+i,"answer"+i));
}


quiz.set_next_question();


