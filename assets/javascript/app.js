var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=30463eb4587142bb8b7c5776de8e1cf3&q=monkeys";

$.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
      console.log(response);

     // $("#movie-view").html(JSON.stringify(response));

  });