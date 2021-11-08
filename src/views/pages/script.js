/* this is the JS instead of jQuery so you can see. This selects all .rows in the html and the foreach loops thru them using the variable "row" as its reference. when you're in a foreach, you can then use that variable to select any child elements within it e.g. row.querySelector(".show-col") grabs the button. then the click events. */
var rows = document.querySelectorAll('.row');

rows.forEach((row) => {
	let colOpen = row.querySelector(".show-col"),
	colClose = row.querySelector(".close-col");
	
	colOpen.addEventListener("click", function () {
		row.classList.add("box-active");
	});

	colClose.addEventListener("click", function () {
		row.classList.remove("box-active");
	});
});