function getDateAgo(date, days) {
  const copyDate = new Date(date);

  copyDate.setDate(date.getDate() - days);
  return copyDate.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));