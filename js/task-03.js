const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');

const makeImageEl = images.map(({url, alt}) => `<li><img src="${url}" alt="${alt}" width="250" height="150"></li>`).join('');

listEl.insertAdjacentHTML('beforeend', makeImageEl);


// const makeSomeThings = ({ url, alt }) => { 
//   const itemEl = document.createElement('li');

//   const imageEl = document.createElement('img');
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.width = 320;

//   itemEl.append(imageEl);

//   return itemEl;
// }

// const elements = images.map(makeSomeThings);

// listEl.append(...elements);

