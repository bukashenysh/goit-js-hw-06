const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul#ingredients');
const elements = [];


for (let i = 0; i < ingredients.length; i += 1) { 

  const itemEl = document.createElement('li');
  itemEl.textContent = ingredients[i];
  itemEl.classList.add('item');

  elements.push(itemEl)
}

  listEl.append(...elements);