import { photos } from './data.js';
const fullPicture = document.querySelector('.big-picture');
const fragMent = document.createDocumentFragment();
const socialCountComments = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
photos.forEach((photo) => {
  fullPicture.classList.remove('hidden');
  fragMent.querySelector('.big-picture__img').src = photo.url;
  fragMent.querySelector('.likes-count').textContent = photo.likes;
  fragMent.querySelector('.comments-count').textContent = photo.comments;
  fragMent.querySelector('.social__comments').textContent = photo.message;
  socialCountComments.classList.add('.hidden');
  commentsLoader.classList.add('.hidden');
  body.classList.add('.modal-open');
  fragMent.appendChild(fullPicture);
});
fullPicture.appendChild(fragMent);
