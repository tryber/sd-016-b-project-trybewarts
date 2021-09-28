const btnLogin = document.getElementById('btn-login');
const agreementInput = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const nameInput = document.getElementById('input-name');
const lastNameInput = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const houseInput = document.getElementById('house');
const form = document.getElementById('evaluation-form');

btnLogin.addEventListener('click', () => {
  const email = document.getElementById('input-login').value;
  const password = document.getElementById('input-password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreementInput.addEventListener('click', () => {
  if (agreementInput.checked === true) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', true);
  }
});

textArea.addEventListener('input', () => {
  const total = textArea.maxLength;
  const caracteres = textArea.value.length;
  counter.innerText = total - caracteres;
});

/* Utilizamos este site de inspiração: https://pt.stackoverflow.com/questions/83463/pegar-valores-checkbox-com-javascript para a função abaixo */

function getLearningValue() {
  const learning = document.querySelectorAll('[name=learning]:checked');
  const value = [];
  for (let index = 0; index < learning.length; index += 1) {
    if (index === 0) {
      value.push(learning[index].value);
    } else {
      value.push(` ${learning[index].value}`);
    }
  }
  return value;
}

function createElements() {
  const elementos = ['Nome', 'Email', 'Casa', 'Família', 'Matérias', 'Avaliação', 'Observações'];
  for (let index = 0; index < elementos.length; index += 1) {
    const paragraph = document.createElement('p');
    paragraph.innerText = `${elementos[index]}: ${localStorage.getItem(elementos[index])}`;
    form.appendChild(paragraph);
  }
}

window.onload = () => {
  btnSubmit.addEventListener('click', () => {
    localStorage.setItem('Nome', `${nameInput.value}  ${lastNameInput.value}`);
    localStorage.setItem('Email', emailInput.value);
    localStorage.setItem('Casa', houseInput.value);
    localStorage.setItem('Família', document.querySelector('[name=family]:checked').value);
    localStorage.setItem('Matérias', getLearningValue());
    localStorage.setItem('Avaliação', document.querySelector('[name=rate]:checked').value);
    localStorage.setItem('Observações', textArea.value);
    form.innerHTML = '';
    createElements();
    localStorage.clear();
  });
};
