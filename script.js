let formDiv = document.querySelector('.trybewarts-login');
function validateAccount() {
    let email = document.querySelector('#emailInput');
    let password = document.querySelector('#passwordInput');
    if(email.value === '' || password.value === '') {
        alert('Email ou senha inválidos.');
    } else {
        alert('Olá, Tryber!');
    }

}

window.onload = function () {

let button = document.querySelector('#buttonSubmit');
button.addEventListener('click', form);

function form(event) {
    event.preventDefault();

    validateAccount();
}

}