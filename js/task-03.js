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

const imgEl = document.querySelector(".gallery");
const imagesEl = images
.map((image) => `<style>.gallery {display: flex; gap: 10px; list-style: none;}</style><li class="img__item"><img class="img__photo" src="${image.url}" width="400" alt="${image.alt}"></img></li>`)
.join("");
imgEl.insertAdjacentHTML("afterbegin", imagesEl);
