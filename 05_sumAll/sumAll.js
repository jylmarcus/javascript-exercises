const sumAll = function(firstNumber, secondNumber) {
  if (typeof(firstNumber) != "number" || typeof(secondNumber) != "number" || firstNumber < 0 || secondNumber <0) {
    return "ERROR";
  }
  
  let sum = 0;
  
  if (secondNumber < firstNumber) {
    [firstNumber, secondNumber] = [secondNumber, firstNumber];
  }
  
  for (i = firstNumber; i <= secondNumber; i++){
    sum += i;
  }

// Do not edit below this line
module.exports = sumAll;
