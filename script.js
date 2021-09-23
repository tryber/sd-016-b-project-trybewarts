// Por alguma razão que ainda desconheço, ao salvar o VS Code está substituindo ' por ", fazendo com que o ESLint acuse erros. Caso ocorra, salvar com as teclas de atalho "CTRL" + "K" seguido de "S". Extensões ativas: Bracket Pair Colorizer 2; Code Runner; CSS Flexbox Cheatsheet; Dracula Official; ESLint; Material Icon Theme; Portuguese (Brazil) Language Pack for Visual Studio Code; Prettier: Code formatter; Tabnine - Code Faster with the All-Language AI Assistant for Code Completion, autocomplete JavaScript, Python, TypeScript, PHP, Go, Java, node.js, Ruby, C/C++, HTML/CSS, C#, Rust, SQL, Bash, Kotlin, R.

const loginButton = document.querySelector('button');

function validateEmail(event) {
  event.preventDefault();
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', validateEmail);
