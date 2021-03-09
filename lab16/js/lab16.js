 /*
 * Author: Mengya Qiu and Yuwei Mao
 * Created: 7 March 2021
 * License: Public Domain
 */

 // Using the core $.ajax() method

var comicObj;
var maxNum = 0;
var currentNum = 0;
$.ajax({
     // The URL for the request (from the api docs)
     url: "http://xkcd.com/info.0.json",
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
         comicObj = data;
         //Give the section a title using the comicObj.title key from the object
         $("#output").html("<h3>"+ comicObj.num + ": "+ comicObj.title+"</h3>");
         currentNum = comicObj.num;
         //Create an image tag using the comicObj.img key from the object
         $("#output").append("<img title='"+ comicObj.title +"'src='" + comicObj.img+"' alt='"+comicObj.alt+"'>");
         //Give the image an alt and title attributes using the comicObj.alt key from the object
         $("#output").append("<p> Alt: " + comicObj.alt + "</p>");
         console.log(data);

     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     }
 })

 //Functions
 // getAndPutData() function does the API call and places the image and title, maybe pass the endpoint URL

 function getAndPutData(number){
   $.ajax({
        // The URL for the request (from the api docs)
        url: "http://xkcd.com/"+number+"/info.0.json",
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
            comicObj = data;
            //Give the section a title using the comicObj.title key from the object
            $("#output").html("<h3>"+ comicObj.num + ": "+ comicObj.title+"</h3>");
            currentNum = comicObj.num;
            //Create an image tag using the comicObj.img key from the object
            $("#output").append("<img title='"+ comicObj.title +"'src='" + comicObj.img+"' alt='"+comicObj.alt+"'>");
            //Give the image an alt and title attributes using the comicObj.alt key from the object
            $("#output").append("<p> Alt: " + comicObj.alt + "</p>");
            console.log(data);

        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) {
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    })
 }


$("#prev").click(function(){
  getAndPutData(currentNum-1);
})

$("#next").click(function(){
  getAndPutData(currentNum+1);
})
