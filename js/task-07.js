const inputText = document.querySelector("#text");
const controlTextSize = document.querySelector("#font-size-control");
inputText.style.fontSize ="56px";
controlTextSize.oninput = function() {
    inputText.style.fontSize = controlTextSize.value + "px";
};