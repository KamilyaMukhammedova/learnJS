function readNumber() {
  let number;

  while (true) {
    number = prompt('Введите число', '');

    if(number === '' || number === null) {
      number = null;
      break;
    }

    if(!isNaN(+number) === true) {
      number = +number;
      break;
    }
  }

  return number;
}