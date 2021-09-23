function setupLogin() {
  const formLogin = document.querySelector('.trybewarts-login');

  formLogin.onsubmit = (event) => {
    event.preventDefault();

    const email = document.querySelector('#login-email');
    const password = document.querySelector('#login-password');

    if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
      alert('Olá, Tryber!');
    }

    alert('Email ou senha inválidos.');
  };
}

function setupRates(quantidade) {
  const parent = document.querySelector('.rate-buttons');

  for (let i = 1; i <= quantidade; i += 1) {
    const divContainer = document.createElement('div');
    divContainer.classList.add('radiobutton');
    const id = `rate-${i}`;
    const label = document.createElement('label');
    label.innerText = i;
    label.setAttribute('for', id);
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'rate');
    input.setAttribute('id', id);
    input.setAttribute('value', i);
    divContainer.appendChild(input);
    divContainer.appendChild(label);
    parent.appendChild(divContainer);
  }
}

function setupAgreements() {
  const agreement = document.querySelector('#agreement');
  agreement.onclick = () => {
    const confirm = document.querySelector('#submit-btn');
    if (agreement.checked) {
      confirm.removeAttribute('disabled');
    } else {
      confirm.setAttribute('disabled', '');
    }
  };
}

function setupTextArea() {
  const textarea = document.querySelector('#textarea');

  textarea.oninput = () => {
    const limit = textarea.getAttribute('maxlength');
    if (limit) {
      const counter = document.querySelector('#counter');
      counter.innerText = limit - textarea.value.length;
    }
  };

  textarea.oninput();
}

function getSelectedCheckboxes(query) {
  const selectedContent = [];

  const checkboxes = document.querySelectorAll(query);

  for (let index = 0; index < checkboxes.length; index += 1) {
    const checkbox = checkboxes[index];
    if (checkbox.checked) {
      selectedContent.push(checkbox.value);
    }
  }

  return selectedContent;
}

function setupFormSubmit() {
  const form = document.querySelector('#evaluation-form');

  form.onsubmit = (event) => {
    event.preventDefault();
    const name = document.querySelector('#input-name').value;
    const lastname = document.querySelector('#input-lastname').value;
    const email = document.querySelector('#input-email').value;
    const house = document.querySelector('#house').value;
    const family = document.querySelector('input[type="radio"][name="family"]:checked').value;
    const checkboxes = getSelectedCheckboxes('input[type="checkbox"][name="content"]');
    const rate = document.querySelector('input[type="radio"][name="rate"]:checked').value;
    const observacoes = document.querySelector('#textarea').value;
    form.innerHTML = `Nome: ${name} ${lastname} Email: ${email} Casa: ${house} Família: ${family}`;
    form.innerHTML += `Matérias: ${checkboxes.join(', ')} Avaliação: ${rate}`;
    form.innerHTML += `Observações: ${observacoes}`;
  };
}

window.onload = () => {
  setupLogin();
  setupRates(10);
  setupAgreements();
  setupTextArea();
  setupFormSubmit();
};
