"use strict";

class Character extends MovableObject {
  x = 50;
  y = 130;
  width = 150;
  height = 300;
  speed = 1;
  images_walking = [
    "./img/2_character_pepe/2_walk/W-22.png",
    "./img/2_character_pepe/2_walk/W-23.png",
    "./img/2_character_pepe/2_walk/W-24.png",
    "./img/2_character_pepe/2_walk/W-25.png",
    "./img/2_character_pepe/2_walk/W-26.png",
    "./img/2_character_pepe/2_walk/W-21.png",
  ];
  world;

  constructor() {
    super();
    this.loadImage("./img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.images_walking);

    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.right) {
        this.x += this.speed;
        this.otherDirection = false;
      }

      if (this.world.keyboard.left) {
        this.x -= this.speed;
        this.otherDirection = true;
      }

      this.world.camera_x = -this.x;
    }, 1);

    setInterval(() => {
      if (this.world.keyboard.right || this.world.keyboard.left) {
        // walk animation
        const i = this.currentImage % this.images_walking.length;
        const path = this.images_walking[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 50);
  }

  jump() {
    console.log("jump");
  }
}
