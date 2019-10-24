var range = document.getElementById("range");
var submit = document.getElementById("submit");
var norange = document.getElementById("norange");

var onlyNum = document.getElementById("onlyNum");

function verify() {
	if (isNaN(range.value)) {
		onlyNum.style.display = "block";
		required.style.display = "none";
		norange.style.display="none";
		return false;
	} else if (range.value == "") {
		onlyNum.style.display = "none";
		required.style.display = "block";
		norange.style.display="none";
		return false;
	} else if (range.value >= 40 || range.value <=20) {
		onlyNum.style.display = "none";
		norange.style.display="block";
		required.style.display = "none";
		return false;
	} else {
		norange.style.display="none";
		required.style.display = "none";
		onlyNum.style.display = "none";
		return true;
	}
}

