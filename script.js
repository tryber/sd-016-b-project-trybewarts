const btnFazLogin = document.querySelector('#faz-login');
const iptEmail = document.querySelector('#email');
const iptSenha = document.querySelector('#senha');
const formLocal = document.querySelector('.local-form');
const btnCheck = document.querySelector('#agreement');
const btnEnviar = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const contador = document.querySelector('#counter');
const cont = 500;
const localDados = document.querySelector('.local-dos-dados');
const iptName = document.querySelector('#input-name');
const iptLastName = document.querySelector('#input-lastname');
const iptEmailR = document.querySelector('#input-email');
const iptCasa = document.querySelector('#house');
const nomeLocal = document.querySelector('#nome-local');
const emailLocal = document.querySelector('#email-local');
const casaLocal = document.querySelector('#casa-lcoal');
const familiaLocal = document.querySelector('#famila-local');
const materiasLocal = document.querySelector('#materias-local');
const avaliacaoLocal = document.querySelector('#avaliacao-local');
const observacaoLocal = document.querySelector('#observacao-local');

btnFazLogin.addEventListener('click', () => {
  if (iptEmail.value === 'tryber@teste.com' && iptSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

btnCheck.addEventListener('change', () => {
  if (btnEnviar.disabled === false) {
    btnEnviar.disabled = true;
  } else {
    btnEnviar.disabled = false;
  }
});

textArea.addEventListener('input', () => {
  const element = textArea.value;
  const elementParse = parseInt(element.length, 10);
  const conta = elementParse % cont;
  const sobtracao = cont - conta;
  contador.innerHTML = sobtracao;
});

function familia() {
  let stringaqui = '';
  const iptFamilia = document.querySelectorAll('.family');
  for (let i = 0; i < iptFamilia.length; i += 1) {
    if (iptFamilia[i].checked === true) {
      stringaqui = iptFamilia[i].value;
    }
  }
  return stringaqui;
}

function materias() {
  let string = '';
  const iptMaterias = document.querySelectorAll('.subject');
  for (let i = 0; i < iptMaterias.length; i += 1) {
    if (iptMaterias[i].checked === true) {
      string += `${iptMaterias[i].value}, `;
    }
  }
  string = string.substring(0, string.length - 1);
  string = string.substring(0, string.length - 1);
  return string;
}

function avaliate() {
  let string = '';
  const element = document.querySelectorAll('.rate');
  for (let i = 0; i < element.length; i += 1) {
    if (element[i].checked === true) {
      string = element[i].value;
    }
  }
  return string;
}

btnEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  formLocal.style.display = 'none';
  localDados.style.display = 'initial';
  nomeLocal.innerHTML = `Nome: ${iptName.value} ${iptLastName.value}`;
  emailLocal.innerHTML = `Email: ${iptEmailR.value}`;
  casaLocal.innerHTML = `Casa: ${iptCasa.value}`;
  familiaLocal.innerHTML = `Família: ${familia()}`;
  materiasLocal.innerHTML = `Matérias: ${materias()}`;
  avaliacaoLocal.innerHTML = `Avaliação: ${avaliate()}`;
  observacaoLocal.innerHTML = `Observações: ${textArea.value}`;
});
