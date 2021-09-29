/* REQUISITO_3 */
const buttonEntrar = document.getElementById('botaoEntrar');
const inputLogin = document.getElementById('email');
const inputPassword = document.getElementById('password');

function login(event) {
  event.preventDefault();
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonEntrar.addEventListener('click', login);

const submitBtn = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

function enable() {
  submitBtn.removeAttribute('disabled');
  console.log('teste');
}
checkbox.addEventListener('click', enable);

// BONUS
// function submitData() {
//   const inputName = document.getElementById('input-name').value;
//   const inputLastName = document.getElementById('input-lastname').value;
//   const inputEmail = document.getElementById('input-email').value;
//   const inputHouse = document.getElementById('house').value;
//   const inputFamily = document.getElementById('input[name ="family"]:checked').value;
//   const inputRate = document.querySelectorAll('input[name ="rate"]:checked').value;
//   const textArea = document.getElementById('textarea').value;
  
//   const formFull =`
//   <p>Nome: ${inputName} ${inputLastName}</p>
//   <p>Email: ${inputEmail}</p>
//   <p>Casa: ${inputHouse}</p>
//   <p>Família: ${inputFamily}</p>
//   <p>Avaliação: ${inputRate}</p>
//   <p>Observações: ${textArea}</p>
//   `
//   document.getElementById('evaluation-form').innerHTML = formFull
// }

// submitBtn.addEventListener('click', submitData);
