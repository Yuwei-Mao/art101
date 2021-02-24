/*
 * Author: Mengya Qiu and Yuwei Mao
 * Created: 23 February 2021
 * License: Public Domain
 */

//Function Part
//FlzzBuzz return
function FizzBuzz(max,numList,wordList){
  var printStrAll = "";

  for (var i=0; i<max; i++){
    var printStr = "";
    var w = false;
    for (var j=0; j<numList.length; j++){
      if (i % numList[j] ==0){
        printStr += wordList[j];
        w = true;
      }
    }
    if (w == true){ printStrAll = printStrAll + i + " - " + printStr + "!<br>";}
    else { printStrAll = printStrAll + i + "<br>";}
  }
  return printStrAll;
}

//Main Part
$("#b1").click(function (){
  var numList = [0,0,0,0,0];
  var wordList = ["","","","",""];

  numList[0] = $("#n1").val();
  numList[1] = $("#n2").val();
  numList[2] = $("#n3").val();
  numList[3] = $("#n4").val();
  numList[4] = $("#n5").val();

  wordList[0] = $("#w1").val();
  wordList[1] = $("#w2").val();
  wordList[2] = $("#w3").val();
  wordList[3] = $("#w4").val();
  wordList[4] = $("#w5").val();

  maxN = $("#maxx").val();

  $("#output").html(FizzBuzz(maxN,numList,wordList));
})
