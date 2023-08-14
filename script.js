const container = document.querySelector(".container");
const button = document.getElementById("button");

button.addEventListener("click", function () {
  const userNumber = prompt("How many squares would you like?");
  if (userNumber >= 100) {
    return alert("Please pick a number lower than 100");
  }
  container.innerHTML = "";
  createDivs(userNumber);
});

const createDivs = function (divsNumber) {
  for (let i = 1; i <= divsNumber; i++) {
    const divColumn = document.createElement("div");
    container.appendChild(divColumn);
    divColumn.classList.add("div-columns");

    for (let i = 1; i <= divsNumber; i++) {
      const newDiv = document.createElement("div");
      divColumn.appendChild(newDiv);
      newDiv.classList.add("grid-divs");
      newDiv.addEventListener("mouseover", function () {
        newDiv.classList.add("filled");
      });
    }
  }
};

createDivs(16);
