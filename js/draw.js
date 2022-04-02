import { photos } from './data.js';
const picture = document.querySelector('#picture')
  .content
  .querySelector('.picture');


const photoListFragment = document.createDocumentFragment();


const containerPicture = document.querySelector('.pictures.container');

photos.forEach((photo) => {
  const pictureElement = picture.cloneNode(true);
  pictureElement.querySelector('img').src = photo.url;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  photoListFragment.appendChild(pictureElement);
});

containerPicture.appendChild(photoListFragment);
