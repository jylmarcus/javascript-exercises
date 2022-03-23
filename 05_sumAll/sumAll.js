const sumAll = function(firstNumber, secondNumber) {
  let sum = 0;
  if (secondNumber < firstNumber) {
    [firstNumber, secondNumber] = [secondNumber, firstNumber];
  }
  for (i = firstNumber; i <= secondNumber; i++){
    sum += i;
  }

// Do not edit below this line
module.exports = sumAll;
