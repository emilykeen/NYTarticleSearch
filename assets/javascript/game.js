$(document).ready(function() {

	var query = "";
	var startYear = 0;
	var endYear = 0;
	var numResults = 0;

	var baseURL = "http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json";

	function runQuery(numArticles, queryURL) {

		$.ajax({
		  url: queryURL,
		  method: "GET"
		}).done(function(results) {

			console.log(results);
			

			for (i = 0; i < numArticles; i++) {

				var article = results.response.docs[i];
				var title;
				var author;
				var date;
				var webURL;

				if (article.headline !== null) {
					title = article.headline.main.split(";");
					title = title[0];
				}
				else {
					title = null;
				}
				if (article.byline !== null) {
					author = article.byline.original;
				}
				else {
					author = null;
				}
				if (article.pub_date !== null) {
					date = article.pub_date.split("T");
					date = date[0];
				}
				if (article.web_url !== null) {
					webURL = article.web_url;
				}

				console.log(title);
				console.log(author);
				console.log(date);
				console.log(webURL);

				var newDiv = $("<div class='resultDiv'>");
				var headingSec = $("<h3>" + title + "</h3>");
				var authorSec = $("<p>" + author + "</p>");
				var dateSec = $("<p>" + date + "</p>");
				var urlSec = $("<a href=" + webURL + " " + "target='_blank_'>" + webURL + "</p>");
				
				newDiv.append(headingSec)
				.append(authorSec)
				.append(dateSec)
				.append(urlSec);

				$("#searchRes").append(newDiv);
				
			}

		}).fail(function(err) {
			  throw err;
		});
	}

	$("#submitBtn").on("click", function(event) {

		event.preventDefault();

		query = $("#formGroup").val().trim();
		startYear = $("#startYear").val().trim();
		endYear = $("#endYear").val().trim();
		numResults = $("#numRecords option:selected").val().trim();

		console.log(numResults);

		var newURL = baseURL + '?' + $.param({
		  "api_key": "de0ba28506cb461fa1eb236d6d03c3e2",
		  "q": query,
		});

		if (parseInt(startYear)) {
				startYear += "0101";
				newURL = newURL + "&begin_date=" + startYear;
		}
		if (parseInt(endYear)) {
				endYear += "0101";
				newURL = newURL + "&end_date=" + endYear;
		}

		runQuery(numResults, newURL);

		


	})



});