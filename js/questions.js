// get all the articles with the class questionAnswer
let questionBlocs = document.getElementsByClassName("questionAnswer");

// function to fold or unfold the answer
function toggleAnswer(questionBloc) {
  // Inside the questionBloc (the article), retrieve the needed elements
  let answer = questionBloc.querySelector(".answer");
  let text = answer.querySelector("p");
  // the icon on the left of the question
  let arrow = questionBloc.querySelector(".fa");
  // Set the height of answer bloc to the height of the text if class deployed is missing
  if(!answer.classList.contains("deployed")) {
    answer.style.height = `${text.offsetHeight}px`;
  }
  // Set the height of answer to 0 (fold the bloc)
  else {
    answer.style.height = "0px";
  }
  // Add or delete the necessary classes
  arrow.classList.toggle("fa-arrow-up");
  arrow.classList.toggle("fa-arrow-down");
  answer.classList.toggle("deployed");
}

// Add the toggleAnswer function on each question bloc
for(let bloc of questionBlocs) {
  bloc.addEventListener("click", function() {
    toggleAnswer(this);
  })
}
