/*
 * Author: Mengya Qiu and Yuwei Mao
 * Created: 2 February 2021
 * License: Public Domain
 */
//Define Variables

// Define functions
// userNameSorter - a function that sort the letter
// in the name.
function userNameSorter(userName) {
  //split the name into array
  var nameArray = userName.split('');
  //sort the array
  var sortedNameArray = nameArray.sort();
  //remake the array into string
  var newUserName = sortedNameArray.join('');
  //return the sorted name
  return newUserName;
}

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
  //1.join with space  2.use split(" ") to remove space 3. join without space
  var newUserName = sortedNameArray.join("").split(" ").join("");
  //return the sorted name
  return newUserName;
}
// shuffleUserName (for Task X: bonus!) - a function that shuffle the username,
// and capitalize the name.
function shuffleUserName(userName) {
  //split the name into array
  var nameArray = userName.split('');
  var shuffledArray = nameArray.sort(function() {return .5 - Math.random();});
  var newUserName = shuffledArray.join("").split(" ").join("").toLowerCase();
  var n = Math.round(newUserName.length * Math.random());
  var p1 = newUserName.substr(0,n);
  var p2 = newUserName.substring(n);
  var p1a = p1.split('');
  p1a[0] = p1a[0].toUpperCase();
  var p2a = p2.split('');
  p2a[0] = p2a[0].toUpperCase();

  return p1a.join("") + " " + p2a.join("");
}


// input userName
var userName = window.prompt("Hi, could you please enter your name: ", "Steve Jobs");
// Calulate

// Output

document.writeln("First Name:", userNameSorter(userName), "</br>");
document.writeln("Middle Name:", superUserNameSorter(userName), "</br>");
document.writeln("Last name:", shuffleUserName(userName), "</br>");

document.writeln("Please use this translated name in our planet.", "</br>")
