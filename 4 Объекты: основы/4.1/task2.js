function isEmpty(obj) {
  let properties = 0;

  for(let key in obj) {
    if(key) {
      properties++;
    }
  }

  return !(properties > 0);
}