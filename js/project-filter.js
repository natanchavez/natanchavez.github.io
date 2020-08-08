/**
 * This function is going to be executed only when the page has already been loaded. It check if a type of project
 * has already been selected on the filter and calls the corresponding function in order to show or hide projects
 * based on the chosen option.
 */
$(document).ready(function () {
	let $webTypeProject = $(".web-project");
	let $desktopTypeProject = $(".desktop-project");
	let $projectTypeList = $("#project-type-filter");
	let chosenProjectType = $projectTypeList.find(":selected").text();
	filterProject(chosenProjectType);
	
	/**
	 * This function is executed every time the user selects a different type of project to show, it is used as a
	 * filter to show and hide specific projects based on their class attribute.
	 */
	$projectTypeList.on("change", function () {
		let chosenProjectType = this.value.toString();
		filterProject(chosenProjectType);
	})
	
	function filterProject(chosenProjectType) {
		
		switch (chosenProjectType) {
			case "Escritorio":
				$desktopTypeProject.show();
				$webTypeProject.hide();
				break;
			case "Web":
				$webTypeProject.show();
				$desktopTypeProject.hide();
				break;
			default:
				$webTypeProject.show();
				$desktopTypeProject.show();
		}
	}
	
});
