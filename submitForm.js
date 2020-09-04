const btnSubmitForm = querySelector('#submit-form');
console.log(btnSubmitForm)
btnSubmitForm.addEventListener('click', handleSubmit);
const form = querySelector('#form');

function handleSubmit(event) {
	event.preventDefault();
	if (!verifyFormData(btnInitForm)) return
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
