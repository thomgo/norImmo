let questionBlocs = document.getElementsByClassName("questionAnswer");

for(let bloc of questionBlocs) {
  bloc.addEventListener("click", function() {
    let answer = this.querySelector(".answer");
    let text = answer.querySelector("p");
    let arrow = this.querySelector(".fa");
    if(!answer.classList.contains("deployed")) {
      answer.style.height = `${text.offsetHeight}px`;
      arrow.classList.remove("fa-arrow-down");
      arrow.classList.add("fa-arrow-up");
    }
    else {
      answer.style.height = "0px";
      arrow.classList.remove("fa-arrow-up");
      arrow.classList.add("fa-arrow-down");
    }
    answer.classList.toggle("deployed");
  })
}
