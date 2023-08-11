const container = document.querySelector(".container");

const createDivs = function () {
  for (let i = 1; i < 17; i++) {
    let newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.textContent = "rat";
  }
};

createDivs();
