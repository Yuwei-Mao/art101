/*
 * Author: Mengya Qiu and Yuwei Mao
 * Created: 9 February 2021
 * License: Public Domain
 */

//Use getElementById() and assign it to a variable outputEl
var outputEl = document.getElementById("output");
//Create a new element with document.createElement("p")
//and assign it to a variable new1El
var new1El = document.createElement("p");
//Change the html attribute of new1El to say something new
new1El.innerHTML = "JavaScript is a good language.";
//Create another new element and assign it to a variable new2El
var new2El = document.createElement("p");
//Change the html attribute of new2El to say something else.
new2El.innerHTML = "Python is great too.";
//Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
//Change the css attributes of at least two elements of The page
document.getElementById("chall").style.color = '#FF1493';;
document.getElementById("res").style.color = '#FF1493';
document.getElementById("prob").style.fontSize = "15pt";
new2El.style.marginLeft = "60px";

//Task X: Bonus!

var newPOne= document.createElement("p");
newPOne.innerHTML = "Here is Paragraph one."
var newPTwo= document.createElement("p");
newPTwo.innerHTML = "Here is Paragraph two."
//insertBefore() function can add a new element to the top of an element
outputEl.appendChild(newPOne);
outputEl.insertBefore(newPTwo,newPOne);

//experiment with some of the DOM document methods and attributes
var newPThree= document.createElement("p");
//methods hasFocus() indicate whether the document has focus
newPThree.innerHTML = "Has Focus:" + document.hasFocus();
outputEl.appendChild(newPThree);
//attribute URL return the URL of this HTML document
var newPFour= document.createElement("p");
newPFour.innerHTML = "URL:" +document.URL;
outputEl.appendChild(newPFour);

//experiment with some of the other DOM elements
var newP5= document.createElement("p");
//outputEl.children returns a collection of an element's child element
newP5.innerHTML = outputEl.children;
outputEl.appendChild(newP5);
//removeChild() removes a child node from an element
outputEl.removeChild(newP5);
outputEl.appendChild(newP5);
