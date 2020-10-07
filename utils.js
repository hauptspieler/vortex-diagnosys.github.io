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


///////////// mascara de nome (com JQUERY)   /////////////////////

$("#nameId").keyup(function(e) {
	var previousKey = this.value.substring(this.value.length-2,this.value.length-1);
	//check if previous key is a space, or for the first letter and if it is a valid letter
	if ((previousKey == " " || this.value.length == 1) && (e.which >= 65 && e.which <= 90)) {
		var newVal = this.value.substring(0, this.value.length-1);        
		this.value =newVal + String.fromCharCode(e.keyCode);
	}
  });
  



//////////////     mascara de telefone   ////////////////

function mascara(input, funcaoFormatadora) {
    // pegar o valor - OK
  // formatar com a mascara
  // escrever no inpout o valor formatado
  setTimeout(function () {
      var valorFormatado = funcaoFormatadora(input.value);
        if (valorFormatado != input.value) {
            input.value = valorFormatado;
        }
  
      console.log(input.value);
    }, 1);
}

function formatarTelefone(v) {
    var r = v.replace(/\D/g,"");
    r = r.replace(/^0/,"");
    if (r.length > 10) {
        // 11+ digits. Format as 5+4.
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/,"($1) $2-$3");
    }
    else if (r.length > 5) {
        // 6..10 digits. Format as 4+4
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/,"($1) $2-$3");
    }
    else if (r.length > 2) {
        // 3..5 digits. Add (0..)
        r = r.replace(/^(\d\d)(\d{0,5})/,"($1) $2");
    }
    else {
        // 0..2 digits. Just add (0
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
}

//////////////////////////////////////////////////////////////////////

