/* Get the paragraph with id "third" reference */
var third = document.getElementById("third");

/* Get the paragraph with id "first" reference */
var first = document.getElementById("first");

/*
 * For mousedown event 'on' prefix is necessary if event handler is called like
 * below
 * When mouse click released, third_handler will be called
 */
third.onmousedown = third_handler;

/* For mousedown event 'on' prefix can be omitted if 'addEventListener' is used.
 * When mouse click, third_handler will be called */

first.addEventListener("click", first_handler);

function first_handler() {
	first.innerHTML = "first changed";
}

function third_handler() {
	third.innerHTML = "third changed";
}
