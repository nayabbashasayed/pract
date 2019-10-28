var question = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");

var quesForm = document.getElementById("quesForm");
var quesNum = document.getElementById("quesNum");
var box = document.getElementById("box");
var retakeOrSubmit = document.getElementById("retakeOrSubmit");
var retake = document.getElementById("retake");
var submitQues = document.getElementById("submitQues");

userNewQuestion = document.getElementById("userNewQuestion");
newQuestion = document.getElementById("newQuestion");
newOptionA = document.getElementById("newOptionA");
newOptionB = document.getElementById("newOptionB");
newOptionC = document.getElementById("newOptionC");
newOptionD = document.getElementById("newOptionD");
correctAnswer = document.getElementById("correctAnswer");
newQuesSubmit = document.getElementById("newQuesSubmit");
quesForm.addEventListener("click", populateQuestion);
retake.addEventListener("click", retakeQuiz);
submitQues.addEventListener("click", submitUserQuestion);
newQuesSubmit.addEventListener("click", updateQuesToDefault);
options = document.getElementsByName("option");
correctAnsCount = document.getElementById("correctAnsCount");
correctAnsIndex = document.getElementById("correctAnsIndex");

var quesIndex = 0;
var selectedVal;
var correctAnswerCount = 0;
var correctAnswerIndex = [];

var defQuestions = [
	{
		question : "Q01?",
		choiceA : "A1",
		choiceB : "B1",
		choiceC : "C1",
		choiceD : "D1",
		answer : "A"
	},
	{
		question : "Q02?",
		choiceA : "A2",
		choiceB : "B2",
		choiceC : "C2",
		choiceD : "D2",
		answer : "A"

	},
	{
		question : "Q03?",
		choiceA : "A3",
		choiceB : "B3",
		choiceC : "C3",
		choiceD : "D3",
		answer : "B"

	},
	{
		question : "Q04?",
		choiceA : "A4",
		choiceB : "B4",
		choiceC : "C4",
		choiceD : "D4",
		answer : "B"

	}
];

function updateQuesToDefault() {
	var updateQuestion = {
		question : newQuestion.value,
		choiceA : newOptionA.value,
		choiceB : newOptionB.value,
		choiceC : newOptionC.value,
		choiceD : newOptionD.value,
		answer : correctAnswer.value
	};
	defQuestions.push(updateQuestion);
	userNewQuestion.style.display = "none";
	addToLocalStorage(updateQuestion);
	retakeQuiz();
}

function retakeQuiz() {
	quesIndex = 0;
	box.style.display = "block";
	retakeOrSubmit.style.display = "none";
	renderQuestion();
	correctAnswerCount = 0;
	correctAnsIndex.innerHTML = "";
}

function submitUserQuestion() {
	box.style.display = "none";
	userNewQuestion.style.display = "block";
	retakeOrSubmit.style.display = "none";
}

function renderQuestion() {
	console.log(defQuestions.length);
	question.innerHTML = defQuestions[quesIndex].question;
	choiceA.innerHTML = defQuestions[quesIndex].choiceA;
	choiceB.innerHTML = defQuestions[quesIndex].choiceB;
	choiceC.innerHTML = defQuestions[quesIndex].choiceC;
	choiceD.innerHTML = defQuestions[quesIndex].choiceD;
	quesNum.innerHTML = "Question " + (quesIndex + 1) + " of " + defQuestions.length + " questions";
}

function optionSelected() {
	let i = 0;
	for (i = 0; i < options.length; i++) {
		if (options[i].checked) {
			selectedVal = options[i].value;
			if (selectedVal === defQuestions[quesIndex].answer) {
				correctAnswerCount++;
				correctAnswerIndex[quesIndex] = true;
			} else {
				correctAnswerIndex[quesIndex] = false;
			}
			options[i].checked = false;
			return true;
		}
	}
	if (quesIndex < defQuestions.length) {
		alert("Please select an option");
	}
	return false;
}

function populateQuestion() {
	if (optionSelected()) {
		quesIndex += 1;
		if (quesIndex === defQuestions.length) {
			box.style.display = "none";
			correctAnsCount.innerHTML = "Total correct answers : "+ correctAnswerCount;
			let i = 0;
			for (i = 0; i < defQuestions.length; i++) {
				correctAnsIndex.innerHTML +="Question num " + (i + 1) +": "+ correctAnswerIndex[i] + "<br/>";
			}
			retakeOrSubmit.style.display = "block";
			return true;
		}
		renderQuestion();
	}
}

function checkLocalStorageQuestions() {
	if (localStorage.getItem("localQuestions")) {
		var storedQuestions = JSON.parse(localStorage.getItem("localQuestions"));
		for (let i = 0; i < storedQuestions.length; i++) {
			defQuestions.push(storedQuestions[i]);
		}
	}
}

function addToLocalStorage(updateQuestion) {
	if (localStorage.getItem("localQuestions")) {
		var getLocalQues = localStorage.getItem("localQuestions");
		var localQuesParse = JSON.parse(getLocalQues);
		localQuesParse.push(updateQuestion);
		localStorage.setItem("localQuestions", JSON.stringify(localQuesParse));
	} else {
		var localQ = [];
		localQ.push(updateQuestion);
		localStorage.setItem("localQuestions", JSON.stringify(localQ));
	}
}
checkLocalStorageQuestions();
renderQuestion();
