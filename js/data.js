// Массив, в котором лежат все остальные
import {getRandomNumber} from 'js/util.js';
import {randomDescripion} from 'js/util.js';
import {message} from 'js/util.js';
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
