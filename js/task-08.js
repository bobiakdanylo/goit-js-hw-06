const selectForm = document.querySelector(".login-form");
selectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: {
            email,
            password,
        }
    } = event.currentTarget;
    if(email.value === "" || password.value === ""){
        alert("Всі поля повинні бути заповнені!");
    }else{
        console.log({ "email": email.value, "password": password.value });
        selectForm.reset();
    }
});

