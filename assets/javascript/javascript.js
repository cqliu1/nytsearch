$(document).ready(function() {

	$("#search").on("click", function(event) { // update selector
		event.preventDefault();
		// variables for search terms
		var searchTerm = $("#searchTerm").val();
		console.log(searchTerm);
		var beginYear = "2000";
		var beginYear = $("#start-year").val();
		var beginDate = beginYear + "0101";
		console.log(beginDate);
		var endYear = $("#end-year").val();
		var endDate = endYear + "1231";
		console.log(endDate);
		var apiKey = "28113ce5fb89464bacc496acee5ff93f";

		// API search URL
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm 
						// + "&page=" + pageNum 
						+ "&begin_date=" + beginDate
						+ "&end_date=" + endDate
						+ "&api_key=" + apiKey;

		// ajax request to nytimes
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			console.log(response);

			// clear previous results
			$("#articles").empty();

			var results = response.response.docs;

			//loop through articles and display the number of records requested
			// TODO: limit number of results
			for(var i = 0; i < results.length; i++) {

				// declare variables for data we want from the response
				var title = results[i].headline.main;
				var pubDate = results[i].pub_date;
				var author = results[i].byline.original;
				var section = results[i].section_name;
				var articleURL = results[i].web_url;

				var articleDiv = $("<div>").addClass("article");
				articleDiv.append("<h2>" + title + "</h2>");
				articleDiv.append("<p>" + author + "");
				articleDiv.append("<p><em> Publication Date: " + pubDate + "</em></p>");
				articleDiv.append("<p> Section: " + section + "</p>");
				articleDiv.append("<p><a href='" + articleURL + "'>" + articleURL + "</a></p>");

				$("#articles").append(articleDiv);
			}
		});
	});

});