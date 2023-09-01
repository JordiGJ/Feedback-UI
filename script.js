const states = document.querySelectorAll(".state");
const userInput = document.querySelector("#userInput");
const button = document.querySelector("button");

// functions

function handleChoice(e) {
  const userChoice = e.target.id;
  userInput.textContent = userChoice;
}

function handlClick(e) {
  e.preventDefault();
  if (userInput.textContent === "") {
    return;
  }
  document.querySelector(".choices").classList.add("hidden");
  document.querySelector(".feedback").classList.remove("hidden");
}

states.forEach((state) => state.addEventListener("click", handleChoice));
button.addEventListener("click", handlClick);
