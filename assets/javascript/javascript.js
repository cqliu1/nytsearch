$("something").on("click", function() { // update selector
	var searchTerm = "";
	var numRecords = ""; // 10 20 30
	var beginYear = ""; // change this
	var beginDate = beginDate + "0101";
	var endYear = "";	// change this
	var endDate = endYear + "1231";

	var pageNum = 0;

	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm 
					+ "&page=" + pageNum 
					+ "&begin_date=" + beginDate
					+ "&end_date=" + endDate;

	

});