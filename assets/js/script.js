const selectors = document.querySelectorAll(".selector");
selectors.forEach((selector) => {
  for (let i = 0; i <= 9; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selector.appendChild(option);
  }
});
