function checkSpam(str) {
  if(str.toLowerCase().includes('viagra') ||
    str.toUpperCase().includes('XXX')
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam('viagra'));
console.log(checkSpam('no spam'));