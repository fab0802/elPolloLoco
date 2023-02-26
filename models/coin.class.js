"use strict";

class Coin extends MovableObject {
  x = 10;
  y = 100;
  width = 150;
  height = 150;
  images_walking = ["img/8_coin/coin_1.png"];

  constructor() {
    super();
    this.loadImage(this.images_walking[0]);
    this.loadImages(this.images_walking);

    this.x = 120 + Math.random() * (720 * 5);

    this.animate();
  }

  animate() {
    // this.moveLeft();

    setInterval(() => {
      this.playAnimation(this.images_walking);
    }, 100);
  }
}
