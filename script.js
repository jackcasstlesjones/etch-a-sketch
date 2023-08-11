const container = document.querySelector(".container");
const askUserNumber = function () {
  return prompt("How many squares would you like?");
};
const userNumber = askUserNumber();
const createDivs = function () {
  for (let i = 1; i < userNumber; i++) {
    let newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add("grid-divs");
    newDiv.style.height = "";

    newDiv.addEventListener("mouseover", function () {
      newDiv.classList.add("pink");
    });
  }
};

createDivs();
