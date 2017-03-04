$(document).ready(function() {

// When user clicks 
$("#search-button").on("click", function() {

	var query = $("#formGroup").val();
	var page = $("#numRecords").val();
	var beginDate = $("#startYear").val();
	var endDate = $("#endYear").val();

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json/";
	url += '?' + $.param({
	  'api-key': "de0ba28506cb461fa1eb236d6d03c3e2",
	  'q': query,
	  'page': page,
	  'begin_date': beginDate,
	  'end_date': endDate
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {

		console.log(result);

	}).fail(function(err) {

		  throw err;
	});


})



});