function validateInput(validation, element, smallHelp, helpText) {
  if(validation) {
    element.classList.add("border", "border-success");
    element.classList.remove("border-danger");
    smallHelp.innerText = "";
  }
  else {
    element.classList.add("border", "border-danger");
    element.classList.remove("border-success");
    smallHelp.innerText = helpText;
  }
}

// Récupérer l'input firstName
let firstname = document.getElementById("firstname");

// Déclencher une fonction quand l'utilisateur quitte l'input
firstname.addEventListener("focusout", function() {
  // Vérifier le contenu de l'input (entre 2 et 50 caractères)
  let help = document.getElementById("firstnameHelp");
  let validation = this.value.length > 2 && this.value.length <= 50;
  validateInput(validation, this, help, "Attention le nom doit être compris entre 3 et 50 caractères");
})

// Récupérer l'input phone
let phone = document.getElementById("phone");
// Déclencher une fonction quand l'utilisateur quitte l'input
phone.addEventListener("focusout", function() {
  // Vérifier le contenu de l'input (entre 2 et 50 caractères)
  let help = document.getElementById("phoneHelp");
  let validation = this.value.match(/^0[1-9]{1}[0-9]{8}$/g)
  validateInput(validation, this, help, "Attention numéro au format 06xxxxxxxx");
})


// ~~~~~~~~ Compter le nombre de caractères restants ~~~~~~~~~~

// Nombre de caractères max autorisés
const maxLength = 200;

// Span à modifier
let span = document.getElementById("count");
span.innerText = maxLength;

// récupère et ajoute un event au textarea
let textarea = document.getElementById("message");
let areaHelp = document.getElementById("messageHelp")
textarea.addEventListener("keyup", function(){
  let remain = maxLength - this.value.length;
  if(remain >= 0) {
    span.innerText = remain;
  }
  else {
    this.value = this.value.substring(0, maxLength - 1);
  }

  if(this.value.match(/(\bcon(ne|nard|nasse)?\b)|(\bsex(e)?\b)/g)) {
    this.classList.add("border", "border-danger");
    areaHelp.innerText = "Insulte détectée";
  }
  else {
    this.classList.remove("border", "border-danger");
    areaHelp.innerText = "";
  }
});
