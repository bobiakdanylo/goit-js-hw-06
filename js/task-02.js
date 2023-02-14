const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulAdd = document.querySelector("#ingredients");

const ingredientsToList = ingredient => {
  return ingredient.map(ingredientsCreate => {
    const ingredientsItem = document.createElement("li");
    ingredientsItem.classList.add("item");
    ingredientsItem.textContent = ingredientsCreate;
    return ingredientsItem;
  });
};

const ingredientsEl = ingredientsToList(ingredients);
ulAdd.append(...ingredientsEl);