$(document)ready(function() {
	$("something").on("click", function() { // update selector
		// variables for search terms
		var searchTerm = "";
		var numRecords = "";
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
						+ "&api_key" + apiKey;

		// ajax request to nytimes
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			console.log(response);

			// clear previous results
			$("something").empty();

			var results = response.response.docs;

			//loop through articles and display the number of records requested
			// TODO: limit number of results
			for(var i = 0; i < results.length; i++) {

				// declare variables for data we want from the response
				var title = results[i].headline.main;
				var pubDate = results[i].pub_date;
				var author = results[i].byline.original;
				var articleURL = results[i].web_url;

				var articleDiv = $("<div>").addClass("article");
				articleDiv.append("<h2>" + title + "</h2>");
				articleDiv.append("<em> Publication Date: " + pubDate + " Author: " + author + "</em>");
				articleDiv.append("<a href='" + articleURL + "'>" + articleURL + "</a>");

				$("something").append(articleDiv);
			}
		});

	});
});