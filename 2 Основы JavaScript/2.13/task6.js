let n = 10;
const simpleNumbers = [];

nextPrime:
  for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }

    simpleNumbers.push(i);
  }

  alert('Simple numbers: ' + simpleNumbers.join(','));