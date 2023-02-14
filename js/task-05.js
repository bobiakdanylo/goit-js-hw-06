const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const changeSpan = (event) => {
    event.currentTarget.value.trim() === "" ?
    nameOutput.textContent = "Anonymous" : nameOutput.textContent = event.currentTarget.value.trim();
};

nameInput.addEventListener("input", changeSpan);