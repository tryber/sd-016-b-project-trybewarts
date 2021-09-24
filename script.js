const inputEmail = document.getElementById('inputEmail');
const inputSenha = document.getElementById('inputSenha');

function button(evento) {
  evento.preventDefault();
  if ((inputEmail.value === 'tryber@teste.com') && (inputSenha.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const botaoLogin = document.querySelector('.button');

function chamaButton() {
  botaoLogin.addEventListener('click', button);
}

window.onload = () => {
  chamaButton();
};

/* Requisito 18 */
const checkBoxAgreement = document.getElementById('agreement');
checkBoxAgreement.addEventListener('click', () => {
  const buttonEnviar = document.getElementById('submit-btn');

  if (checkBoxAgreement.checked) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
});

/* Requisito 20 */
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const limite = 500;

textarea.addEventListener('input', () => {
  counter.innerText = limite - textarea.value.length;
});

/* Requisito 21 */
const itensCheckedRadio = (array) => {
  let radioChecked = '';
  array.forEach((key) => {
    if (key.checked) {
      radioChecked = key.value;
    }
  });
  return radioChecked;
};

const itensCheckedCheckButtons = (array) => {
  let checkButtonsChecked = '';
  array.forEach((key) => {
    if (key.checked) {
      checkButtonsChecked += `${key.value}, `;
    }
  });
  return checkButtonsChecked;
};

/* Limpa o form e exibe os dados na tela */
const exibeDados = (obj) => {
  const evaluationForm = document.getElementById('evaluation-form');
  evaluationForm.innerText = '';

  Object.keys(obj).forEach((key) => {
    evaluationForm.innerText += `${key}: ${obj[key]}\n`; // Passando os dados para o form
  });
};

/* Adiciona evento ao botão de enviar */
const buttonEnviar = document.getElementById('submit-btn');
buttonEnviar.addEventListener('click', (event) => {
  event.preventDefault();

  const nome = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const arrayFamily = document.getElementsByName('family');
  const arrayContent = document.getElementsByName('content');
  const arrayAvaliacao = document.getElementsByName('rate');

  const objForm = {
    Nome: `${nome} ${lastName}`,
    Email: document.getElementById('input-email').value,
    Casa: document.getElementById('house').value,
    Família: itensCheckedRadio(arrayFamily),
    Matérias: itensCheckedCheckButtons(arrayContent),
    Avaliação: itensCheckedRadio(arrayAvaliacao),
    Observações: document.getElementById('textarea').value,
  };
  exibeDados(objForm);
});
// Finaliza requisito 21.
