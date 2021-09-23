let email = document.getElementById('email');
let password = document.getElementById('password');
let loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', checkLogin);

function checkLogin() {
    if (email.value == 'tryber@teste.com' && password.value == '123456'){
        alert("Olá, Tryber!")
    } {
        alert("Email ou senha inválidos.")
    }
}