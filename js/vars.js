// canvas
var canvas;
const SCALE = 1.6;
const VARIABLE_SCALING = true;
const WIDTH = window.innerWidth, HEIGHT = window.innerHeight;

function limit (value, min, max) { return Math.min(Math.max(value, min), max); }

window.addEventListener("resize", function (ignored) {

  if (VARIABLE_SCALING) { resizeCanvas(Math.floor(limit(window.innerWidth / SCALE, 1000, WIDTH)), Math.floor(limit(window.innerWidth / SCALE, 580, HEIGHT))); }

}, true);

// site
var title = "Purple Bodies";
var version = "version 0.1.3";

window.onload = function () { document.title = title; document.getElementById("title").innerHTML = title + "  <span style=\"font-size: 30px;\"> " + version + "<\span>"; }

function createInputAndButton (buttonMessage, createMessage) {

  var input = document.createElement("input");
  input.type = "text";
  input.id = "inputField";
  input.className = "field";

  document.getElementById("main").appendChild(input);

  var button = document.createElement("button");
  button.className = "field_button";
  button.id = "inputButton";
  button.textContent = buttonMessage;

  document.getElementById("main").appendChild(button);

  document.getElementById(button.id).addEventListener("click", function () { inputButtonClicked(); });

  if (createMessage) {

    var message = document.createElement("p");
    message.id = "result";
    message.className = "message";
    message.innerHTML = createMessage;

    document.getElementById("main").appendChild(message);

  }

  return [input, button];

}

function createCornerButton (buttonText) {

  var button = document.createElement("button");
  button.className = "corner_button";
  button.id = "cornerButton";
  button.textContent = buttonText;

  document.getElementById("main").appendChild(button);

  document.getElementById(button.id).addEventListener("click", function () { cornerButtonClicked(); });

  return button;

}

function inputButtonClicked () {

  var input = document.getElementById("inputField").value;
  var message = document.getElementById("result");

  // start here...

}

function cornerButtonClicked () {

  // start here...

}

// colors
const BACKGROUND_COLOR = getComputedStyle(document.querySelector(":root")).getPropertyValue("--background-color");
const ACCENT_1 = getComputedStyle(document.querySelector(":root")).getPropertyValue("--accent-1");
const ACCENT_2 = getComputedStyle(document.querySelector(":root")).getPropertyValue("--accent-2");

// other vars
var bodies = [];
var universalZ = 0;
var mousing = false;

var presetPurples = [

  "#732e8f",
  "#722391",
  "#870096",
  "#aa30b8",
  "#700a7d",
  "#9d51a6"

]