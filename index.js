const btnInitForm = document.querySelector('#index-form-button');
const form = querySelector('#init-contact-form');
const inputs = Array.from(querySelectorAll('input'));
const botão = document.querySelector('#index-form-button')
const alerta = document.querySelector('#alert')

btnInitForm.addEventListener('click', validarAlerta);

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
	

function handleSubmit() {
	
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
}

addEventListenersToInputs();




function checkTBox()


{
	console.log('deubosta')

	if (document.getElementById('agreeCheck').checked) 
	
  {
	 botão.classList.remove("btn-disabled")
	 botão.disabled = false
	 alerta.style.display = 'none'
	 
  } else{
	botão.classList.add("btn-disabled")
	botão.disabled = true
	alerta.style.display = 'block'

  }
}


function validarAlerta(event){

	event.preventDefault();

 	if  (!document.getElementById('agreeCheck').checked){
		alerta.style.display='block';

				console.log(window.location)			
	}

		else{

			handleSubmit();
	}
} 