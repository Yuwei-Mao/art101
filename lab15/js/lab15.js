/*
 * Author: Mengya Qiu and Yuwei Mao
 * Created: 2 March 2021
 * License: Public Domain
 */

$("#activate").click(function(){
  // Using the core $.ajax() method
  var t = $("#in1").val();

    $.ajax({
      // The URL for the request (from the api docs)
      url: "https://en.wikipedia.org/api/rest_v1/page/summary/" + t.replace(" ","_") + "?redirect=true",
      // The data to send (will be converted to a query string)
      data: {},
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
          // do stuff
          if (data.extract_html) {
            $("#output").html(data.extract_html);
            if ($("#in2").prop("checked")) {
              $("#output").html(data.extract_html + "<img src='" + data.thumbnail.source+"'>");
            }
          }else{$("#output").html("<p>Sorry, we cannot find <b>" + t + "</b>.");}
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          $("#output").html("<p>Sorry, we cannot find <b>" + t + "</b>.");
          console.log("Error:", textStatus, errorThrown);
      }
  })



})
$("#activate2").click(function(){
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://api.nasa.gov/planetary/apod?api_key=pWUTrBdxNBUsfIPAxm47daewwrC7HH7H8O3LmZEw",
    data: {},
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        $("#nasa").html("<img class='img2' src='" + data.url+"'>");

    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        $("#output").html("<p>Sorry, we cannot find.");
        console.log("Error:", textStatus, errorThrown);
    }
})
})
