function extractCurrencyValue(str) {
  if(str) {
    return +str.slice(1);
  } else {
    return str;
  }
}

console.log(extractCurrencyValue('$120'));