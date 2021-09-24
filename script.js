const inputEmail = document.querySelector('.email');
const inputPassword = document.querySelector('.password');
const enterButton = document.querySelector('.enter');

function alerts() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
enterButton.addEventListener('click', alerts);


let check = document.getElementById('agreement')
  check.addEventListener('click', function() {
    if(!check.checked){
      document.getElementById("submit-btn").setAttribute("disabled")
    }else {
      document.getElementById("submit-btn").removeAttribute("disabled")
    }
    })

function counterText (){
  let textArea = document.getElementById('campoTexto')
  let textCount = document.getElementById('campoTexto').maxLength
  let label = document.getElementById('counter')
  label. innerHTML = 'Caracteres Disponiveis: ' + textCount

  textArea.addEventListener('keypress', function(){
    label. innerHTML = 'Caracteres Disponiveis: ' + (textCount - textArea.value.length)
  })


}   

counterText()



