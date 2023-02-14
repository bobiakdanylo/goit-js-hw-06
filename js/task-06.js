const inputId = document.querySelector("#validation-input");

inputId.addEventListener("blur", (event) => {
    if(event.currentTarget.value.length == inputId.dataset.length){
        inputId.classList.add("valid");
        inputId.classList.remove("invalid");
    }else{
        inputId.classList.add("invalid");
        inputId.classList.remove("valid");
    }
});