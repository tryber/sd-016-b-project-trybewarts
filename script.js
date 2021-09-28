const inputEmail = document.querySelector('.email');
const inputSenha = document.querySelector('.senha');
const buttonEntrar = document.querySelector('.entrar');

buttonEntrar.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    const resultados = 'Olá, Tryber!';
    return alert(resultados);
  }
  return alert('Email ou senha inválidos.');
});

// Requisito 18
const buttonEnviar = document.querySelector('#submit-btn');
const inputCheckbox = document.querySelector('#agreement');

// Monitoria com Tales e Thyago Person, lógica para colocar o evento no checkbox.
// https://www.w3schools.com/jsref/prop_checkbox_checked.asp
inputCheckbox.addEventListener('click', () => {
  if (inputCheckbox.checked) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
});

// Requisito 20
const coment = document.querySelector('#textarea');
const cont = document.querySelector('#counter');

coment.addEventListener('keyup', () => {
  const char = coment.value.length;
  cont.innerHTML = `${char}/${500 - char}`;
});

// Requisito 21
const btnEnviar = document.getElementById('submit-btn');
const values = [];
function inputChecked() {
  const materias = document.querySelectorAll('input[name="aprender"]:checked');
  // https://pt.stackoverflow.com/questions/83463/pegar-valores-checkbox-com-javascript
  for (let i = 0; i < materias.length; i += 1) {
    values.push(` ${materias[i].value}`);
  }
  return values;
}

const novoForms = document.querySelector('#evaluation-form');
const novoCampo = document.createElement('p');

btnEnviar.addEventListener('click', () => {
  const inputObjeto = {
    studentName: document.getElementById('input-name').value,
    lastName: document.getElementById('input-lastname').value,
    adress: document.getElementById('input-email').value,
    house: document.getElementById('house').value,
    familySelected: document.querySelector('input[name="family"]:checked').value,
    programing: inputChecked(),
    rating: document.querySelector('input[name="rate"]:checked').value,
    obs: document.getElementById('textarea').value };
  novoForms.innerHTML = ' ';
  novoCampo.innerText = `Nome: ${inputObjeto.studentName} ${inputObjeto.lastName}
  Email: ${inputObjeto.adress}
  Casa: ${inputObjeto.house}
  Família: ${inputObjeto.familySelected}
  Matérias: ${inputObjeto.programing}
  Avaliação: ${inputObjeto.rating}
  Observações: ${inputObjeto.obs}`;
  novoForms.appendChild(novoCampo);
});
