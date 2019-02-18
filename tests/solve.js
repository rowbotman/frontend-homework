'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
	});

	QUnit.test('solve корректно обрабатывает ошибки ', function (assert) {
		assert.strictEqual(
			solve(11, 11),
			null, 
			"Вместо строки-выражения передали число");
		assert.strictEqual(
			solve("x * x"),
			null,
			"Не передан x");
		assert.strictEqual(
			solve("xx * 10 -1", 10),
		 	null,
		 	"Лишние символы в выражении");
		assert.strictEqual(
			solve("(x * x", 10), 
			null,
			"Ошибки при использовании операторов");
	});
});
