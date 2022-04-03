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
export {getRandomNumber, getRandomNumbers, checkLength};
