function pow(x, n) {
  if(n > 1 && Number.isInteger(n)) {
    return x ** n;
  } else {
    return 'Степень должна быть целым числом и больше 1';
  }
}