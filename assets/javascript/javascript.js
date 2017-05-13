$("something").on("click", function() { // update selector
	// variables for search terms
	var searchTerm = "";
	var numRecords = ""; // 10 20 30
	var beginYear = ""; // change this
	var beginDate = beginDate + "0101";
	var endYear = "";	// change this
	var endDate = endYear + "1231";
	var pageNum = 0;
	var apiKey = "28113ce5fb89464bacc496acee5ff93f";

	// API search URL
	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm 
					+ "&page=" + pageNum 
					+ "&begin_date=" + beginDate
					+ "&end_date=" + endDate
					+ "&api-key" + apiKey;


	// ajax request to nytimes
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		console.log(response);
	});

});