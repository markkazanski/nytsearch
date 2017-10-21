var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=30463eb4587142bb8b7c5776de8e1cf3&q=monkeys";

var test = {};

$.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
      console.log(response);
        test = response;

        for( var i =0; i < response.response.docs.length; i++ ){
            console.log(response.response.docs[i].headline.main + "" + response.response.docs[i].byline.original);
        }

     // $("#movie-view").html(JSON.stringify(response));

  });