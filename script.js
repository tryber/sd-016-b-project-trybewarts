const botaoEviar = document.getElementById('enviar');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

function validacaoEmaileSenha() {
  if (email.value === 'tryber@teste.com' || senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

botaoEviar.addEventListener('click', validacaoEmaileSenha);

const checkAgreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

function agreementCheck() {
  if (checkAgreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

agreementCheck();

checkAgreement.addEventListener('click', agreementCheck);

const textArea = document.getElementById('textarea');
const paragraph = document.getElementById('counter');

paragraph.innerText = 500;

function contador() {
  const numerocaractere = textArea.value.length;
  const resultado = 500 - numerocaractere;
  paragraph.innerText = resultado;
}

textArea.addEventListener('keyup', contador);
