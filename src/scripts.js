function query(params) {
  const term = params;
  return document.querySelector(term);
}
query();

const btnEntrar = query('#btnEntrar');
btnEntrar.addEventListener('click', () => {
  const email = query('.emailVal').value;
  const senha = parseInt(query('.pswVal').value, 10);
  const psw = 123456;
  const mail = 'tryber@teste.com';
  if (psw === senha && mail === email) {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
});

const contractCheck = query('.contractCheck');
contractCheck.addEventListener('click', () => {
  const btnSend = query('#submit-btn');
  const check = query('.contractCheck');
  if (check.checked) {
    btnSend.disabled = false;
  } else {
    btnSend.disabled = true;
  }
});


// Requisito 20 - add contador com caracteres disponiveis
const textArea = document.querySelector('#textarea')
const remaininhCaracteres = document.querySelector('#counter')
const MAX_CARACTERES = 500

textArea.addEventListener('input', () => {
  const remaining = (MAX_CARACTERES - textArea.value.length)

  remaininhCaracteres.textContent = `${remaining} caracteres disponiveis `
})

const contaCaracter = query('#textarea');
contaCaracter.addEventListener('keyup', (event) => {
  const total = event.target.maxLength - event.target.textLength;
  query('.result').innerHTML = `Caracteris restantes: ${total}`;
}, false);
