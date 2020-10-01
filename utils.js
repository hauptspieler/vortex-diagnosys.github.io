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
				if (el.validity.valid) {
					if (el.classList.contains('error')) {
						el.classList.remove('error');
						const parentDiv = el.parentElement;
						parentDiv.removeChild(parentDiv.lastElementChild);
					}
					return;
				}

				if (!el.classList.contains('error')) {
					const div = document.createElement('div');
					const p = document.createElement('p');

					p.classList.add('danger');
					div.className = 'error-container';
					if (el.type === 'email') {
						p.innerText = 'Preencha um email válido';
					} else if (el.type === 'tel') {
						p.innerText = 'Preencha um telefone vaildo';
					} else {
						p.innerText = 'Campo obrigatório';
					}
					console.log(el.type);

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

function phoneValidator(string, keyName) {
	let output = '';
	if (string === '') return output;
	if (keyName === 'Backspace') return string;
	if (keyName === 'ArrowLeft') return string;
	if (keyName === 'ArrowRight') return string;

	if (string.length < 9 && string.includes('-')) {
		string.replace('-', '');
	}

	if (!string.includes('(')) {
		output = `(${string.substr(0, 1)}`;
	}

	if (string.includes('(') && !string.includes(')')) {
		output = `${string.substr(0, 3)})`;
	}

	if (string.includes('(') && string.includes(')')) {
		output = string;
	}

	if (string.includes('(') && string.includes(')')) {
		const ddd = string.substr(0, 4);
		if (ddd.length === 4 && ddd.includes('(') && ddd.includes(')')) {
		}
	}

	if (string.includes('-')) {
		output = string;
	}

	if (string.length >= 8 && !string.includes('-')) {
		output = `${string.substr(0, 8)}-`;
	}
	if (string.length === 14 && string.includes('-')) {
		string = string.replace('-', '')
		output = `${string.substr(0, 9)}-${string.substr(9, 13)}`;
	}

	return output;
}
