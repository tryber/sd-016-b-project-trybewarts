const btnLogin = document.getElementById('btn-login');
const agreementInput = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const nameInput = document.getElementById('input-name');
const lastNameInput = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const houseInput = document.getElementById('house');
const form = document.getElementById('evaluation-form');

// REVIEW - Cria o evento no botão de login, testa se os login e senha testados estão corretos.

btnLogin.addEventListener('click', () => {
  const email = document.getElementById('input-login').value;
  const password = document.getElementById('input-password').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// REVIEW - Cria o evento no botão de submit, o mesmo só é ativado caso o checkbox de confirmação esteja marcado.

agreementInput.addEventListener('click', () => {
  if (agreementInput.checked === true) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', true);
  }
});

// REVIEW - Cria evento dentro do textarea para incrementar e decrementar o contador de caracteres.

textArea.addEventListener('input', () => {
  const total = textArea.maxLength;
  const caracteres = textArea.value.length;
  counter.innerText = total - caracteres;
});

// REVIEW - Busca todos os checkboxes marcados como checked e retorna para dentro do array value que posteriormente será utilizado para impressão. Após isso, insere um espaço requerido após a vírgula dos índices maiores que 0.
/* Utilizamos este site de inspiração: https://pt.stackoverflow.com/questions/83463/pegar-valores-checkbox-com-javascript para a função abaixo */

function getLearningValue() {
  const learning = document.querySelectorAll('[name=learning]:checked');
  const value = [];
  for (let index = 0; index < learning.length; index += 1) {
    if (index === 0) {
      value.push(learning[index].value);
    } else {
      value.push(` ${learning[index].value}`);
    }
  }
  return value;
}

// REVIEW - Preparando-se para salvar o que foi digitado pelo usuário no localStorage, cria um array 'elementos' com todos os atributos que serão inseridos na tela pós click do botão submit. Após isso, insere por meio de um for os dados após os atributos do array criado anteriormente. Logo após os atributos, por meio de Template Literals, é inserido a pontuação divisória (:) no parágrafo.

function createElements() {
  const elementos = ['Nome', 'Email', 'Casa', 'Família', 'Matérias', 'Avaliação', 'Observações'];
  for (let index = 0; index < elementos.length; index += 1) {
    const paragraph = document.createElement('p');
    paragraph.innerText = `${elementos[index]}: ${localStorage.getItem(elementos[index])}`;
    form.appendChild(paragraph);
  }
}

// REVIEW - No windows.onload é criado o evento no botão submit, onde ao ser clicado busca os dados salvos no localStorage para impressão na tela. Apaga toda a estrutura da página e imprime na tela apenas as chaves e o que foi digitado pelo usuário. Após impressão apaga os dados salvos em localStorage.

window.onload = () => {
  btnSubmit.addEventListener('click', () => {
    localStorage.setItem('Nome', `${nameInput.value}  ${lastNameInput.value}`);
    localStorage.setItem('Email', emailInput.value);
    localStorage.setItem('Casa', houseInput.value);
    localStorage.setItem('Família', document.querySelector('[name=family]:checked').value);
    localStorage.setItem('Matérias', getLearningValue());
    localStorage.setItem('Avaliação', document.querySelector('[name=rate]:checked').value);
    localStorage.setItem('Observações', textArea.value);
    form.innerHTML = '';
    createElements();
    localStorage.clear();
  });
};
