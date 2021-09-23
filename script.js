const inputEmail = document.querySelector('.trybewarts-login #email-input');
const inputPassword = document.querySelector('.trybewarts-login #input-password');
const loginBtn = document.querySelector('.trybewarts-login button');

loginBtn.addEventListener('click', () => {
  const email = inputEmail.value;
  const senha = inputPassword.value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function submitForm() {
  const checkBox = document.querySelector('#agreement');
  const submitBtn = document.querySelector('#submit-btn');

  submitBtn.disabled = true;
  checkBox.addEventListener('click', () => {
    if (!checkBox.checked) {
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
    }
  });
}

submitForm();
