function truncate(str, maxlength) {
 if(str === '' || str.length <= maxlength || maxlength === 0) {
   return str;
 }

 return str.slice(0, maxlength) + '...';
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));