let icon = ["😭", "😥", "😒", "😏", "😊", "😋", "😫"];
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let bg;

let currentIndex = 0;
let lastFrame = 0;

let weekCount = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);

  bg = loadImage('image/background.jpg');
}


function draw() {
  background(bg);

  text("Week: " + weekCount, width/2, height/5.5);

  textSize(250);
  text(icon[currentIndex], width/2, height/1.7);

  if (frameCount - lastFrame >= 60) {
    currentIndex = (currentIndex + 1) % icon.length;
    lastFrame = frameCount;

    if(currentIndex === 0) {
      
      weekCount++;
    }
  }

  fill(0);
  textSize(90);
  text(days[currentIndex], width/2, height/3.5);

  if (frameCount - lastFrame >= 60) {
    currentIndex = (currentIndex + 1) % days.length;
    lastFrame = frameCount;
}

  fill(150);
  textSize(30);
  text("How I feel during the week with face emojis", width/2, height/1.2);

}