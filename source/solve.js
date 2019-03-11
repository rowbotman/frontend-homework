'use strict';

/**
 * the function get type of object
 * @param obj
 * @returns {string}
 */
const toType = obj =>
		({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();

/**
 * the function solves the math expression with x variable
 * @param {string} expr - the math expression
 * @param {integer} _x - the value of the x variable in expression
 * @returns {number} - the calculated value of math expression
 */
const solve = (expr, _x) => {
	if (toType(expr) !== 'string') { return NaN; }

	const x = +_x;
	if (Number.isNaN(x)) { return NaN; }

	const lowerExpr = expr.toLowerCase();
	const symPattern = new RegExp(/^[x\d/\*\+\-()' '\t]*$/);
	const syntaxPattern = new RegExp(/(x{2})|(\*{2})|(\-{2})|(\+{2})/);
	if (symPattern.test(lowerExpr)
		&& !syntaxPattern.test(lowerExpr)) {
		try {
			let result = Function('x', `return (${lowerExpr});`)(x);
			if (Number.isNaN(result)) { return NaN; }

			return result;
		} catch (e) {
			return NaN;
		}
	}
	return NaN;
};
