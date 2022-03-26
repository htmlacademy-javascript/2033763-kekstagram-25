const checkLength = (string, maxlength) => {
  if (string.length <= maxlength) {
    return true; //подходит
  } else {
    return false; //не подходит
  }
};
// https://ru.stackoverflow.com/questions/66866/Как-получить-случайное-число-в-заданном-промежутке-на-javascript
const getRandomNumber = function(min, max)
{
  return Math.floor(Math.random() * (max - min + 1 - 0.5)) + min + min;
};
const getRandomNumbers = function(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// eslint-disable-next-line no-unused-vars
const randomId = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
];

// eslint-disable-next-line no-unused-vars
const randomUrl = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
];
// eslint-disable-next-line camelcase
const RandomDescripion = [
  'Ваше фото - img/avatar-1.svg',
  'Ваше фото - img/avatar-2.svg',
  'Ваше фото - img/avatar-3.svg',
  'Ваше фото - img/avatar-4.svg',
  'Ваше фото - img/avatar-5.svg',
  'Ваше фото - img/avatar-6.svg',
];
const message = [
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Всё отлично!'
];
const creatRandomDescription = () => {
  const randomNameId = getRandomNumber(0, randomId.length -1);
  const randomUrls = getRandomNumber(0, randomUrl.length -1);
  const RandomDescripions = getRandomNumber(0, RandomDescripion.length -1);
  const RandomLikes = getRandomNumbers(15, 200);
  const RandomComments = getRandomNumber(0, message.length -1);
  return {
    id: randomId[randomNameId],
    Url: randomUrl[randomUrls],
    description: RandomDescripion[RandomDescripions],
    likes: RandomLikes,
    message: message[RandomComments],
  };
};