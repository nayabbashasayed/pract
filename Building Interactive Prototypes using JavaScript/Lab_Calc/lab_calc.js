var user = {
	name : "",
	var1 : "",
	var2 : "",
};

user.name = prompt("Enter your name");

user.var1 = prompt("Enter the var1");

user.var2 = prompt("Enter the var2");

var sum, diff, prod, quot, mod, var1, var2;

var1 = Number(user.var1);
var2 = Number(user.var2);

sum = var1 + var2;
diff = var1 - var2;
prod = var1 * var2;
quot = var1 / var2;
mod = var1 % var2;

document.getElementById("head1").innerHTML += ", " + user.name;
document.getElementById("oper").innerHTML = "Operand #1:" + var1 + "Operand #2:" + var2;
document.getElementById("sum").innerHTML = "The sum of " + var1 + "and " + var2 + "is :" + sum;
document.getElementById("diff").innerHTML = "The Difference of " + var1 + "and " + var2 + "is :" + diff;
document.getElementById("prod").innerHTML = "The product of " + var1 + "and " + var2 + "is :" + prod;
document.getElementById("quot").innerHTML = "The Quotient of " + var1 + "and " + var2 + "is :" + quot;
document.getElementById("mod").innerHTML = "The Modulo of " + var1 + "and " + var2 + "is :" + mod;
