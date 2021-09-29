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
// pesquisa sobre como pegar conteudos checked: https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value
// https://pt.stackoverflow.com/questions/226144/pegar-valor-de-todos-os-checkbox-marcados
function SaveChecked() { //salva o conteudo do checked tipo checkbox
  let subjects = ''; // string vazia
  const subjectsSelect = []; // array vazio
  const inputSubjects = document.querySelectorAll('input[class="subject"]:checked'); // pega o conteudo com classe subject se tiver checked.
  for (let index = 0; index < inputSubjects.length; index += 1) {  // loop para pegar qual indice tem o check
    subjectsSelect.push(inputSubjects[index].value); // inclui o indice com check no array
  }
  subjects += subjectsSelect.join(', '); //transforma conteudo em string separado por , espaco fonte:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  return subjects;
}

function result() {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.querySelector('input[name ="family"]:checked').value;
  const evaluation = document.querySelector('input[name ="rate"]:checked').value;
  const text = qtChart.value;
  const subjects = SaveChecked();

  document.getElementById('evaluation-form').innerHTML = `
    <p>Nome: ${name} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Casa: ${house}</p>
    <p>Família: ${family}</p>
    <p>Avaliação: ${evaluation}</p>
    <p>Observações: ${text}</p
    <p>Matérias: ${subjects}</p
  `;
}

btnSubmit.addEventListener('click', result);
