function Body (x, y, z, type) {
    
    this.pos = createVector(x, y, z);
    this.vel = createVector(0, 0, 0);
    this.model = type;

    if (ELECTRON_MODE) { this.scale = random(1.75, 2); } else { this.scale = random(2, 5); }

    this.speed = 150 * (2 / this.scale);
    this.angularVel = random(0.005, 0.025);
    this.color = presetPurples[floor(random(0, presetPurples.length))];

    mouseVector = createVector(window.innerWidth / 2, window.innerHeight / 2, universalZ);

    mouseVector.x = window.innerWidth / 2;
    mouseVector.y = window.innerHeight / 2;
    mouseVector.z = universalZ;

}

Body.prototype.update = function () {

    if (mousing) { mouseVector = createVector(mouseX - (window.innerWidth / 2), mouseY - (window.innerHeight / 2), universalZ); }

    else { mouseVector = createVector(sin(frameCount / 200) * (window.innerWidth / 4), 0, universalZ); }

    mouseVector.sub(this.pos);
    mouseVector.normalize();
    mouseVector.mult(this.speed);
    this.vel.lerp(mouseVector, GRAVITY);

    var seperation = createVector(0, 0, 0);
    var seperationCount = 0;

    bodies.forEach(body => {

        if (body != this) {

            var distance = p5.Vector.dist(this.pos, body.pos);

            if (distance < 20 * this.scale) {

                var difference = p5.Vector.sub(this.pos, body.pos);

                difference.normalize();
                difference.div(distance);
                seperation.add(difference);
                seperationCount++;

            }

        }

    });

    if (seperationCount > 0) { seperation.div(seperationCount); }

    seperation.normalize();

    seperation.mult(this.speed);

    this.vel.lerp(seperation, ELASTICITY_ISH);

    this.pos.add(this.vel);

}

Body.prototype.render = function () {

    push();

    translate(this.pos.x, this.pos.y, this.pos.z);
    rotateX(frameCount * this.angularVel);
    rotateY(frameCount * this.angularVel);
    scale(this.scale);
    noFill();
    stroke(this.color);
    strokeWeight(0.3 * sqrt(this.scale));
    model(this.model);

    pop();

}