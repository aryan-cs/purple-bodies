function preload() {
  
  defaultFont = loadFont("assets/fonts/default.ttf");

  for (var m = 0; m < bodyTypes.length; m++) {

    bodyModels.push(loadModel(bodyTypes[m]));

  }

}

function setup () {

  canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);

  for (var b = 0; b < window.innerWidth / 100; b++) {
    
    bodies.push(new Body(random(-window.innerWidth, window.innerWidth), random(-window.innerHeight, window.innerHeight), universalZ + random(-200, 200), bodyModels[b % bodyModels.length]));
  
  }

  document.getElementById("defaultCanvas0").addEventListener("mouseenter", function() { mousing = true; });
  document.getElementById("defaultCanvas0").addEventListener("mouseout", function() { mousing = false; });

}

function draw () {

  background(BACKGROUND_COLOR);
  bodies.forEach(body => { body.update(); body.render(); });

}