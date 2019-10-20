var user = {
	name : "",
	var1 : "",
	var2 : "",
};

user.name = prompt("Enter your name");

user.var1 = prompt("Enter the var1");

user.var2 = prompt("Enter the var2");

var sum, diff, prod, quot, mod;

sum = Number(user.var1) + Number(user.var2);
diff = user.var1 - user.var2;
prod = user.var1 * user.var2;
prod = user.var1 * user.var2;
quot = user.var1 / user.var2;
mod = user.var1 % user.var2;

document.getElementById("calc").innerHTML = "Welcome " + user.name + "Sum" + sum;
