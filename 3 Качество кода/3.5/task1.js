it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

/*Три теста написаны как одна функция с тремя проверками.
Если ошибка происходит посередине сложного потока выполнения, то нам придётся выяснять, какие данные были в этом месте.
Гораздо лучше разбить тест на несколько блоков it и ясно описать входные и ожидаемые на выходе данные.
 */
