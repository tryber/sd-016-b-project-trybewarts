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
  btnSend.removeAttribute('disabled');
});

// const txtArea = query('#counter');
// txtArea.addEventListener('keypress', (event) => {
//   const maxChars = 500;
//   const contador = txtArea.value.length;
//   if (contador >= maxChars) {
//     event.preventDefault();
//   }
// });
