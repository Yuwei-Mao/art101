/*
 * Author: Mengya Qiu and Yuwei Mao
 * Created: 13 February 2021
 * License: Public Domain
 */

// Borrow from lab7.js
// superUserNameSorter (for Task X: bonus!) - a funtion that sort the letter
// lowercase and uppercase together and ignore spaces.
function superUserNameSorter(userName) {
  //split the name into array
  var nameArray = userName.split('');
  //sort the array lowercase and uppercase together.
  //we changed the compare function in sort() which compare them in upper case.
  var sortedNameArray = nameArray.sort(function(a, b){
    return a.toUpperCase().localeCompare(b.toUpperCase());})
  //remake the array into string without space
  //1.join with space  2.use split(" ") to remove space 3. join again without space
  var newUserName = sortedNameArray.join("").split(" ").join("");
  //return the sorted name
  return newUserName;
}
// shuffleUserName (for Task X: bonus!) - a function that shuffle the username,
// and capitalize the name. (create anagram)
function shuffleUserName(userName) {
  // split the name into array
  var nameArray = userName.split('');
  // shuffle the array by sort in a random function.
  var shuffledArray = nameArray.sort(function() {return .5 - Math.random();});
  var newUserName = shuffledArray.join("").split(" ").join("").toLowerCase();
  // get a number between 0 to lenth of newUserName and split by this number into 2 parts
  var n = Math.round(newUserName.length * Math.random());
  var p1 = newUserName.substr(0,n);
  var p2 = newUserName.substring(n);
  // make each part's first letter uppercase.
  var p1a = p1.split('');
  p1a[0] = p1a[0].toUpperCase();
  var p2a = p2.split('');
  p2a[0] = p2a[0].toUpperCase();

  return p1a.join("") + " " + p2a.join("");
}

//Attach an event listener to our button
var button = document.getElementById('my-button');
button.addEventListener('click', function() {
    var inputValue = document.getElementById('user-name').value;
    var outputDiv = document.getElementById('output');
    var para1 = document.createElement("p");
    para1.innerHTML = "Sort: " + superUserNameSorter(inputValue);
    outputDiv.appendChild(para1);

    var para2 = document.createElement("p");
    para2.innerHTML = "Anagram: " + shuffleUserName(inputValue);
    outputDiv.appendChild(para2);

});

// For Task X2: more input fields
var button1 = document.getElementById('button1');
button1.addEventListener('click', function() {
    var inputValue = document.getElementById('name1').value;
    var outputDiv = document.getElementById('multiOut');
    var para1 = document.createElement("p");
    para1.innerHTML = "Sort 1: " + superUserNameSorter(inputValue);
    outputDiv.appendChild(para1);

    var para2 = document.createElement("p");
    para2.innerHTML = "Anagram 1: " + shuffleUserName(inputValue);
    outputDiv.appendChild(para2);

});

var button2 = document.getElementById('button2');
button2.addEventListener('click', function() {
    var inputValue = document.getElementById('name2').value;
    var outputDiv = document.getElementById('multiOut');
    var para1 = document.createElement("p");
    para1.innerHTML = "Sort 2: " + superUserNameSorter(inputValue);
    outputDiv.appendChild(para1);

    var para2 = document.createElement("p");
    para2.innerHTML = "Anagram 2: " + shuffleUserName(inputValue);
    outputDiv.appendChild(para2);

});

var button3 = document.getElementById('button3');
button3.addEventListener('click', function() {
    var inputValue = document.getElementById('name3').value;
    var outputDiv = document.getElementById('multiOut');
    var para1 = document.createElement("p");
    para1.innerHTML = "Sort 3: " + superUserNameSorter(inputValue);
    outputDiv.appendChild(para1);

    var para2 = document.createElement("p");
    para2.innerHTML = "Anagram 3: " + shuffleUserName(inputValue);
    outputDiv.appendChild(para2);

});
