import { photos } from './data.js';
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

function openUserModal () {
  userModalElement.classList.remove('hidden');
  photos();

  document.addEventListener('keydown', onPopupEscKeydown);
}


userModalOpenElement.addEventListener('click', () => {
  openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});


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
