const navEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${navEl.length}`);

const navElCat = navEl.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`)
    console.log(`Elements: ${category.querySelectorAll("li").length}`)
});
