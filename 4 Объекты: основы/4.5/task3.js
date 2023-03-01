function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    const userNumber = +prompt('Введите число', '');
    return this.value = this.value + userNumber;
  }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);