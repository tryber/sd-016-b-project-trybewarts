function formLogin() {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const botao = document.getElementById('button');
  function login() {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Email ou senha inválidos.');
    }
  }
  botao.addEventListener('click', login);
}

formLogin();

function activeBtn() {
  const btnCheckBox = document.querySelector('#agreement');
  const button = document.querySelector('#submit-btn');
  function activeButton() {
    if (btnCheckBox.checked === true) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', '');
    }
  }
  btnCheckBox.addEventListener('change', activeButton);
}

activeBtn();