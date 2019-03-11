'use strict';

QUnit.module('Тестируем функцию solve', function (number) {
  QUnit.test('solve работает правильно ', function (assert) {
    assert.strictEqual(solve('x + 1', 1).getResult(), 2);
    assert.strictEqual(solve('2 + x - 1', 5).getResult(), 6);
    assert.strictEqual(solve('2 * x - 1', 5).getResult(), 9);
    assert.strictEqual(solve('2 * ( x - 1 )', 5).getResult(), 8);
    assert.strictEqual(solve('(5 - x) * (x + 5)', 3).getResult(), 16);
    assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3).getResult(), 144);
  });

  QUnit.test('solve корректно обрабатывает ошибки ', function (assert) {
    assert.strictEqual(
        isNaN(solve(11, 11).error),
        true,
        'Вместо строки-выражения передали число');
    assert.strictEqual(
        isNaN(solve('x * x').error),
        true,
        'Не передан x');
    assert.strictEqual(
        isNaN(solve('xx * 10 -1', 10).error),
        true,
        'Лишние символы в выражении');
    assert.strictEqual(
        isNaN(solve('(x * x - 10', 12).error),
        true,
        'Ошибки при использовании операторов'
        );
  });
});
