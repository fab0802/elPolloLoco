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
  walking_sound = new Audio("./audio/running.mp3");

  constructor() {
    super();
    this.loadImage("./img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.images_walking);

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walking_sound.pause();

      if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherDirection = false;
        this.walking_sound.play();
      }

      if (this.world.keyboard.left && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
        this.walking_sound.play();
      }

      this.world.camera_x = -this.x + 100;
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
