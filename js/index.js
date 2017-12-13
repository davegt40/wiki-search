function getSearchString(element) {
	return document.getElementById(element).value;
}

function clearInputField(element) {
	document.getElementById(element).value = null;
}

$(document).ready(function() {
	$("#search-button").on("click", function() {
		console.log(getSearchString('search1'));
		clearInputField("search1");
	});
});