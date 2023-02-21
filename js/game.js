"use strict";

let canvas;
let world;
const keyboard = new Keyboard();

function init() {
  canvas = document.querySelector("#canvas");
  world = new World(canvas, keyboard);
}

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    keyboard.left = true;
  }

  if (e.code === "ArrowRight") {
    keyboard.right = true;
  }

  if (e.code === "ArrowUp") {
    keyboard.up = true;
  }

  if (e.code === "Space") {
    keyboard.space = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowLeft") {
    keyboard.left = false;
  }

  if (e.code === "ArrowRight") {
    keyboard.right = false;
  }

  if (e.code === "ArrowUp") {
    keyboard.up = false;
  }

  if (e.code === "Space") {
    keyboard.space = false;
  }
});
