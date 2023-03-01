function getAverageAge(users) {
  const ageSum = users.reduce((acc, user) => acc + user.age, 0);

  return ageSum / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log(getAverageAge(arr));