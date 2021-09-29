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
});

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

function rateRange() {
  const avaliacao = document.getElementsByName('rate');
  let rat = 0;
  avaliacao.forEach((radio) => {
    if (radio.checked) {
      rat = radio.value;
    }
  });
  return rat;
}

function getMaterias() {
  const meterias = document.getElementsByName('aprender');
  const lessions = [];
  meterias.forEach((subject) => {
    if (subject.checked) {
      const val = subject.value;
      lessions.push(val);
    }
  });
  return lessions;
}

function getData() {
  const persona = {
    name: getNome(),
    subNome: getsubNome(),
    email: getMail(),
    casa: getCasa(),
    familia: family(),
    materias: getMaterias(),
    avaliacao: rateRange(),
  };
  return persona;
}

function newFrame() {
  const person = getData();
  const newForm = query('#formAvaliation');
  newForm.innerHTML = `
  Nome: ${person.name} <br>
  Sobre Nome: ${person.subNome}<br>
  Email: ${person.email}<br>
  Casa: ${person.casa}<br>
  Familia: ${person.familia}<br>
  Materias: ${person.materias}<br>
  Avaliação: ${person.avaliacao}<br>
  `;
}

const btnEnviar = query('#submit-btn');
btnEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  newFrame();
});
