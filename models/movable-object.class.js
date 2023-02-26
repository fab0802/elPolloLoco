"use strict";

class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 1;
  energy = 100;
  lastHit = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 125;
  }

  isColliding(movableObject) {
    return (
      this.x + this.width > movableObject.x &&
      this.y + this.height > movableObject.y &&
      this.x < movableObject.x &&
      this.y < movableObject.y + movableObject.height
    );
    // (this.x + this.width >= movableObject.x &&
    //   this.x <= movableObject.x + movableObject.width &&
    //   this.y + this.offsetY + this.height >= movableObject.y &&
    //   this.y + this.offsetY <= movableObject.y + movableObject.height &&
    //   movableObject.onCollisionCourse);
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    const timepassed = (new Date().getTime() - this.lastHit) / 1000;
    return timepassed < 1;
  }

  isDead() {
    return this.energy === 0;
  }

  playAnimation(images) {
    const i = this.currentImage % images.length;
    const path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 15;
  }
}
