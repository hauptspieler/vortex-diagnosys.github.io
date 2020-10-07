const usersInfoContainer = querySelector('#users-info');

const userInfoArray = [];
let toRender;

async function getUsersFromFirebase() {
	const config = {
		method: 'get',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		mode: 'cors',
		cache: 'default',
	};
	const respPending = await fetch(
		'https://vortex-survey-api.herokuapp.com/full-survey',
		config
	);
	const response = await respPending.json();

    userInfoArray.push(...convertUserInfoObjectToArray(response));
    console.log("--------------------------------------------------------------------------------------------------------------------------------")
    console.log(userInfoArray)
    console.log("--------------------------------------------------------------------------------------------------------------------------------")
	userInfoArray.map(
		(user) => (usersInfoContainer.innerHTML += renderUserData(user))
	);
	const button = document.querySelectorAll('button');
	const buttonArray = Array.from(button);
	buttonArray.map((node) => node.addEventListener('click', toggleInfo));
}

function convertUserInfoObjectToArray(data) {
	console.log(data);
	const userArray = [];

	for (let a in data) {
		userArray.push(data[a]);
	}

	return userArray;
}

getUsersFromFirebase();

const renderUserData = (user) => {
	const { surveyData, userData, userInfo } = user;

	const {
		aceleratedStartup,
		businessModel,
		businessType,
		dedication,
		description,
		founded,
		goals,
		howDiagnosys,
		sector,
		whyDiagnosys,
	} = userData;

	let answersHtml = '<h2>Q&A</h2>';
    let optionClicked = '';
    

	for (const el in surveyData.answers) {
		const answer = surveyData.answers[el];
		console.log(surveyData.answers[el]);
		if (answer) {
			answersHtml += `
                <div class="answers">
                    <div><strong>Questão:</strong> <span class="user-answer">${answer.question}</span></div>
                    <div><strong>Resposta:</strong> <span class="user-answer-number">${answer.answer}</span></div>
                </div>
            `;
		}
	}

	for (const el in surveyData.optionClicked) {
		optionClicked += `<div class="options">${el}: ${surveyData.optionClicked[el]}</div>`;
	}

	const uuid = `hash${userInfo.whatsapp}${Date.now()}`;

	const component = `
        <div class="userinfo-container" data-toggle="collapsed">
            <header class="header">
                <p>
                    <strong>Nome</strong> <span>${userInfo.nome}</span>
                </p>
                <p>
                    <strong>Email:</strong> <span>${userInfo.email}</span>
                </p>
                <div>
                    <div><strong>nome da startup:</strong> <span>${userInfo.nomeStartup}</span></div>
                    <div><strong>site:</strong> <span>${userInfo.site}</span></div>
                    <div><strong>telefone:</strong> <span>${userInfo.whatsapp}</span></div>
                    <div><strong>Fase:</strong> <span>${surveyData.result}</span></div>

                </div>
                <button class="btn btn-primary" id="${uuid}" >VER DETALHES</button>
            </header>
            <div class="body" id="${uuid}" >
                <section class="userData" id=user-data>
                    <h2>Sobre a startup</h2>
                    <div class="userDataOption">
                        <strong>Startup acelerada:</strong> <span class="user-data-answer">${aceleratedStartup}</span>
                    </div>
                    <div class="userDataOption">
                        <strong>business model:</strong> <span class="user-data-answer">${businessModel}</span>
                    </div>
                    <div class="userDataOption">
                        <strong>business type:</strong> <span class="user-data-answer">${businessType}</span>
                    </div>
                    <div class="userDataOption">
                        <strong>dedication:</strong> <span class="user-data-answer">${dedication}</span>
                    </div>
                    <div class="userDataOption">
                        <strong>description:</strong> <span class="user-data-answer">${description}</span>
                    </div>
                    <div class="userDataOption">
                        <strong>founded:</strong> <span class="user-data-answer">${founded}</span>
                    </div>
                    <div class="userDataOption">
                        <strong>goals:</strong> <span class="user-data-answer">${goals}</span>
                    </div>
                    <div class="userDataOption">
                        <strong>how did you find our diagnosys:</strong> <span class="user-data-answer">${howDiagnosys}</span>
                    </div>
                    <div class="userDataOption">
                        <strong>why do you want to have our diagnosys:</strong> <span class="user-data-answer">${sector}</span>
                    </div>
                    <div class="userDataOption">
                        <strong>aceleratedStartup:</strong> <span class="user-data-answer">${whyDiagnosys}</span>
                    </div>
                    
                </section>
                <section class="survey-data">
                    ${answersHtml}
                    <div class="optionClicked">
                        <h2>Opções clicadas</h2>
                        ${optionClicked}
                    </div>
                </section>
            </div>
        </div>
    `;

	return component;
};

function toggleInfo(event) {
	console.log(event.target.id);
	const section = document.querySelector(`div#${event.target.id}`);
	if (section.classList.contains('toggle')) {
		section.classList.remove('toggle');
	} else {
		section.classList.add('toggle');
	}
}
