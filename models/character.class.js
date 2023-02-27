"use strict";

class Character extends MovableObject {
  x = 50;
  y = 0;
  width = 150;
  height = 300;
  speed = 10;
  images_walking = [
    "./img/2_character_pepe/2_walk/W-22.png",
    "./img/2_character_pepe/2_walk/W-23.png",
    "./img/2_character_pepe/2_walk/W-24.png",
    "./img/2_character_pepe/2_walk/W-25.png",
    "./img/2_character_pepe/2_walk/W-26.png",
    "./img/2_character_pepe/2_walk/W-21.png",
  ];
  walking_sound = new Audio("./audio/running.mp3");
  images_jumping = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];
  images_hurt = [
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png",
  ];
  images_dead = [
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png",
  ];
  // world;

  constructor() {
    super();
    this.loadImage("./img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.images_walking);
    this.loadImages(this.images_jumping);
    this.loadImages(this.images_hurt);
    this.loadImages(this.images_dead);

    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walking_sound.pause();

      if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        this.walking_sound.play();
      }

      if (this.world.keyboard.left && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
        this.walking_sound.play();
      }

      if (
        (this.world.keyboard.up || this.world.keyboard.space) &&
        !this.isAboveGround()
      ) {
        this.jump();
      }

      this.world.camera_x = -this.x + 100;
    }, 1);

    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.images_dead);
      } else if (this.isHurt()) {
        this.playAnimation(this.images_hurt);
      } else if (this.isAboveGround()) {
        this.playAnimation(this.images_jumping);
      } else {
        if (this.world.keyboard.right || this.world.keyboard.left) {
          this.playAnimation(this.images_walking);
        }
      }
    }, 50);
  }
}
