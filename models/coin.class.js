"use strict";

class Coin extends MovableObject {
  y = 100;
  width = 350;
  height = 350;
  images_walking = ["img/8_coin/coin_1.png"];

  constructor() {
    super();
    this.loadImage(this.images_walking[0]);
    this.loadImages(this.images_walking);

    this.x = 720;
    // this.speed = 0.15 + Math.random() * 0.5;

    this.animate();
  }

  animate() {
    // this.moveLeft();

    setInterval(() => {
      this.playAnimation(this.images_walking);
    }, 100);
  }
}
