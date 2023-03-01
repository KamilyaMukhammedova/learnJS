function sumInput() {
  const numbers = [];
  let numbersSum = 0;

  while(true) {
    const number = prompt('Введите число', '');
    if(!number || isNaN(number)) {
      break;
    } else {
      numbers.push(+number);
      numbersSum += +number;
    }
  }

  return numbersSum;
}

console.log(sumInput());