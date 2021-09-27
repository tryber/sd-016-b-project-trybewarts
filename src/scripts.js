// eslint-disable-next-line sonarjs/no-unused-collection
const dataStudy = [];

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
    btnSend.preventDefault();
  }
});

const contaCaracter = query('#textarea');
contaCaracter.addEventListener('keyup', (event) => {
  const total = event.target.maxLength - event.target.textLength;
  query('.result').innerHTML = `Caracteris restantes: ${total}`;
}, false);

// forms

function getNome() {
  const nome = query('#input-name').value; return nome;
}

function getsubNome() {
  const subNome = query('#input-lastname').value; return subNome;
}

function getMail() {
  const mail = query('#input-email').value; return mail;
}

function getCasa() {
  const casa = query('#house').value; return casa;
}

function family() {
  const familia = document.getElementsByName('family');
  let fami = '';
  familia.forEach((radio) => {
    if (radio.checked) {
      fami = radio.value;
    }
  });
  return fami;
}

function getData() {
  // eslint-disable-next-line sonarjs/prefer-object-literal
  const persona = {};
  persona.name = getNome();
  persona.subNome = getsubNome();
  persona.email = getMail();
  persona.casa = getCasa();
  persona.familia = family();
  dataStudy.push(persona);
}

const btnEnviar = query('#submit-btn');
btnEnviar.addEventListener('click', getData);
