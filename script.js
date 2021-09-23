function login() {
  const emailLogin = document.getElementById('email-login');
  const pass = document.getElementById('pass');
  if (emailLogin.value === 'tryber@teste.com' && pass.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

document.getElementById('btn-login').addEventListener('click', login);
// nao estou entendendo oque tem de errado na logica abaixo... requisito 18
const btnSubmit = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');
btnSubmit.disabled = true;

 function CheckAgreement() {
  if (agree.value == 'on') { // se o valor do agree for on o botao estara h habilitado
    btnSubmit.disabled = false;
  }
}
agree.addEventListener('change', CheckAgreement);

// tentei de outras formas como:
/*
function CheckAgreement() {
  if (btnSubmit.disabled === false) {
    btnSubmit.disabled = true;
  } else if (btnSubmit.disabled === true) {
    btnSubmit.disabled = false;
  }
}
agree.addEventListener('Click', CheckAgreement);
*/
/*
btnSubmit.disabled = true;  botao começa desabilitado
function CheckAgreement() {
  if (agree.value === false) {   se o valor do agree for falso o botao estara desabilitado
    btnSubmit.disabled = true;
  } else if (agree.value === true) {   se o valor do agree for verdadeiro o botao estara habilitado
    btnSubmit.disabled = false;
  }
}
agree.addEventListener('Click', CheckAgreement)  quando input agree for clicado a funçao sera chamada...
 */
// outra forma de pensar:
/*
function CheckAgreement() {
  if (agree.value === false) {   se o valor do agree for falso o botao estara desabilitado
    btnSubmit.disabled = true;
  } else if (agree.value === true) {   se o valor do agree for verdadeiro o botao estara habilitado
    btnSubmit.disabled = false;
  }
}
btnSubmit.addEventListener('Click', CheckAgreement);  quando o enviar for clicado a função sera chamada...
 */
// mais uma opção:  descobrir os erros do raciocinio...
/*
function CheckAgreement() {
  if (agree.value === false) {   se o valor do agree for falso o botao estara desabilitado
    btnSubmit.disabled = true;
  }
btnSubmit.disabled = false;
}
agree.addEventListener('Click', CheckAgreement)
fontes: https://cursos.alura.com.br/forum/topico-habitar-desabilitar-botao-65202
https://stackoverflow.com/questions/46917270/javascript-disable-button-until-all-fields-are-filled */
