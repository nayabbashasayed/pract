var i = 0;

/* This is different from C delcaration arr[]; */
var arr = [];

for (i = 0; i < 10; i++) {
	arr[i] = i;
}

var sum = 0;

for (i = 0; i < 10; i++) {
	sum += i;
}

document.write(sum);
