// 3 - adiciona função do click no submit
const botao = document.getElementById('button');

botao.addEventListener('click', () => {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const rateButtons = document.getElementById('rate-buttons');
for (let i = 1; i < 11; i += 1) {
  const createButtons = document.createElement('input');
  const createLabels = document.createElement('label');
  createLabels.htmlFor = `${'rate'}${i}`;
  createLabels.innerHTML = i;
  createButtons.type = 'radio';
  createButtons.id = `${'rate'}${i}`;
  createButtons.value = i;
  createButtons.name = 'rate';
  createButtons.innerHTML = i;
  createLabels.appendChild(createButtons);
  rateButtons.appendChild(createLabels);
}

// 18- habilita botao quando da check no checkbox de concordar
const btn = document.getElementById('submit-btn');
const check = document.getElementById('agreement');
function checked() {
  if (check.checked === true) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', 'disabled');
  }
}
check.addEventListener('click', checked);

// 20- cria contador de caracteres
function increment(eventKey) {
  const txtLength = eventKey.target.maxLength - eventKey.target.textLength;
  document.getElementById('counter').innerHTML = txtLength;
}

const count = document.getElementById('textarea');
count.addEventListener('keyup', increment);
count.addEventListener('keydown', increment);
