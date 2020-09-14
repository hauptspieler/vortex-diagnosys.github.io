let lastOptionClicked;

const app = querySelector('#app');
const backButton = querySelector('#voltar');
const progress = querySelector('#progress');
const progressBar = querySelector('#progress-bar');
const counterSurvey = querySelector('#counter-survey');
const btnFinish = querySelector('#finish');
const systemFeedback = querySelector('#final-answers');

const div = createElement('div');
const ul = createElement('ul');

div.className = 'survey-container';
ul.id = 'survey-list';

let questionStep = 0;
let currentSurvey;

let userAnswers = {
	userInfo: JSON.parse(sessionStorage.getItem('userInfo')),
	userData: JSON.parse(sessionStorage.getItem('userData')),
	surveyData: null,
};

backButton.addEventListener('click', backOneQuestion);
btnFinish.addEventListener('click', finishSurvey);

function init() {
	updateCounterSurvey();
	renderSurvey();
	toggelEnableBackButton();
}

function renderSurvey() {
	const h2 = createElement('h2');
	currentSurvey = data[questionStep];
	h2.innerText = currentSurvey.question;
	const { choices } = currentSurvey;

	div.appendChild(h2);

	choices.map((item, index) => {
		const li = createElement('li');
		li.addEventListener('click', goToNextQuestion);
		const questionMark = createElement('div');
		const p = createElement('p');
		const img = createElement('img');
		img.className = 'tick off';
		img.src = './assets/icon/tick.svg';

		questionMark.innerText = questionMarkTextArray[index];
		questionMark.className = 'question-mark';
		p.innerText = item.choice;

		li.dataset.number = item.choiceNumber;
		li.className = 'choice-item';

		li.appendChild(questionMark);
		li.appendChild(p);
		li.appendChild(img);
		ul.appendChild(li);
	});

	div.appendChild(ul);
	app.appendChild(div);
}

function clearCurrentSurvey() {
	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}
	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}
}

function goToNextQuestion(event) {
	// console.log(event);
	if (getSurveyStep() >= data.length - 1) {
		renderModal();
		return;
	}
	let dataNumber;
	let element = event.target;

	if (event.target.nodeName === 'P' || event.target.nodeName === 'DIV') {
		element = event.target.parentElement;
		dataNumber = element.dataset.number;
	} else {
		dataNumber = event.target.dataset.number;
	}

	let currentImage;

	currentImage = findImageNode(element);
	if (currentImage.classList.contains('off')) {
		currentImage.classList.remove('off');
	}
	lastOptionClicked = dataNumber;
	optionMostClicked(dataNumber);

	const answer = {
		question: data[getSurveyStep()].question,
		questionNumber: getSurveyStep(),
		answer: event.target.innerText,
		answerNumber: parseInt(dataNumber),
	};

	answers.push(answer);
	setTimeout(() => {
		updateIncrementData();
		currentImage.classList.add('off');
	}, 0);
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

function updateCounterSurvey() {
	counterSurvey.textContent = `${questionStep}/${data.length} `;
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
	debugger;
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

function finishSurvey() {
	userAnswers.surveyData = {
		optionClicked,
		answers,
	};

	const body = JSON.stringify(userAnswers)
	console.log()
	const config = {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		mode: 'cors',
		cache: 'default',
		body,
	}

	console.log(userAnswers)

	fetch('https://vortex-survey.herokuapp.com/full-survey', config)
	.then(res => window.location.href = './thankyou.html')

	// window.location.href = './initForm.html'
}

function findBiggerAnswer() {
	let maxClicked = optionClicked.a;
	let higerOption = Object.keys(optionClicked)[0];
	for (option in optionClicked) {
		if (optionClicked[option] > maxClicked) {
			higerOption = option;
		}
	}
	return higerOption;
}

function showModalSystemFeedback() {
	const mostClicked = findBiggerAnswer();
	const modal = querySelector('#modal');
	console.log(modal.classList.contains('hide'));
	if (modal.classList.contains('hide')) {
		modal.classList.remove('hide');
	}
	querySelector('#card-content').innerText = finalAnswers[mostClicked];
	backButton.style.display = 'none';
}

function renderModal() {
	incrementSurveyStep();
	updateCounterSurvey();
	clearCurrentSurvey();
	showModalSystemFeedback();
}

init();
