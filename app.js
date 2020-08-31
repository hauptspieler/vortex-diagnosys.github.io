const questionMarkTextArray = ['A', 'B', 'C', 'D', 'E'];
let answers = [];
let optionClicked = {
	a: 0,
	b: 0,
	c: 0,
	d: 0,
	e: 0,
};
let lastOptionClicked;

const app = querySelector('#app');
const backButton = querySelector('#voltar');
const progress = querySelector('#progress');
const progressBar = querySelector('#progress-bar');
const counterSurvey = querySelector('#counter-survey');
const div = createElement('div');
const ul = createElement('ul');
const h2 = createElement('h2');

div.className = 'survey-container';
ul.id = 'survey-list';

let questionStep = 0;
let currentSurvey;

backButton.addEventListener('click', backOneQuestion);

function init() {
	updateCounterSurvey();
	renderSurvey();
	toggelEnableBackButton();
}

function renderSurvey() {
	currentSurvey = data[questionStep];
	h2.innerText = currentSurvey.question;
	const { choices } = currentSurvey;

	div.appendChild(h2);

	ul.dataset.question = currentSurvey.question;

	choices.map((item, index) => {
		const li = createElement('li');
		li.addEventListener('click', goToNextQuestion);
		const questionMark = createElement('div');
		const p = createElement('p');

		questionMark.innerText = questionMarkTextArray[index];
		questionMark.className = 'question-mark';
		p.innerText = item.choice;

		li.dataset.number = item.choiceNumber;
		li.className = 'choice-item';

		li.appendChild(questionMark);
		li.appendChild(p);
		ul.appendChild(li);
	});

	div.appendChild(ul);
	app.appendChild(div);
}

function clearCurrentSurvey() {
	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}
	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}
}

function goToNextQuestion(event) {
	console.log(event);
	let dataNumber;
	if (event.target.nodeName === 'P' || event.target.nodeName === 'DIV') {
		console.log(event.target.nodeName);
		console.log(event.target.parentElement.dataset.number);
		const element = event.target.parentElement;
		dataNumber = element.dataset.number;
	} else {
		console.log(event.target.dataset.number);
		dataNumber = event.target.dataset.number;
	}
	if (getSurveyStep() === data.length - 1) return;
	lastOptionClicked = dataNumber
	optionMostClicked(dataNumber)
	const answer = {
		question: data[getSurveyStep()].question,
		questionNumber: getSurveyStep(),
		answer: event.target.innerText,
		answerNumber: parseInt(dataNumber),
	};

	answers.push(answer);
	updateIncrementData();
}

function verifySurveyStep() {
	const finishButton = querySelector('#finish');
	if (questionStep + 1 === data.length) {
		finishButton.disabled = false;
	} else {
		finishButton.disabled = true;
	}
}

function updateProgress() {
	const arraySize = data.length;
	progress.style.width = `${((questionStep + 1) / arraySize) * 100}%`;
}

function createElement(element) {
	return document.createElement(element);
}

function incrementSurveyStep() {
	questionStep++;
}

function decrementSurveyStep() {
	questionStep--;
}

function getSurveyStep() {
	return questionStep;
}

function backOneQuestion() {
	if (getSurveyStep() === 0) return;
	updateDecrementData();
	answers.splice(getSurveyStep(), 1);
}

function toggelEnableBackButton() {
	if (getSurveyStep() === 0) backButton.disabled = true;
	else backButton.disabled = false;
}

function querySelector(element) {
	if (typeof element !== 'string')
		throw new Error('element must be a string');
	return document.querySelector(element);
}

function updateCounterSurvey() {
	counterSurvey.textContent = `${questionStep + 1}/${data.length} `;
}

function updateIncrementData() {
	incrementSurveyStep();
	clearCurrentSurvey();
	renderSurvey();
	toggelEnableBackButton();
	updateProgress();
	verifySurveyStep();
	updateCounterSurvey();
}

function updateDecrementData() {
	decrementSurveyStep();
	clearCurrentSurvey();
	renderSurvey();
	toggelEnableBackButton();
	verifySurveyStep();
	updateCounterSurvey();
	updateOptionsClicked();
}

function optionMostClicked() {
	switch (parseInt(lastOptionClicked)) {
		case 1:
			optionClicked.a++;
			break;
		case 2:
			optionClicked.b++;
			break;
		case 3:
			optionClicked.c++;
			break;
		case 4:
			optionClicked.d++;
			break;
		case 5:
			optionClicked.e++;
			break;
		default:
			throw new Error('Oops, element without data number');
	}
}

function updateOptionsClicked() {
	console.log(lastOptionClicked)
	debugger
	switch (parseInt(lastOptionClicked)) {
		case 1:
			optionClicked.a--;
			break;
		case 2:
			optionClicked.b--;
			break;
		case 3:
			optionClicked.c--;
			break;
		case 4:
			optionClicked.d--;
			break;
		case 5:
			optionClicked.e--;
			break;
		default:
			throw new Error('Oops, element without data number');
	}
}

init();
