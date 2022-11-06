function Body (x, y, z) {
    
    this.pos = createVector(x, y, z);
    this.vel = createVector(0, 0, 0);
    this.scale = random(4, 6);
    this.speed = 200 * (2 / this.scale);
    this.color = presetPurples[floor(random(0, presetPurples.length))];

    mouseVector = createVector(0, 0, universalZ);

}

Body.prototype.update = function () {

    if (mousing) { mouseVector = createVector(mouseX - WIDTH / 2, mouseY - HEIGHT / 2, universalZ); }

    else { mouseVector = createVector(0, 0, universalZ); }

    mouseVector.sub(this.pos);
    mouseVector.normalize();
    mouseVector.mult(this.speed);
    this.vel.lerp(mouseVector, 0.001);

    var seperation = createVector(0, 0, 0);
    var seperationCount = 0;

    bodies.forEach(body => {

        if (body != this) {

            var distance = p5.Vector.dist(this.pos, body.pos);

            if (distance < 25 * this.scale) {

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

    this.vel.lerp(seperation, 0.01);

    this.pos.add(this.vel);

}

Body.prototype.render = function () {

    push();

    translate(this.pos.x, this.pos.y, this.pos.z);

    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    fill(this.color);
    noStroke();
    scale(this.scale);
    // texture(overlayImage);
    model(bodyModel);

    pop();

}