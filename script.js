const selecionaBtnEntrar = document.querySelector('.btn-entrar');
const selecionaInputEmail = document.getElementById('input-email');
const selecionaInputSenha = document.getElementById('input-senha');

selecionaBtnEntrar.addEventListener('click', () => {
  if (selecionaInputEmail.value === 'tryber@teste.com' && selecionaInputSenha.value === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
});
