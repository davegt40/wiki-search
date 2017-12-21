function getSearchString(element) {
	return document.getElementById(element).value;
}

function clearInputField(element) {
	document.getElementById(element).value = null;
}

function wikiQueryBuilder() {
	var wikiURL = "https://en.wikipedia.org/w/api.php";
	wikiURL += '?' + $.param({
    'action' : 'opensearch',
    'search' : getSearchString('search1'),
    'prop'  : 'revisions',
    'rvprop' : 'content',
    'format' : 'json',
    'limit' : 10
	});
	return wikiURL;
}

function search() {
  var wikiURL = wikiQueryBuilder();

	$.ajax( {
    url: wikiURL,
    dataType: 'jsonp',
    success: function(data) {
       console.log(data);
    }
	});
}

$(document).ready(function() {
	$("#search-button").on("click", function() {
		search();
		clearInputField("search1");
	});
});
