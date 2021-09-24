(() => {
  const button = document.querySelector('.trybewarts-login-button');
  button.addEventListener('click', () => {
    const emailInput = document.querySelector('#emailId');
    const passwordInput = document.querySelector('#passwordId');
    if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
      alert('Olá, Tryber!');
    } else { alert('Email ou senha inválidos.'); }
  });
})();

function clickCheckbox() {
  const checkboxElement = document.querySelector('#agreement');
  checkboxElement.addEventListener('click', (e) => {
    const buttonElement = document.querySelector('#submit-btn');
    buttonElement.disabled = !e.target.checked;
  });
}
clickCheckbox();

function counter() {
  const textarea = document.querySelector('#textarea');
  const counterElement = document.querySelector('#counter');
  textarea.addEventListener('keyup', () => {
    counterElement.innerHTML = 500 - `${textarea.value.length}`;
  });
}
counter();

const setValues = (valForm) => {
  const form = document.querySelector('#evaluation-form');
  form.innerHTML = '';
  const sectionElement = document.querySelector('#formMain');
  Object.keys(valForm).forEach((key) => {
    const pElement = document.createElement('p');
    pElement.innerText = `${key} ${value}`;
    sectionElement.appendChild(pElement);
  });
};
const createObj = (obj) => {
  const formValues = {
    Nome: 'Nome:',
  };
  obj.forEach((value, key) => {
    if (key === 'Matérias' && formValues.Matérias) {
      formValues.Matérias += ` / ${value}`;
    } else if (key === 'Nome' || key === 'lastname') {
      formValues.Nome += ` ${value}`;
    } else {
      formValues[key] = `${key}: ${value}`;
    }
  });
  setValues(formValues);
};
// monitoria Tales Coelho(Truma - 11)
const getFormValues = () => {
  const form = document.getElementById('evaluation-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    createObj(formData);
  });
};
getFormValues();
