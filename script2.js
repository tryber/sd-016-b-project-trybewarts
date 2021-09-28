let submitBtn = document.getElementById('submit-btn')
var checkbox = document.getElementById('agreement')

function enable(){
  // checkbox.checked == true {
    submitBtn.removeAttribute("disabled");
    console.log("teste")
};
checkbox.addEventListener('click', enable);
