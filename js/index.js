function getSearchString(element) {
	return document.getElementById(element).value;
}

function clearInputField(element) {
	document.getElementById(element).value = null;
}

function clearSearchCards(element) {
	var parentNode = document.getElementById(element);
	while (parentNode.firstChild) {
	    parentNode.removeChild(parentNode.firstChild);
	}
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

function createCards() {
	var card = document.createElement('div');
	card.setAttribute('class', 'card');
	var cardBlock = document.createElement('div');
	cardBlock.setAttribute('class', 'card-block');
	var cardTitle = document.createElement('h3');
	cardTitle.setAttribute('class', 'card-title');
	var cardText = document.createElement('p');
	cardText.setAttribute('class', 'card-text');
	var cardButton = document.createElement('a');
	cardButton.setAttribute('href', '#');
	cardButton.setAttribute('class', 'btn btn-primary');

	var titleText = document.createTextNode('Test Title');
	var text = document.createTextNode('Test text');
	var buttonText = document.createTextNode('Button text');

	cardTitle.appendChild(titleText);
	cardText.appendChild(text);
	cardButton.appendChild(buttonText);
	card.appendChild(cardBlock);
	cardBlock.appendChild(cardTitle);
	cardBlock.appendChild(cardText);
	cardBlock.appendChild(cardButton);

	var cardContainer = document.getElementById('card-group');
	cardContainer.appendChild(card);
}

$(document).ready(function() {
	$("#search-button").on("click", function() {
		clearSearchCards('card-group');
		search();
		clearInputField("search1");
	});
});
