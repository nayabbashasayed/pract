var img_arr = [
"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg",
"6.jpg",
"7.jpg",
"8.jpg"];

var slide=document.getElementById("slide");
var arr_size = img_arr.length;
var arr_index = 0;

function nextImage() {
	arr_index++;
	if (arr_index > arr_size - 1) {
		arr_index = arr_size - 1;
	}
	slide.src = img_arr[arr_index];
}

function prevImage() {
	arr_index--;
	if (arr_index < 0) {
		arr_index = 0;
	}
	slide.src = img_arr[arr_index];
}
