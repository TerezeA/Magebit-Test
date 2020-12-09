const email = document.getElementById("mail");
var terms = document.getElementById("terms_service");
var submitButton = document.getElementById("submit");
const submitForm = document.getElementById("email_input");

email.addEventListener("input", function (event) {
  if (email.valueMissing) {
    email.setCustomValidity("Email address is required");
    email.reportValidity();
    submitButton.disabled;
  }
  else if (email.validity.typeMismatch) {
    email.setCustomValidity("Please provide a valid e-mail address");
    email.reportValidity();
    submitButton.disabled;
  }
  else if (email.value.endsWith('.co')){
    email.setCustomValidity("We are not accepting subscriptions from Colombia emails");
    email.reportValidity();
    submitButton.disabled;
  }
  if (!terms.checked){
    email.setCustomValidity("You must accept the terms and conditions");
    email.reportValidity();
    submitButton.disabled;
  }
    else {
    email.setCustomValidity("");
    submitButton.disabled = false;
  }
});

submitForm.addEventListener("submit", function(event) {
    event.preventDefault;
    alert("Test");
  });
