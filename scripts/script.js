const user = {
  email: 'tryber@teste.com',
  password: '123456',
  trueAgreement: false,
};

function validateUser() {
  document.querySelector('#btn-login').addEventListener('click', () => {
    const userEmail = document.querySelector('#email').value;
    const userPassword = document.querySelector('#password').value;
    if (userEmail === user.email && userPassword === user.password) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

function validateAgreement() {
  const agreement = document.querySelector('#agreement');
  const submitBtn = document.querySelector('#submit-btn');
  agreement.addEventListener('click', () => {
    if (user.trueAgreement) {
      user.trueAgreement = false;
      submitBtn.disabled = true;
    } else {
      user.trueAgreement = true;
      submitBtn.disabled = false;
    }
  });
}

function charCount() {
  const textArea = document.querySelector('#textarea');
  const counter = document.querySelector('#counter');
  const numberChar = parseInt(counter.innerText, 10);

  textArea.addEventListener('input', () => {
    counter.innerText = numberChar - textArea.value.length;
  });
}

function findFamily() {
  const allFamilies = document.querySelectorAll('input[name="family"]');
  let selectedFamily = '';
  allFamilies.forEach((family) => {
    if (family.checked) {
      selectedFamily = family.value;
    }
  });

  return selectedFamily;
}

function findContent() {
  const allSubjects = document.querySelectorAll('.subject');
  let selectedContent = '';
  allSubjects.forEach((Content) => {
    if (Content.checked) {
      selectedContent += `${Content.value}, `;
    }
  });

  return selectedContent;
}

function findAvaliation() {
  const allAvaliation = document.querySelectorAll('input[name="rate"]');
  let selectedAvaliation = '';
  allAvaliation.forEach((avaliation) => {
    if (avaliation.checked) {
      selectedAvaliation = `${avaliation.value}`;
    }
  });

  return selectedAvaliation;
}

function createUserInfo() {
  const userName = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const userEmail = document.querySelector('#input-email').value;
  const userHome = document.querySelector('#house').value;
  const userNotes = document.querySelector('#textarea').value;

  const userData = `Nome: ${userName} ${lastName}\n
  Email: ${userEmail}\n
  Casa: ${userHome}\n
  Família: ${findFamily()}\n
  Matérias: ${findContent()}\n
  Avaliação: ${findAvaliation()}\n
  Observações: ${userNotes}`;

  document.querySelector('#evaluation-form').innerHTML = userData;
}

function listenSubmitBtn() {
  document.querySelector('#submit-btn').addEventListener('click', (event) => {
    event.preventDefault();
    createUserInfo();
  });
}

window.onload = () => {
  /**
   * Adiciona animação para o placeholder do input desaparecer sempre que for focado;
   */
  const inputELements = document.getElementsByTagName('input');
  Object.values(inputELements).forEach((element) => { // Itera os elementos como objeto e não como array;
    const pholder = element.placeholder; // Armazena o placeholder antigo do elemento;
    element.addEventListener('focus', () => { // Remove o placeholder do elemento quando focado;
      element.placeholder = '';
    });
    element.addEventListener('blur', () => { // Devolve o placeholder do elemento quando desfocado;
      element.placeholder = pholder;
    });
  });

  listenSubmitBtn();
  validateUser();
  validateAgreement();
  charCount();
};
