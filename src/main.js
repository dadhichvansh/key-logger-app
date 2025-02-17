"use strict";

import "./style.css";

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");

// handle key down event
const handleKeyDown = (e) => {
  logDiv.innerHTML = `Key ' ${e.key} ' pressed down.`;
  stateDiv.innerHTML = `State: ' ${e.type} '.`;
};

// handle key up event
const handleKeyUp = (e) => {
  logDiv.innerHTML = `Key ' ${e.key} ' is released.`;
  stateDiv.innerHTML = `State: ' ${e.type} '.`;
};

// start logging if clicked on start button
startBtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
});

// stop logging if clicked on stop button
stopBtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handleKeyDown);
  document.removeEventListener("keyup", handleKeyUp);

  logDiv.innerHTML = "";
  stateDiv.innerHTML = "";
});
