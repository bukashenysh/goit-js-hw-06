const listOfCategoriesEl = document.querySelector('#categories');

const numberOfCategoriesEl = listOfCategoriesEl.querySelectorAll('ul');
console.log('Number of categories:', numberOfCategoriesEl.length);

const categoriesEl = listOfCategoriesEl.querySelectorAll('h2');

for (let i = 0; i < numberOfCategoriesEl.length; i += 1) {

  console.log('Category:', categoriesEl[i].textContent);
  
    const elementsEl = numberOfCategoriesEl[i].querySelectorAll('li');
    console.log('Elements:', elementsEl.length);
}