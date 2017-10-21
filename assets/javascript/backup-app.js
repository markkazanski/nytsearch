var queryURL = "a
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