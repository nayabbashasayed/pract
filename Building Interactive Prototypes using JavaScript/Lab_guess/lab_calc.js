var rand_num = 0;
var tries = 5;

rand_num = Math.floor(Math.random() * 10 + 1);

var i = 0;
let prev_guessed = [];

for (i = 0; i < tries; i++) {
	let guessed_num = Number(window.prompt("Guess the value"));
	prev_guessed[i] = guessed_num;

	if (guessed_num === rand_num) {
		window.alert("You guessed it right. The num: " + rand_num);
		break;
	} else {
		let j = 0;
		for (j = 0; j < i; j++) {
			if (guessed_num === prev_guessed[j]) {
				prev_guessed.splice(i, 1);
				window.alert("Duplicate guess. Try other than :" + prev_guessed);
				i--;
				j--;
				break;
			}
		}
		if (j === i) {
			window.alert("Wrong gess. Try again");
		}
	}
}

if (i == tries) {
	window.alert("Ran out of tries. The number is: " + rand_num);
}
