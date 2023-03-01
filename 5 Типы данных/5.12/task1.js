let user = {
  name: "Василий Иванович",
  age: 35
};

const json = JSON.stringify(user);
const newUser = JSON.parse(json);

console.log(newUser);