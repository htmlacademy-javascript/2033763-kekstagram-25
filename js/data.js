// Массив, в котором лежат все остальные
import {getRandomNumber} from './util.js';
const randomDescripion = [
  'Ваше фото - img/avatar-1.svg',
  'Ваше фото - img/avatar-2.svg',
  'Ваше фото - img/avatar-3.svg',
  'Ваше фото - img/avatar-4.svg',
  'Ваше фото - img/avatar-5.svg',
  'Ваше фото - img/avatar-6.svg',
];
const names = [
  'Санек',
  'Артемий',
  'Максим',
];
const messages = [
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'В целом всё неплохо. Но не всё.'
];

const message = [
  {
    id: getRandomNumber(0, 25),
    avatar: 'img/avatar-6.svg',
    message: messages[getRandomNumber(0, 2)],
    name: names[getRandomNumber(0, names.length -1)],
  }
];


const creatRandomDescription = (id) => {
  const randomDescripions = getRandomNumber(0, randomDescripion.length -1);
  const randomLikes = getRandomNumber(15, 200);
  return {
    id: id,
    url: `photos/${ id }.jpg`,
    description: randomDescripion[randomDescripions],
    likes: randomLikes,
    comments: message,
  };
};
const photos = [];
for (let i = 1; i <= 25 ; i++){
  const photo = creatRandomDescription(i);
  photos.push(photo);
}
export {photos};
