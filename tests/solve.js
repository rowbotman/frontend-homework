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
			isNaN(solve(11, 11)),
			true,
			"Вместо строки-выражения передали число");
		assert.strictEqual(
			isNaN(solve("x * x")),
			true,
			"Не передан x");
		assert.strictEqual(
			isNaN(solve("xx * 10 -1", 10)),
		 	true,
		 	"Лишние символы в выражении");
		assert.strictEqual(
			isNaN(solve("(x * x", 10)),
			true,
			"Ошибки при использовании операторов");
	});
});
