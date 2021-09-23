(() => {
  const button = document.querySelector('.trybewarts-login-button');
  button.addEventListener('click', () => {
    const emailInput = document.querySelector('#emailId');
    const passwordInput = document.querySelector('#passwordId');
    if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
})();
​
function clickCheckbox() {
  const checkboxElement = document.querySelector('#agreement');
  checkboxElement.addEventListener('click', (e) => {
    const buttonElement = document.querySelector('#submit-btn');
    buttonElement.disabled = !e.target.checked;
  });
}
clickCheckbox();
​
function counter() {
  const textarea = document.querySelector('#textarea');
  const counterElement = document.querySelector('#counter');
  textarea.addEventListener('keyup', () => {
    counterElement.innerHTML = `${textarea.value.length}/500`;
  });
}
counter();