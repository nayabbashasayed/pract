para_list = document.getElementById("task_list");

function writeToDoc() {
	var task = document.getElementById("task").value;
	/* Check for emptiness and throw alert if empty */
	if (task.length !== 0) {
		/* Embedding the task + button into <span> (or any other container) is necesaary.
		 * This container acts as parent to delete it's child. */ 
		para_list.innerHTML += "<span>" + task + " <input type=\"button\" onclick = \"removeTask(event)\" value=\"Done\"/> <br/> </span>";
	} else {
		window.alert("Value can't be empty");
	}
	document.getElementById("task").value = "";
}

function clearList() {
	var list = document.getElementById("task_list");
	list.innerHTML = "";
}

function removeTask(event) {
	var parentele = event.target.parentElement;
	para_list.removeChild(parentele);
}
