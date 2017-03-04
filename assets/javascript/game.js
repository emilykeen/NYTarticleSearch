$(document).ready(function() {

// When user clicks 
$("#submitBtn").on("click", function() {

	var query = $("#formGroup").val();
	var page = $("#numRecords").val();
	var beginDate = $("#startYear").val();
	var endDate = $("#endYear").val();

	var url = "http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api_key': "de0ba28506cb461fa1eb236d6d03c3e2",
	  'q': query,
	  'page': page,
	  'begin_date': beginDate,
	  'end_date': endDate
	});

	console.log(url);

	$.ajax({
	  url: url,
	  method: 'GET'
	}).done(function(result) {

		console.log(result);

	}).fail(function(err) {

		  throw err;
	});


})



});