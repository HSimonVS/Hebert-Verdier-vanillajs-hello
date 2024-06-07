/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let excuse = document.getElementById("excuse");
  excuse.innerHTML = excusaAleatoria();
  console.log("Hello Rigo from the console!");
};

function excusaAleatoria() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let quien = who[Math.floor(Math.random() * 4)];
  let accion = action[Math.floor(Math.random() * 4)];
  let que = what[Math.floor(Math.random() * 3)];
  let cuando = when[Math.floor(Math.random() * 5)];

  return quien + " " + accion + " " + que + " " + cuando;
}
