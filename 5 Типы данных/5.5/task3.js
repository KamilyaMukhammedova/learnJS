function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr);
}

console.log(filterRangeInPlace([5, 3, 8, 1], 1, 4));