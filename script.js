const emailLogin = document.getElementById('email-login');
const pass = document.getElementById('pass');
const agree = document.getElementById('agreement');
const qtChart = document.getElementById('textarea');
const count = document.getElementById('counter');

function login() {
  if (emailLogin.value === 'tryber@teste.com' && pass.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

document.getElementById('btn-login').addEventListener('click', login);
// requisito 18
const btnSubmit = document.getElementById('submit-btn');
btnSubmit.disabled = true;

function CheckAgreement() {
  if (agree.value === 'on') { // se o valor do agree for on o botao estara habilitado
    btnSubmit.disabled = false;
  }
}
agree.addEventListener('change', CheckAgreement);
// requisito 20
function countChar() {
  count.innerText = qtChart.maxLength - qtChart.value.length;
  return count.innerText;
}
qtChart.addEventListener('input', countChar);

// requisito 21
function result() {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.querySelector('input[name ="family"]:checked').value;
  const evaluation = document.querySelector('input[name ="rate"]:checked').value;
  const text = qtChart.value;

  document.getElementById('evaluation-form').innerHTML = `
    <p>Nome: ${name} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Casa: ${house}</p>
    <p>Família: ${family}</p>
    <p>Avaliação: ${evaluation}</p>
    <p>Observações: ${text}</p>
  `;
}

btnSubmit.addEventListener('click', result);
