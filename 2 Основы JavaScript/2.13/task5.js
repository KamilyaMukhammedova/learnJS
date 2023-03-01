let i = 0;

while(i <= 100) {
  const userNumber = prompt('Введите число больше 100');

  if(+userNumber > 100) {
    i = +userNumber;
  } else if(userNumber === null) {
    break;
  }
}