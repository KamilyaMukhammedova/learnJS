let calculator = {
  read() {
    this.a = +prompt('Введите а', '');
    this.b = +prompt('Введите b', '');
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());