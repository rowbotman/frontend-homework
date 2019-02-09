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
		assert.throws(
			function() { solve(11, 11); },
			new CustomError("The expression should be a string"),
		);
		assert.throws(
			function() { solve("x * x"); },
			new CustomError("The value should be initialize"),
		);
		assert.throws(
			function() { solve("xx * 10 -1", 10); },
			new CustomError("Incorrect symbols in expression"),
		);
		assert.throws(
			function() { solve("(x * x", 10); },
			new SyntaxError("Unexpected token ;")
		);

	});
});
