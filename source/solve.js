'use strict';

/**
 * the function solves the math expression with x variable
 * @param {string} expr - the math expression
 * @param {integer} _x - the value of the x variable in expression
 * @returns {integer} - the calculated value of math expression
 */

const solve = (expr, _x) => {
	if (typeof(expr) !== "string") { return null; }

	const x = +_x;
	if (Number.isNaN(x)) { return null; }

	const lowerExpr = expr.toLowerCase();
	if (!lowerExpr.match(/^[x\d/\*\+\-( )]*$/)
		|| lowerExpr.match(/(xx+)|(\*\*+)|(\-\-+)|(\+\++)/)) {
		return null;
	}

	let result = 0;
	try {
		result = Function('x', 'return (' + lowerExpr + ');')(x);	
	} catch (e) {
		return null;
	}
	if (Number.isNaN(result)) { return null; }

	return result;
}
