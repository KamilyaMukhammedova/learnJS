function camelize(str) {
  const strArray = str.split('-');

  const newArray = strArray.map((item, index) => {
    console.log(index)
    if(index === 0) {
      return item;
    } else {
      return item[0].toUpperCase() + item.slice(1);
    }
  });

  return newArray.join('');
}

console.log(camelize('list-style-image'));