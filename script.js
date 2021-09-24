const checkAgreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

function agreementCheck() {
  if (checkAgreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

agreementCheck();

checkAgreement.addEventListener('click', agreementCheck);
