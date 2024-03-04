/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let excuseEl = document.getElementById("excuse-el");

var whoRandom = who[Math.floor(Math.random() * who.length)];

var actionRandom = action[Math.floor(Math.random() * action.length)];

var whatRandom = what[Math.floor(Math.random() * what.length)];

var whenRandom = when[Math.floor(Math.random() * when.length)];

function excuseChanger() {
  let excuse =
    whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom;

  excuseEl.textContent = excuse;
}
excuseChanger();
