function entrar() {
  const email = document.querySelector('#login-email').value;
  const senha = document.querySelector('#login-senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') alert('Olá, Tryber!');
  else alert('Email ou senha inválidos.');
}

function habilitaEnviar() {
  document.querySelector('#submit-btn').disabled = !document.querySelector('#agreement').checked;
}

function contador() {
  document.querySelector(
    '#counter',
  ).innerText = 500 - document.querySelector('#textarea').textLength;
}

function pegafamilia() {
  if (document.querySelector('#Frontend').checked) return 'Frontend';
  if (document.querySelector('#Backend').checked) return 'Backend';
  if (document.querySelector('#FullStack').checked) return 'FullStack';
}

function t(n) {
  return (document.querySelector(`#${n.toLocaleLowerCase()}`).checked) ? ` ${n},` : '';
}

function pegamateria() {
  // let a = ''; // lint transformou uma função bonita em um caco :(
  // if (document.querySelector('#hofs').checked) a = `${a} Hofs,`;
  // if (document.querySelector('#jest').checked) a = `${a} Jest,`;
  // if (document.querySelector('#promisses').checked) a = `${a} Promisses,`;
  // if (document.querySelector('#react').checked) a = `${a} React,`;
  // if (document.querySelector('#sql').checked) a = `${a} SQL,`;
  // if (document.querySelector('#python').checked) a = `${a} Python,`;
  const a = `${t('Hofs')}${t('Jest')}${t('Promisses')}${t('React')}${t('SQL')}${t('Python')}`;
  return a.slice(0, a.length - 1);
}

function pegaavaliacao() {
  // if (document.querySelector('#avalia-1').checked) return 1;  // lint maudito
  // if (document.querySelector('#avalia-2').checked) return 2;
  // if (document.querySelector('#avalia-3').checked) return 3;
  // if (document.querySelector('#avalia-4').checked) return 4;
  // if (document.querySelector('#avalia-5').checked) return 5;
  // if (document.querySelector('#avalia-6').checked) return 6;
  // if (document.querySelector('#avalia-7').checked) return 7;
  // if (document.querySelector('#avalia-8').checked) return 8;
  // if (document.querySelector('#avalia-9').checked) return 9;
  // if (document.querySelector('#avalia-10').checked) return 10;

  for (let i = 1; i < 11; i += 1) {
    if (document.querySelector(`#avalia-${i}`).checked) return i;
  }
}

function enviar(e) {
  e.preventDefault();
  const nome = document.querySelector('#input-name').value;
  const snome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const fami = pegafamilia();
  const mate = pegamateria();
  const aval = pegaavaliacao();
  const obse = document.querySelector('#textarea').value;
  document.querySelector('#evaluation-form').innerHTML = `
    <p>Nome: ${nome} ${snome}</p>
    <p>Email: ${email}</p>
    <p>Casa: ${casa}</p>
    <p>Família: ${fami}</p>
    <p>Matérias: ${mate}</p>
    <p>Avaliação: ${aval}</p>
    <p>Observações: ${obse}</p>
    `;
}

function configurar() {
  document.querySelector('#botao-entrar').addEventListener('click', entrar);
  document.querySelector('#submit-btn').addEventListener('click', enviar);
  document.querySelector('#agreement').addEventListener('click', habilitaEnviar);
  document.querySelector('#textarea').addEventListener('keyup', contador);
  habilitaEnviar();
  contador();
}

window.onload = configurar;

// Deixar a linha no final pra resolver o lint
