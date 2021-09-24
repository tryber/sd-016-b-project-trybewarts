// /* Valindo Email e Senha - Requisito 3 */

const button = document.getElementById('buttonSubmit');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

/* Desabilitando button */
const checkBox = document.getElementById('agreement'); // recupera checkbox

function desableButton() {
  document.querySelector('#submit-btn').disabled = true;
}

function enableButton() {
  document.querySelector('#submit-btn').disabled = false;
}

window.onload = () => {
  desableButton();

  checkBox.addEventListener('click', () => {
    enableButton();
  });
};
