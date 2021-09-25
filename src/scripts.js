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

const contaCaracter = query('#textarea');
contaCaracter.addEventListener('keyup', (event) => {
  const total = event.target.maxLength - event.target.textLength;
  query('.result').innerHTML = `Caracteris restantes: ${total}`;
}, false);

// forms
const name = query('#input-name');
const sobName = query('#input-lastname');
const mail = query('#input-email');
const casa = query('#house').value;
const familia = document.getElementsByName('family').forEach((radio) => {
  if (radio.checked) {
    console.log(radio.value);
  }
});
