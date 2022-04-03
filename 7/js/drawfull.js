import { photos } from './data.js';
import { message } from './data';
const fullPicture = document.querySelector('.big-picture');
const fragMent = document.createDocumentFragment();
const socialCountComments = document.querySelector('.social__comment-count');
const isEscapeKey = (evt) => evt.key === 'Escape';
const commentsLoader = document.querySelector('.comments-loader');
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};
function closeUserModal () {
  fullPicture.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscKeydown);
}
const body = document.querySelector('body');
fullPicture.forEach((photo) => {
  fullPicture.classList.remove('hidden');
  const bigPicture = fullPicture.cloneNode(true);
  bigPicture.querySelector('.big-picture__img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__comments').textContent = photo.message;
  socialCountComments.classList.add('.hidden');
  commentsLoader.classList.add('.hidden');
  body.classList.add('.modal-open');
  fragMent.appendChild(bigPicture);

});
fullPicture.appendChild(fragMent);
