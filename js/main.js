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
    id: [getRandomNumber(0, 25)],
    avatar: `Фото - img/avatar-....svg,${  randomDescripion[getRandomNumber(0, 6)]}`,
    message: messages[getRandomNumber(0, 2)],
    name: names[getRandomNumber(0, names.length -1)],
  }
];
const creatRandomDescription = () => {
  const randomNameId = getRandomNumber(0, 25);
  const randomUrl = getRandomNumber(0, 25);
  const randomDescripions = getRandomNumber(0, randomDescripion.length -1);
  const randomLikes = getRandomNumbers(15, 200);
  const randomComments = getRandomNumber(0, 2);
  return {
    id: [randomNameId],
    url: [randomUrl],
    description: randomDescripion[randomDescripions],
    likes: randomLikes,
    message: messages[randomComments],
  };
};
// Массив, в котором лежат все остальные
const photos = [];
for (let i = 1; i <=25; i++){
  const photo = creatRandomDescription(i);
  photos.push(photo);
}