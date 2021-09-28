/* REQUISITO 3 */
const buttonEntrar = document.getElementById('botaoEntrar');
const inputLogin = document.getElementById('email');
const inputPassword = document.getElementById('password');

function login(event) {
  event.preventDefault();
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonEntrar.addEventListener('click', login);

let submitBtn = document.getElementById('submit-btn')
let checkbox = document.getElementById('agreement')

function enable(){
  // checkbox.checked == true {
    // document.getElementById('submit-btn').removeAttribute("disabled");
    submitBtn.disabled = !submitBtn.disabled
  }
};
checkbox.addEventListener('click', enable);