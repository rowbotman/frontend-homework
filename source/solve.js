function CustomError( message ) {
	this.message = message;
}

CustomError.prototype.toString = function() { return this.message; };

const solve = (expr, _x) => {
	if (typeof(expr) !== "string") {
		throw new CustomError("The expression should be a string");
	}

	if (isNaN(_x)) {
		throw new CustomError("The value should be initialize");
	}

	let x = +_x;
	expr = expr.toLowerCase();

	if (!expr.match(/^[x\d/\*\+\-( )]*$/) 
		|| expr.match(/(xx+)|(\*\*+)|(\-\-+)|(\+\++)/)) {
		throw new CustomError("Incorrect symbols in expression")
	}
	let result = Function('x', 'return (' + expr + ');')(x);
	if (isNaN(result)) { 
		throw CustomError("Expression is incorrect");
	}
	return result; 
}