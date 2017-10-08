 'use strict;'
$(function(){
	var count = 0;
	var questions = [];
	function Counter(){
		count++;
	};
	function Test(){
		this.ask = 'ask';
		this.ans1 = 'ans1';
		this.ans2 = 'ans2';
		this.ans3 = 'ans3';
		this.correctAnswer = 'ans1';
	};
	function TestRadio() {
		this.countCorrect = 1;
	};
	function TestCheckBox() {
		this.countCorrect = 'many';
	};
	TestRadio.prototype = Object.create(Test.prototype);
	TestRadio.prototype.constructor = TestRadio;
	TestCheckBox.prototype = Object.create(Test.prototype);
	TestCheckBox.prototype.constructor = TestCheckBox;
	$('.btn').on('click', 
		function (){
			questions[count]= new Test();
			questions[count].ask = $('.ask').val();
			questions[count].ans1 = $('.ans1').val();
			questions[count].ans2 = $('.ans2').val();
			questions[count].ans3 = $('.ans3').val();
			questions[count].correctAnswer = $('.correct').val();
			Counter();
			localStorage.setItem('questions', JSON.stringify(questions));
			var ques = localStorage.getItem('questions');
			console.log('Масив питань: ' + ques);
			console.log('Щойно створенне питання: ');
			console.log(JSON.parse(ques)[count-1]);
		}
	)
});