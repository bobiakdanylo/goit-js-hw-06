const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueId = document.querySelector("#value");

const counterValue = {
    value: 0,
    decrement(){
        this.value -= 1;
    },
    increment(){
        this.value += 1;
    },
};

decrementBtn.addEventListener("click", () => {
    counterValue.decrement();
    valueId.textContent = counterValue.value;
})

incrementBtn.addEventListener("click", () => {
    counterValue.increment();
    valueId.textContent = counterValue.value;
})