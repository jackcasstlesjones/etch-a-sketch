const container = document.querySelector(".container");
const button = document.getElementById("button");
let userSquares;

button.addEventListener("click", function () {
  const userNumber = prompt("How many squares would you like?");
  if (userNumber >= 100) {
    return alert("Please pick a number lower than 100");
  }
  container.innerHTML = "";
  console.log(userNumber * userNumber);
  createDivs(userNumber * userNumber);
});

const createDivs = function (divsNumber) {
  for (let i = 1; i <= divsNumber; i++) {
    console.log(divsNumber);
    let newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add("grid-divs");
    newDiv.style.height = "";

    newDiv.addEventListener("mouseover", function () {
      newDiv.classList.add("pink");
    });
  }
};

createDivs(256);
