/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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

window.onload = function() {
  //write your code here
  let excuse = document.querySelector("#excuse");
  function genarateExcuse() {
    let randomWho = Math.floor(Math.random() * who.length);
    let randomAct = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);

    excuse.innerHTML =
      who[randomWho] +
      " " +
      action[randomAct] +
      " " +
      what[randomWhat] +
      " " +
      when[randomWhen];
  }
  genarateExcuse();
};
