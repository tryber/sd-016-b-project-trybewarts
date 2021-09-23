const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#senha');
const buttonEnter = document.querySelector('#btn-entrar');
const checkAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const countCaracters = document.querySelector('#counter');

buttonEnter.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

window.onload = () => {
  btnSubmit.disabled = true;
};

checkAgreement.addEventListener('click', () => {
  if (checkAgreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

countCaracters.innerText = 500;
textArea.addEventListener('keyup', () => {
  const count = 500 - textArea.value.length;
  countCaracters.innerText = `${count}`;
});

function conteudoCheck() {
  const conteudo = document.getElementsByClassName('subject');
  const check = [];
  for (let index = 0; index < conteudo.length; index += 1) {
    const checkTrue = conteudo[index];
    if (checkTrue.checked) {
      check.push(checkTrue.value);
    }
  }
  return check.join(', ');
}

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const inputN = document.querySelector('#input-name').value;
  const inputL = document.querySelector('#input-lastname').value;
  const inputEmailF = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const evo = document.querySelector('input[name="rate"]:checked').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const textarea = document.getElementById('textarea').value;
  const form = document.getElementById('evaluation-form');
  const checkbox = conteudoCheck();
  form.innerHTML = `Nome: ${inputN} ${inputL} Email: ${inputEmailF}  Casa: ${house}`;
  form.innerHTML += `Família: ${family}  Matérias: ${checkbox}  Avaliação: ${evo}`;
  form.innerHTML += `Observações: ${textarea}`;
});
