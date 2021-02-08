/*
 * Author: Mengya Qiu and Yuwei Mao
 * Created: 7 February 2021
 * License: Public Domain
 */

//Functions

function firstThing(test){
  console.log(test + ": Hi, here is the first thing.<br>");
}

function secondThing(test){
  console.log(test + ": Hi, here is the second thing.<br>");
}

function thirdThing(test){
  console.log(test + ": Hi, here is the third thing.<br>");
}

//Test 1
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//Test 2 - in order
setTimeout(function() {
  firstThing("TEST 2");
}, 0);
setTimeout(function() {
  secondThing("TEST 2");
}, 0);
setTimeout(function() {
  thirdThing("TEST 2");
}, 0);

//Test 3 - order is 2, 3, 1.
setTimeout(function() {
  firstThing("TEST 3");
}, 3000);
setTimeout(function() {
  secondThing("TEST 3");
}, 1000);
setTimeout(function() {
  thirdThing("TEST 3");
}, 2000);
