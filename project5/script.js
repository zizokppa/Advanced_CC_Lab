// script.js
let chatHistory;
let userInput;
let sendButton;
let canvas;

function setup() {
  // Setup p5 canvas
  canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
  noLoop();  // No continuous drawing

  // Setup chat interface
  chatHistory = select('#chat-history');
  userInput = select('#user-input');
  sendButton = select('#send-btn');
  sendButton.mousePressed(handleSend);

  background(255);  // Set background to white
  generateArt();
}

function generateArt() {
  // Randomized art generation
  for (let i = 0; i < 100; i++) {
    stroke(random(255), random(255), random(255));
    strokeWeight(random(5));
    line(random(width), random(height), random(width), random(height));
  }
}

function handleSend() {
  let userText = userInput.value();
  if (userText.trim() !== '') {
    let newMsg = createElement('p', userText);
    chatHistory.child(newMsg);
    userInput.value('');
  }
  generateArt();
}

function draw() {
  // Drawing handled in generateArt
}
