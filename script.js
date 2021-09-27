const loginButton = document.querySelector('button');
const login = document.querySelectorAll('input')[0];
const password = document.querySelectorAll('input')[1];
loginButton.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const submitBtn = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
submitBtn.disabled = true;
checkbox.addEventListener('click', () => {
  if (checkbox.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

const textarea = document.querySelector('#textarea');
const paragraph = document.querySelector('#counter');
textarea.addEventListener('input', () => {
  const maxValue = 500;
  const caracteres = maxValue - textarea.value.length;
  paragraph.innerHTML = `${caracteres} caracteres restantes.`;
});

// const main = document.querySelector('main');
// const relatorio = document.createElement('div');
// function criaDivs() {
//   const name = document.getElementById('input-name').value
//   const mail = document.getElementsByName('email')
//   const house = document.getElementsByName('house')
//   const family = document.getElementsByName('family')
//   const content = document.getElementsByName('content')
//   const rate = document.getElementsByName('rate')
//   const obs = document.getElementsByName('obs')
//   const respostas = {
//     Nome: name,
//     Email: mail,
//     Casa: house,
//     Família: family,
//     Matérias: content,
//     Avaliação: rate,
//     Observações: obs,
//   }
//   // const perguntas = ['Nome:', 'Email:', 'Casa:', 'Família:', 'Matérias:', 'Avaliação:', 'Observações:']
//   // const respostas = [name, mail, house, family, content, rate, obs]
//   submitBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     main.appendChild(relatorio)
//     const perguntas = Object.keys(respostas)
//     for (let index = 0; index < 7; index += 1) {
//       const divFilha = document.createElement('div');
//       relatorio.appendChild(divFilha);
//       divFilha.innerText = `${perguntas[index]}: ${respostas[perguntas[index]]}`;
//       console.log(respostas[perguntas[index]]);
//     }
//   });
// }
// criaDivs()
