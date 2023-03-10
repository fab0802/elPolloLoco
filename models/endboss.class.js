"use strict";

class Endboss extends MovableObject {
  y = 100;
  width = 350;
  height = 350;
  images_walking = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  constructor() {
    super();
    this.loadImage(this.images_walking[0]);
    this.loadImages(this.images_walking);

    this.x = 720 * 5;
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
