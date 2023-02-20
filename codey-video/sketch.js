let video;
let isVolumeOn = true;
let videoPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/codeyVlog.mp4';

function preload(){
  video = createVideo(videoPath);
}

function setup() {
  createCanvas(480, 270);
  //Creates a background with a play symbol
  background(0);
  triangle(215, 110, 275, 140, 215, 170);
  //Hides the original HTML video element
  video.hide();
}

function draw() {
  image(video, 0, 0, 480, 270);
}

function pressPlayButton() {
  //TODO: Play video here:
  video.play();
}

function pressPauseButton() {
  //TODO: Pause video here:
  video.pause();
}

function pressToggleVolumeButton() {
  if (isVolumeOn) {
    //TODO: Turn volume off here:
    video.volume(0);
  } else {
    //TODO: Turn volume on here:
    video.volume(1);
  }
  isVolumeOn = !isVolumeOn;
}
