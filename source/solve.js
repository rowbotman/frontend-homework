'use strict';

/**
 * the function save the custom exception
 * @param {string} message - the description of the error
 */

function CustomError(message) { this.message = message; }

/**
 * the function get the description of the error
 * @returns {string} this.message - the description of the error
 */

CustomError.prototype.toString = function() { return this.message; };

/**
 * the function solves the math expression with x variable
 * @param {string} expr - the math expression
 * @param {integer} _x - the value of the x variable in expression
 * @returns {integer} - the calculated value of math expression
 */

const solve = (expr, _x) => {
	if (typeof(expr) !== "string") {
		throw new CustomError("The expression should be a string");
	}
	let x = +_x;
	if (Number.isNaN(	x)) {
		throw new CustomError("The value should be initialize");
	}

	expr = expr.toLowerCase();

	if (!expr.match(/^[x\d/\*\+\-( )]*$/)
		|| expr.match(/(xx+)|(\*\*+)|(\-\-+)|(\+\++)/)) {
		throw new CustomError("Incorrect symbols in expression")
	}
	let result = Function('x', 'return (' + expr + ');')(x);
	if (Number.isNaN(result)) {
		throw new CustomError("Expression is incorrect");
	}
	return result;
}