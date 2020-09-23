function createElement(element) {
	return document.createElement(element);
}

function findImageNode(element) {
	let imageNode;

	for (node in element.children) {
		if (element.children[node].nodeName === 'IMG') {
			imageNode = element.children[node];
		}
	}

	return imageNode;
}

function querySelector(element) {
	if (typeof element !== 'string')
		throw new Error('element must be a string');
	return document.querySelector(element);
}

function querySelectorAll(element) {
	if (typeof element !== 'string')
		throw new Error('element must be a string');
	return document.querySelectorAll(element);
}

function verifyFormData(container) {
	// debugger;
	if (container.nodeName !== 'FORM')
		throw new Error('container must be a <form> node');
	const array = Array.from(container.elements);
	let isValid = true;
	if (!container.checkValidity()) {

		array.map((el) => {
			if (el.required || !el.validity.valid) {
				if(el.validity.valid) {
					if (el.classList.contains('error')) {
						el.classList.remove('error')
						const parentDiv = el.parentElement
						parentDiv.removeChild(parentDiv.lastElementChild)
					}
					return
				}
				
				if (!el.classList.contains('error')) {
					const div = document.createElement('div');
					const p = document.createElement('p');

					p.classList.add('danger')
					div.className = 'error-container'
					if (el.type === 'email') {
						p.innerText = 'Preencha um email válido';
					} else if (el.type === 'tel') {
						p.innerText = 'Preencha um telefone vaildo'
					} else {
						p.innerText = 'Campo obrigatório';
					}
					console.log(el.type)
					

					el.classList.add('error');
					div.appendChild(p);
					el.parentElement.appendChild(div);
				}

				isValid = false;
			} 

		});
	}
	return isValid;
}
