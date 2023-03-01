function A() {}

function B() {}

let a = new A();
let b = new B();

alert( a == b ); // Если функция возвращает объект, то new вернёт его вместо this, поэтому true возможно