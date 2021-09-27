(() => {
  const button = document.querySelector('.trybewarts-login-button');
  button.addEventListener('click', () => {
    const emailInput = document.querySelector('#emailId');
    const passwordInput = document.querySelector('#passwordId');
    if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
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
// monitoria Tales Coelho(Truma - 11)
const setValues = (valForm) => {
  const form = document.querySelector('#evaluation-form');
  form.innerHTML = '';
  Object.keys(valForm).forEach((key) => {
    const pElement = document.createElement('p');
    form.appendChild(pElement).classList.add('subject');
    pElement.innerText = `${valForm[key]}`;
  });
};

const createObj = (obj) => {
  const formValues = {
    name: `Nome: ${obj.get('name')} ${obj.get('lastname')}`,
    email: `Email: ${obj.get('email')}`,
    house: `Casa: ${obj.get('house')}`,
    family: `Família: ${obj.get('family')}`,
    subject: `Matérias: ${obj.getAll('subject').join(', ')}`,
    rate: `Avaliação: ${obj.get('rate')}`,
    textArea: `Observações: ${obj.get('textArea')}`,
  };
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
