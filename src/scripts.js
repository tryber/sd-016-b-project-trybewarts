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

function getObservacoes() {
  const text = query('#textarea').value; return text;
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
  return lessions.join(', ');
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
    observacoes: getObservacoes(),
  };
  return persona;
}

function newFrame() {
  const person = getData();
  const newForm = query('#evaluation-form');
  newForm.innerHTML = `<div class="data">
  <table class=" table"> <tbody>
  <tr class="row"><th> Nome: </th><td> ${person.name} ${person.subNome}</td></tr>
  <tr class="row"><th> Email: </th><td> ${person.email} </td></tr>
  <tr class="row"><th> Casa: </th><td> ${person.casa} </td></tr>
  <tr class="row"><th> Família: </th><td> ${person.familia} </td></tr>
  <tr class="row"><th> Matérias: </th><td> ${person.materias} </td></tr>
  <tr class="row"><th> Avaliação: </th><td> ${person.avaliacao} </td></tr>
  <tr class="row"><th> Observações: </th><td> ${person.observacoes} </td></tr>
  </tbody></table> </div>
  `;
}

const btnEnviar = query('#submit-btn');
btnEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  newFrame();
});
