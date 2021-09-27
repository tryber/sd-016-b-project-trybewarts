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

/* Requisito 20 */
const coment = document.querySelector('#textarea');
const cont = document.querySelector('#counter');

coment.addEventListener('keyup', () => {
  const char = coment.value.length;
  cont.innerHTML = `${char}/${500 - char}`;
});

/* Requisito 21 */
const buttonSend = document.getElementById('submit-btn');
const valor = [];
function inputChecked() {
  const arrayMaterias = document.querySelectorAll('input[name="check"]:checked');
  for (let i = 0; i < arrayMaterias.length; i += 1) {
    valor.push(` ${arrayMaterias[i].value}`);
  }
  return valor;
}

const newForm = document.querySelector('#evaluation-form');
const newField = document.createElement('p');
buttonSend.addEventListener('click', () => {
  const newObject = {
    studentName: document.getElementById('input-name').value,
    lastName: document.getElementById('input-lastname').value,
    email: document.getElementById('input-email').value,
    house: document.getElementById('house').value,
    familySelected: document.querySelector('input[name="family"]:checked').value,
    programing: inputChecked(),
    rating: document.querySelector('input[name="rate"]:checked').value,
    comment: document.getElementById('textarea').value };
  newForm.innerHTML = ' ';
  newField.innerText = `Nome: ${newObject.studentName} ${newObject.lastName}
  Email: ${newObject.email}
  Casa: ${newObject.house}
  Família: ${newObject.familySelected}
  Matérias: ${newObject.programing}
  Avaliação: ${newObject.rating}
  Observações: ${newObject.comment}`;
  newForm.appendChild(newField);
});
