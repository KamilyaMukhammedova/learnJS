const userNumber = prompt('Введите число');

if(Number(userNumber) > 0) {
  alert(1);
} else if(Number(userNumber) < 0) {
  alert(-1);
} else if(Number(userNumber) === 0) {
  alert(0);
}