const userLogin = prompt('Кто там?');

if(userLogin === 'Админ') {
  const password = prompt('Введите пароль');

  if(password === 'Я главный') {
    alert('Здравствуйте!');
  } else if(password === '' || password === null) {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }
} else if(userLogin === '' || userLogin === null) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}