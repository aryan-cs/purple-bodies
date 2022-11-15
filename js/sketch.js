function preload() {
  
  defaultFont = loadFont("assets/fonts/default.ttf");

  for (var m = 0; m < bodyTypes.length; m++) {

    bodyModels.push(loadModel(bodyTypes[m]));

  }

}

function setup () {

  canvas = createCanvas(WIDTH, HEIGHT, WEBGL);

  for (var b = 0; b < WIDTH / 100; b++) {
    
    // bodies.push(new Body(random(-WIDTH, WIDTH), random(-HEIGHT, HEIGHT), universalZ + random(-800, 200), bodyModels[floor(random(0, bodyModels.length))]));
    bodies.push(new Body(random(-WIDTH, WIDTH), random(-HEIGHT, HEIGHT), universalZ + random(-800, 200), bodyModels[b % bodyModels.length]));
  
  }

  document.getElementById("defaultCanvas0").addEventListener("mouseenter", function() { mousing = true; });
  document.getElementById("defaultCanvas0").addEventListener("mouseout", function() { mousing = false; });

}

function draw () {

  background("rgb(18, 18, 18)");

  lighting();

  bodies.forEach(body => { body.update(); body.render(); });

}

function lighting () {

  ambientLight(85);
  directionalLight(255, 255, 255, 0, 0, -1);

}