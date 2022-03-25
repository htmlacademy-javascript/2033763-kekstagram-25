const checkLength = function(string, maxlength) {
  if (string.length <= maxlength){
    return true; //подходит
  } else{
    return false; //не подходит
  }
};
// https://ru.stackoverflow.com/questions/66866/Как-получить-случайное-число-в-заданном-промежутке-на-javascript
function getRandomNumber(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(10, 100));
