const btnSubmitForm = document.querySelector('#submit-form');
btnSubmitForm.addEventListener('click', handleSubmit);
const container = document.querySelector('#container');
let form;
const array = Array.from(container.elements)
function handleSubmit(event) {
	event.preventDefault();
	if (!container.checkValidity()) {
        array.map(el => {
            if (el.required) {
                if (el.classList.contains('error')) {
                    return
                }
                const div = document.createElement('div')
                const p = document.createElement('p')
                p.innerText = 'Campo obrigatório'
                el.classList.add('error')
                div.appendChild(p)
                el.parentElement.appendChild(div)
                console.log(el)
            }
        })
        return
	} 
	const {
		founded,
		description,
		sector,
		businessModel,
		businessType,
		aceleratedStartup,
		dedication,
		goals,
		howDiagnosys,
		whyDiagnosys,
    } = event.target.form;

	const data = {
		founded: founded.value,
		description: description.value,
		sector: sector.value,
		businessModel: businessModel.value,
		businessType: businessType.value,
		aceleratedStartup: aceleratedStartup.value,
		dedication: dedication.value,
		goals: goals.value,
		howDiagnosys: howDiagnosys.value,
		whyDiagnosys: whyDiagnosys.value,
	};
	sessionStorage.setItem('userData', JSON.stringify(data));
	window.location.href = './index.html';
}
