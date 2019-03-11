'use strict';

/**
 * Custom class of errors and results
 */
class SolveResult {
	constructor(value, msg = NaN) {
		this.value = value;
		this.error = msg;
	}

	/**
	 * Get result solve function
	 * @returns {number} - result value of solve function
	 */
	getResult() {
		return this.value;
	}

	/**
	 * Get error message. If solve() have no errors, this return NaN
	 * @returns {string} - error message
	 */
	errors() {
		return this.error;
	}
}

/**
 * the function get type of object
 * @param obj - object
 * @returns {string} - result type
 */
const toType = obj =>
		({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();

/**
 * the function solves the math expression with x variable
 * @param {string} expr - the math expression
 * @param {integer} _x - the value of the x variable in expression
 * @returns {SolveResult} - the calculated value of math expression with error message (if no errors it is NaN)
 */
const solve = (expr, _x) => {
	if (toType(expr) !== 'string') {
		return new SolveResult(NaN, "the expression should have a string type")
	}

	const x = +_x;
	if (Number.isNaN(x)) {
		return new SolveResult(NaN, "the second argument should be a number");
	}

	const lowerExpr = expr.toLowerCase();
	const symPattern = new RegExp(/^[x\d/\*\+\-()' '\t]*$/);
	const syntaxPattern = new RegExp(/(x{2})|(\*{2})|(\-{2})|(\+{2})/);
	if (symPattern.test(lowerExpr)
		&& !syntaxPattern.test(lowerExpr)) {
		try {
			let result = Function('x', `return (${lowerExpr});`)(x);
			if (Number.isNaN(result)) {
				return new SolveResult(NaN, "calculate errors");
			}

			return new SolveResult(result);
		} catch (e) {
			console.log(e);
			return new SolveResult(NaN, "syntax error");
		}
	}
	return new SolveResult(NaN, "incorrect symbols in expression")
};
