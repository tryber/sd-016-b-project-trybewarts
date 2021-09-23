const inputEmail = document.getElementById('inputEmail');
const inputSenha = document.getElementById('inputSenha');

function button(evento) {
  evento.preventDefault();
  if ((inputEmail.value === 'tryber@teste.com') && (inputSenha.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const botaoLogin = document.querySelector('.button');

function chamaButton() {
  botaoLogin.addEventListener('click', button);
}

window.onload = () => {
  chamaButton();
};

/* Requisito 18 */
const checkBoxAgreement = document.getElementById('agreement');
checkBoxAgreement.addEventListener('click', () => {
  const buttonEnviar = document.getElementById('submit-btn');

  if (checkBoxAgreement.checked) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
});

/* Requisito 20 */
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const limite = 500;

textarea.addEventListener('input', () => {
  counter.innerText = limite - textarea.value.length;
});
