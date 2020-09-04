const btnInitForm = document.querySelector('#submit-initForm')
btnInitForm.addEventListener('click', handleSubmit)
const form = querySelector('#init-contact-form')

function handleSubmit(event) {
    event.preventDefault()
    if (!verifyFormData(form)) {
        console.log('deu merda')
        return
    }
    const {
        nome,
        email,
        whatsapp,
        nomeStartup,
        site,
    } = event.target

    const userData = {
        nome: nome.value,
        email:email.value,
        whatsapp: whatsapp.value,
        nomeStartup: nomeStartup.value,
        site: site.value,
    }

    const userDataJson = JSON.stringify(userData)
    localStorage.setItem('userInfo', userDataJson)
    window.location.href = '/submitForm.html'
    console.log('chegou aqui')
};
