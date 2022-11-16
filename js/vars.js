// canvas
var canvas;
const SCALE = 1.6;
const VARIABLE_SCALING = false;

function limit (value, min, max) { return Math.min(Math.max(value, min), max); }

window.addEventListener("resize", function (ignored) {
    
  resizeCanvas(window.innerWidth, window.innerWidth);

}, true);

// colors
const BACKGROUND_COLOR = getComputedStyle(document.querySelector(":root")).getPropertyValue("--background-color");

// other vars
var bodies = [], bodyModels = [];
var universalZ = 0;
var mousing = false, ELASTICITY_ISH = 0.01, GRAVITY = 0.001;

var presetPurples = [

  "#732e8f",
  "#722391",
  "#870096",
  "#aa30b8",
  "#700a7d",
  "#9d51a6"

];

var bodyTypes = [

  // "assets/models/cone.obj",
  // "assets/models/cube.obj",
  // "assets/models/pyramid.obj",
  "assets/models/rough-sphere.obj",
  // "assets/models/less-smooth-sphere.obj",
  // "assets/models/smooth-sphere.obj",

];

var ELECTRON_MODE = false;

if (ELECTRON_MODE) {

  ELASTICITY_ISH = 0.01;
  GRAVITY = 0.01;

}
