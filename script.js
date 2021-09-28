const loginButton = document.getElementById('buttonLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');

loginButton.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function habilitaBtn() {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
agreement.addEventListener('change', habilitaBtn);

const textArea = document.getElementById('area');
const charCounter = document.getElementById('counter');
const maxChars = 500;

textArea.addEventListener('input', () => {
  const remainingChars = maxChars - textArea.value.length;
  charCounter.textContent = `${remainingChars} caracteres disponíveis`;
});

const form = document.getElementById('evaluation-form');
const newForm = document.getElementById('new-form');

const clearForm = () => {
  form.innerHTML = '';
};
// como criaremos diversas linhas, fica mais facil criar uma função que já crie a linha e coloque o texto nela, em seguida criamos uma função para cada tipo de linha que criaremos e logo então anexa-la ao botão;
const newFormLine = (lineLabel, lineValue) => {
  const newLine = document.createElement('section');
  newLine.innerHTML = `${lineLabel} ${lineValue}`;
  newForm.appendChild(newLine);
};

const fulllNameEntry = () => {
  const nameEntry = document.getElementById('input-name');
  const lastNameEntry = document.getElementById('input-lastname');
  const fullName = `${nameEntry.value} ${lastNameEntry.value}`;
  newFormLine('Nome:', fullName);
};

const emailEntry = () => {
  const emailInput = document.getElementById('input-email');
  newFormLine('Email:', emailInput.value);
};

const houseEntry = () => {
  const house = document.getElementById('house');
  newFormLine('Casa:', house.value);
};

const familyEntry = () => {
  //  entries foi descoberto no stackoverflow, graças ao usuário PhilT no link : https://stackoverflow.com/questions/8563240/how-to-get-all-checked-checkboxes/31113246;
  const family = document.querySelector('input[name = "family"]:checked');
  newFormLine('Família:', family.value);
};

const contentEntry = () => {
  const entries = document.querySelectorAll('input[name=content]:checked');
  const entriesArray = [];
  for (let i = 0; i < entries.length; i += 1) {
    entriesArray.push(entries[i].value);
  }
  const contentEntries = entriesArray.join(', ');
  newFormLine('Matérias:', contentEntries);
};

const rateEntry = () => {
  const rate = document.querySelector('input[name="rate"]:checked');
  newFormLine('Avaliação:', rate.value);
};

const commentEntry = () => {
  newFormLine('Observações:', textArea.value);
};

const replaceForm = () => {
  fulllNameEntry();
  emailEntry();
  houseEntry();
  familyEntry();
  contentEntry();
  rateEntry();
  commentEntry();
  clearForm();
};

submitBtn.addEventListener('click', (evento) => {
  evento.preventDefault();
  replaceForm();
  form.appendChild(newForm);
});
