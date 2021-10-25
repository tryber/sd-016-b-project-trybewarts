function validateAccount() {
const email = document.querySelector('#emailInput');    
const password = document.querySelector('#passwordInput');
if(email.value === '' || password.value === '') {
    alert('Email ou senha inválidos.');
} else {
    alert('Olá, Tryber!');
}

}

function selectHouse (){
let selectOptions = [
    {'text':'Gitnória', 'value':'Gitnória', 'id':'gitnoria-house', 'innerHTML': 'Gitnória'},
    {'text':'Reactpuff', 'value':'Reactpuff', 'id':'reactpuff-house', 'innerHTML': 'Reactpuff'},
    {'text':'Corvinode', 'value':'Corvinode', 'id':'corvinode-house', 'innerHTML': 'Corvinode'},
    {'text':'Pytherina', 'value':'Pytherina', 'id':'pytherina-house', 'innerHTML': 'Pytherina'},
]

let select = document.querySelector('#house');
for(let i = 0; i < selectOptions.length; i+=1) {
    let option = document.createElement('option');
    option.text = selectOptions[i]['text'];
    option.value = selectOptions[i]['value'];
    option.id = selectOptions[i]['id'];
    option.innerHTML = selectOptions[i]['innerHTML'];
    if(i === 0) {
        option.selected = 'true';
    }
    select.appendChild(option);
}

}

function selectRate() {
    let arrayRate = [1,2,3,4,5,6,7,8,9,10];

    let rateRadio = document.querySelector('#rate-radio');

    for(let i = 0; i < arrayRate.length; i+=1) {
        let divRate =document.createElement('div');
        let inputRate = document.createElement('input');
        inputRate.type = 'radio';
        inputRate.name = 'rate';
        inputRate.id = arrayRate[i];
        inputRate.value = arrayRate[i];

        let label = document.createElement('label');
        label.htmlFor = arrayRate[i];
        label.innerHTML = arrayRate[i];

        if(i === 0){
            inputRate.checked = true;
        }
        rateRadio.appendChild(divRate);
        divRate.appendChild(inputRate);
        divRate.appendChild(label);
    }

}

window.onload = function () {

let button = document.querySelector('#buttonSubmit');
button.addEventListener('click', form);

function form(event) {
event.preventDefault();
validateAccount();
}

selectHouse();

selectRate();
}