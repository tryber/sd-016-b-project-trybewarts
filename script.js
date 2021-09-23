const inputEmail = document.querySelector('.email');
const inputSenha = document.querySelector('.senha');
const buttonEntrar = document.querySelector('.entrar');

buttonEntrar.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    const resultados = 'Olá, Tryber!';
    return alert(resultados);
  }
  return alert('Email ou senha inválidos.');
});

// const buttonEnviar = document.querySelector('#submit-btn');
// const inputCheckbox = document.querySelector('#agreement');

// if (inputCheckbox.value) {
//   buttonEnviar.disabled = false;
// } else {
//   buttonEnviar.disabled = true;
// }
