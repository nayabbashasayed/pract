/* Create new element */
var newDiv=document.createElement("div");

/* Add some content to the new element */
newDiv.innerHTML = "<p>New para</p>";

/* Get the reference of tag to be wrapped */
var newP=document.getElementById("myPara");

/* Clone the reference of the tag to be wrapped and append as a child for new tag (newDiv) */
newDiv.appendChild(newP.cloneNode(true));

/* Replace the child of parent of the tag (newP) with new wrapper(newDiv) */
newP.parentNode.replaceChild(newDiv, newP);
