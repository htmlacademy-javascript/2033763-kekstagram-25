import {getRandomNumber} from 'js/util.js';
const randomDescripion = [
  'Ваше фото - img/avatar-1.svg',
  'Ваше фото - img/avatar-2.svg',
  'Ваше фото - img/avatar-3.svg',
  'Ваше фото - img/avatar-4.svg',
  'Ваше фото - img/avatar-5.svg',
  'Ваше фото - img/avatar-6.svg',
];


const messages = [
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'В целом всё неплохо. Но не всё.'
];
const names = [
  'Санек',
  'Артемий',
  'Максим',
];
const message = [
  {
    id: getRandomNumber(0, 25),
    avatar: 'img/avatar-6.svg',
    message: messages[getRandomNumber(0, 2)],
    name: names[getRandomNumber(0, names.length -1)],
  }
];
