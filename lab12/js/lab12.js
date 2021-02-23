/*
 * Author: Mengya Qiu and Yuwei Mao
 * Created: 21 February 2021
 * License: Public Domain
 */

//Function Part
//sortingHat return the house name depend on the mod (length of str % 4).
function sortingHat(str) {
  var len = str.length;
  var num = 0;
  for (var i=0;i<len;i++){
    num = num + str.charCodeAt(i);
  }
  var descriptList = ["which values courage, bravery, nerve, and chivalry.",
  "which values intelligence, learning, wisdom and wit.",
  "which values ambition, cunning, leadership, and resourcefulness.",
  "which values hard work, patience, justice, and loyalty.",
  "which values modesty, knowledge, and honesty."
];
  //new code in refactoring and easy to add more
  var houseList = ["Gryffindor","Ravenclaw","Slytherin","Hufflepuff","Batinlaansh"];
  var mod = num % houseList.length;
  return houseList[mod] + ", " + descriptList[mod];
  //orignal code in conditionals
  //if (mod == 0) { return "Gryffindor"; }
  //else if (mod == 1) { return "Ravenclaw"; }
  //else if (mod == 2) { return "Slytherin"; }
  //else if (mod == 3) { return "Hufflepuff"; }
}

//Main Part
var myButton = document.getElementById("button");
myButton.addEventListener("click",function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
