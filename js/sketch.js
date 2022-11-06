function preload() {
  
  defaultFont = loadFont("assets/fonts/default.ttf");
  bodyModel = loadModel("assets/models/body.obj");
  overlayImage = loadImage("assets/images/overlay.png");

}

function setup () {

  canvas = createCanvas(WIDTH, HEIGHT, WEBGL);

  for (var b = 0; b < 15; b++) { bodies.push(new Body(random(-WIDTH, WIDTH), random(-HEIGHT, HEIGHT), universalZ + random(-400, 400))); }

  document.getElementById("defaultCanvas0").addEventListener("mouseenter", function() { mousing = true; });
  document.getElementById("defaultCanvas0").addEventListener("mouseout", function() { mousing = false; });

}

function draw () {

  background("#120f0f");

  lighting();

  bodies.forEach(body => { body.update(); body.render(); });

}

function lighting () {

  ambientLight(85);
  directionalLight(255, 255, 255, 0, 0, -1);
  // let dirX = (mouseX / WIDTH - 0.5) * 2;
  // let dirY = (mouseY / HEIGHT - 0.5) * 2;
  // directionalLight(255, 255, 255, -dirX, -dirY, -1);

}