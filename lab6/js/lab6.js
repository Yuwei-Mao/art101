/*
 * Author: Mengya Qiu and Yuwei Mao
 * Created: 31 January 2021
 * License: Public Domain
 */

// Define Variables
var myTransport = ["BMW 523Li", "bus", "bike", "Uber", "rides from my friends"];

var myMainRide = {
  make : "BMW",
  model : "523Li",
  color : "Brown",
  year : 2008,
  ownIt : true,
  age : function() {
    return 2021 - age;
 	}
};

// Calulate


// Output
document.writeln("Ways of transportation I use: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
