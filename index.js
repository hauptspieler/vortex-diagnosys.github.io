const btnInitForm = document.querySelector('#index-form-button');
const form = querySelector('#init-contact-form');
const inputs = Array.from(querySelectorAll('input'));

btnInitForm.addEventListener('click', handleSubmit);

function addEventListenersToInputs() {
	function removeErrorOnChange(event) {
		const element = event.target;
		if (element.classList.contains('error')) {
			element.classList.remove('error');
			const parentEl = element.parentElement;
			const errorDiv = parentEl.lastElementChild;
			parentEl.removeChild(errorDiv);
		}
	}

	inputs.map((el) => {
		el.addEventListener('keyup', removeErrorOnChange);
	});
}

const phoneInput = document
	.querySelector('#whatsapp')
	

function handleSubmit(event) {
	event.preventDefault();
	const formValidity = verifyFormData(form);

	if (!formValidity) {
		return;
	}

	const { nome, email, whatsapp, nomeStartup, site } = form.elements;

	const userData = {
		nome: nome.value,
		email: email.value,
		whatsapp: whatsapp.value,
		nomeStartup: nomeStartup.value,
		site: site.value,
	};

	const userDataJson = JSON.stringify(userData);
	sessionStorage.setItem('userInfo', userDataJson);
	window.location.href = './finalForm.html';
	console.log('chegou aqui');
}

addEventListenersToInputs();
