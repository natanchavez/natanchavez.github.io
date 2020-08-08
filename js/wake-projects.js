/**
 * This function is going to be executed when the page is loaded, it will make four ajax calls to four different
 * sites hosted on heroku, the purpose of this is to wake up those applications by making a simple HEAD request
 * because after 1 hour of inactivity those sites are put to sleep and to have access again they need to be
 * initialized, and this process might take up to 30 seconds which is a lot of time for someone visiting my
 * portfolio, so by making the ajax calls those sites might be already initialized by the time the user arrives to
 * the "my projects" section.
 */
$(document).ready(function () {
	
	/**
	 * HEAD request using ajax, the only purpose of this is to wake up the heroku app and then append a simple
	 * character at the navigation bar as an indicative that the app has been already initialized.
	 */
	$.ajax({
		type: "HEAD",
		url: "https://crud-application-web.herokuapp.com"
	}).done(function () {
		$(".navbar-brand").append(document.createTextNode("."));
	}).fail(function () {
		$(".navbar-brand").append(document.createTextNode(","));
	});
	
	/**
	 * HEAD request using ajax, the only purpose of this is to wake up the heroku app and then append a simple
	 * character at the navigation bar as an indicative that the app has been already initialized.
	 */
	$.ajax({
		type: "HEAD",
		url: "https://n-queens-web.herokuapp.com"
	}).done(function () {
		$(".navbar-brand").append(document.createTextNode("."));
	}).fail(function () {
		$(".navbar-brand").append(document.createTextNode(","));
	});
	
	/**
	 * HEAD request using ajax, the only purpose of this is to wake up the heroku app and then append a simple
	 * character at the navigation bar as an indicative that the app has been already initialized.
	 */
	$.ajax({
		type: "HEAD",
		url: "https://rhapsody-project.herokuapp.com"
	}).done(function () {
		$(".navbar-brand").append(document.createTextNode("."));
	}).fail(function () {
		$(".navbar-brand").append(document.createTextNode(","));
	});
	
	/**
	 * HEAD request using ajax, the only purpose of this is to wake up the heroku app and then append a simple
	 * character at the navigation bar as an indicative that the app has been already initialized.
	 */
	$.ajax({
		type: "HEAD",
		url: "https://turing-tribute-page.herokuapp.com"
	}).done(function () {
		$(".navbar-brand").append(document.createTextNode("."));
	}).fail(function () {
		$(".navbar-brand").append(document.createTextNode(","));
	});
})
