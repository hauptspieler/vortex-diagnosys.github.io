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

function verifyFormData(container) {
	debugger
	if (container.nodeName !== 'FORM') throw new Error('container must be a <form> node')
	const array = Array.from(container.elements);
	let isValid = true;
	if (!container.checkValidity()) {
		array.map((el) => {
			if (el.required) {
				if (el.classList.contains('error')) {
					return;
				}
				const div = document.createElement('div');
				const p = document.createElement('p');
				p.innerText = 'Campo obrigatório';
				el.classList.add('error');
				div.appendChild(p);
				el.parentElement.appendChild(div);
				console.log(el);
				isValid = false
			}
		});
		return isValid;
	}
}
