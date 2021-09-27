function login() {
  const emailLogin = document.getElementById('email-login');
  const pass = document.getElementById('pass');
  if (emailLogin.value === 'tryber@teste.com' && pass.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

document.getElementById('btn-login').addEventListener('click', login);
// requisito 18
const btnSubmit = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');
btnSubmit.disabled = true;

function CheckAgreement() {
  if (agree.value === 'on') { // se o valor do agree for on o botao estara habilitado
    btnSubmit.disabled = false;
  }
}
agree.addEventListener('change', CheckAgreement);
// requisito 20
const qtChart = document.getElementById('textarea');
const count = document.getElementById('counter');
function countChar() {
  count.innerText = qtChart.maxLength - qtChart.value.length;
  return count.innerText;
}
qtChart.addEventListener('input', countChar);
// requisito 21
/* Todos os campos do formulário devem ser substituídos.
Nome: Alguem Aqui
Email: email@mail.com
Casa: Casa Escolhida
Família: Família Escolhida
Matérias: Matérias, Marcadas, Aqui
Avaliação: NotaAqui
Observações: Observações aqui */
/* function replaceForm() {
  const getForm = document.getElementById('evaluation-form');
  getForm.innerHTML = '';
  const name = document.getElementById('input-name').value;
  const lasName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const famlily = document.getElementById('label-family').value;
  const classes = document.getElementById('label-content').value;
  const rate = document.getElementById('label-rate').value;
  const obs = document.getElementById('textarea').value;
  getForm.innerText = 'Nome: '+ name + ' ' + lasName; ... verificar erro. colocar os outros input...
}
btnSubmit.addEventListener('click', replaceForm); */
