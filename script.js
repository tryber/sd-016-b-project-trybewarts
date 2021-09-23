/// Verificar se o login está correto
const loginButton = document.getElementById('login-button');

function verifyLogin() {
  const password = document.getElementById('password').value;
  console.log(password);
  const email = document.getElementById('email').value;
  console.log(email);
  if (password === '123456' && email === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', verifyLogin);

// Contador de carácteres

const contador = document.getElementById('counter');

contador.innerHTML = 500;

const textArea = document.getElementById('textarea');

function changeContador() {
  console.log(textArea.value.length);
  contador.innerText = 500 - textArea.value.length;
}

textArea.addEventListener('keyup', changeContador);
