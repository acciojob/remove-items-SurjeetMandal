//your JS code here. If required.
let select = document.getElementById("colorSelect");
let deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", function() {
	let indexOfColorToDelete = select.selectedIndex;

	if (indexOfColorToDelete !== -1) {
		select.remove(indexOfColorToDelete);
	}
	else{
		alert("please select a color to be deleted");
	}
})
