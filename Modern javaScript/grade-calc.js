const calcGrade = (studentScore, totalPossibleScore) => {
	const percentage = studentScore * 100 / totalPossibleScore;
	let grade;

	if (percentage >= 90 && percentage <= 100) {
		grade = 'A';
	}else if (percentage >= 80 && percentage <= 89) {
		grade = 'B';
	}else if (percentage >= 70 && percentage <= 79) {
		grade = 'C';
	}else if (percentage >= 60 && percentage <= 69) {
		grade = 'D';
	}else if (percentage >= 0 && percentage <= 59) {
		grade = 'F';
	}
	return `You got the grade ${grade} - (${percentage}%)!`;
}

console.log(calcGrade(14, 20));
