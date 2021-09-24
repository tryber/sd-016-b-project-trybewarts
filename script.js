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

const buttonEnviar = document.querySelector('#submit-btn');
const inputCheckbox = document.querySelector('#agreement');

// Monitoria com Tales e Thyago Person, lógica para colocar o evento no checkbox.
// https://www.w3schools.com/jsref/prop_checkbox_checked.asp
inputCheckbox.addEventListener('click', () => {
  if (inputCheckbox.checked) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
});
