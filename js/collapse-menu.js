/**
 * This function is going to be executed only when the page has finished loading
 */
$(document).ready(function () {
	
	/**
	 * If the top navigation bar is collapsed and has to be expanded using the hamburger button then this function
	 * allows to close that expanded menu if the users clicks outside it.
	 */
	$(document).click(function (event) {
		let click = $(event.target);
		let _open = $(".navbar-collapse").hasClass("show");
		if (_open === true && !click.hasClass("navbar-toggler")) {
			$(".navbar-toggler").click();
		}
	});
});