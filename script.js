const inputemail = document.getElementById('email-input');
const inputsenha = document.getElementById('senha-input');
const buttonLogin = document.getElementById('btn-login');
const btnSubmit = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function verificaFormulario() {
  if (inputemail.value === 'tryber@teste.com' && inputsenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', verificaFormulario);

const houses = [
  'Gitnória',
  'Reactpuff',
  'Corvinode',
  'Pytherina',
];

const idHouses = [
  'gitnoria-house',
  'reactpuff-house',
  'corvinode-house',
  'pytherina-house',
];

function selectHouse() {
  const selectHouses = document.getElementById('house');
  for (let index = 0; index < houses.length; index += 1) {
    const optionHouse = document.createElement('option');
    optionHouse.innerHTML = houses[index];
    optionHouse.id = idHouses[index];
    selectHouses.appendChild(optionHouse);
  }
}
selectHouse();

agreement.addEventListener('click', () => {
  if (!agreement.classList.contains('selected')) {
    agreement.classList.add('selected');
    btnSubmit.disabled = false;
  } else {
    agreement.classList.remove('selected');
    btnSubmit.disabled = true;
  }
});

btnSubmit.addEventListener('click', (evt) => {
  evt.preventDefault();
});

textarea.addEventListener('keyup', () => {
  const tamanho = textarea.value.length;
  counter.innerText = 500 - tamanho;
});
