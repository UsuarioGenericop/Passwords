// Create a div container for the selectors
const selectorContainer = document.createElement("div");
selectorContainer.className = "selector-container";
document.body.appendChild(selectorContainer);

// Create three selectors
const selectors = [];
for (let i = 0; i < 3; i++) {
  const selector = document.createElement("select");
  selector.className = "selector";
  selector.id = `selector-${i + 1}`;

  // Add options 0-9 to each selector
  for (let j = 0; j <= 9; j++) {
    const option = document.createElement("option");
    option.value = j;
    option.textContent = j;
    selector.appendChild(option);
  }

  // Add event listener to detect selection changes
  selector.addEventListener("change", function () {
    const value = this.value;
    const selectorNumber = this.id;
    console.log(`${selectorNumber}: ${value}`);
  });

  selectors.push(selector);
  selectorContainer.appendChild(selector);
}

// Original code
const selectors2 = document.querySelectorAll(".selector1");
selectors2.forEach((selector) => {
  for (let i = 0; i <= 9; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selector.appendChild(option);
  }

  // Add event listener to detect selection changes
  selector.addEventListener("change", function () {
    const value = this.value;
    console.log(value);
  });
});
const numero1 = document.querySelector("#selector1");
const numero2 = document.querySelector("#selector2");
const numero3 = document.querySelector("#selector3");
console.log(numero1.value);
console.log(numero2.value);
console.log(numero3.value);
const verificar1 = document.querySelector("#verificar1");
const resultado1 = document.querySelector("#resultado1");
verificar1.addEventListener("click", function concatenar() {
  var resultado = numero1.value + numero2.value + numero3.value;
  console.log(resultado);
  if (resultado == 911) {
    resultado1.innerHTML = "Password 1 correcta";
  } else if (resultado == 714) {
    resultado1.innerHTML = "Password 2 correcta";
  } else {
    resultado1.innerHTML = "Password incorrecta";
  }
});
