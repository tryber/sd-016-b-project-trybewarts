const botaoEviar = document.getElementById('enviar');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

function validacaoEmaileSenha(){
    
    if (email.value ===  "tryber@teste.com" || senha === "123456"){
        window.alert('Olá, Tryber!')
    }else {
        window.alert('Email ou senha inválidos.')
    }
}

botaoEviar.addEventListener('click', validacaoEmaileSenha)