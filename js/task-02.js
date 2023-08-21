const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function renderMarkup(ingredients) {
    const ul = document.querySelector("#ingredients");

    const liElElements = [];
  
     ingredients.map( ingredient => {
       const liEl = document.createElement("li");
       liEl.classList.add("item")
       liEl.textContent = ingredient;
       liElElements.push(liEl);
     });
    ul.append(...liElElements);
  }
  
renderMarkup(ingredients);
