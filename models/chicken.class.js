"use strict";

class Chicken extends MovableObject {
  y = 345;
  width = 80;
  height = 80;
  images_walking = [
    "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  constructor() {
    super();
    this.loadImage(this.images_walking[0]);
    this.loadImages(this.images_walking);

    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.5;

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.images_walking);
    }, 100);
  }
}
