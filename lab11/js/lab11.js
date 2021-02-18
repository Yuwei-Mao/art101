/*
 * Author: Mengya Qiu and Yuwei Mao
 * Created: 16 February 2021
 * License: Public Domain
 */

//Create the button
b1 = $("<button id='button1'>");
//Give it a text label
b1.html("Click the Challenge");
//Add it to the section
$("#Challenge").append(b1);

//Create the button
b2 = $("<button id='button2'>");
//Give it a text label
b2.html("Click the Problems");
//Add it to the section
$("#Problems").append(b2);

//Create the button
b3 = $("<button id='button3'>");
//Give it a text label
b3.html("Click the Results");
//Add it to the section
$("#Results").append(b3);

//Add a click event to each button
b1.click(function(){
  //Find the challenge section the button is in
  //Toggle a class special within the <div> of the section
  $("#Challenge").toggleClass("special");
});

//Add a click event to each button
b2.click(function(){
  //Find the problems section the button is in
  //Toggle a class special within the <div> of the section
  $("#Problems").toggleClass("special");
});

//Add a click event to each button
b3.click(function(){
  //Find the results section the button is in
  //Toggle a class special within the <div> of the section
  $("#Results").toggleClass("special");
});

//Task X: Bonus!
// Create and add buttons
b4 = $("<button id='button4'>");
b5 = $("<button id='button5'>");
b4.html("Click Me!");
b5.html("Click Me!");
$("#changes").append(b4);
$("#changes").append(b5);

//add a click event to each button
b4.click(function(){
  //Toggle a class ccRed to change the color
  b5.toggleClass("ccRed");
});

b5.click(function(){
  //Toggle a class ccBlue to change the color
  b4.toggleClass("ccBlue");
});
