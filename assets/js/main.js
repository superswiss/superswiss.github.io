var soundList = [
  "Ape.wav",
  "Elephant.mp3",
  "Frog.mp3",
  "jungle beat.mp3",
  "Lion.mp3",
  "Snake.mp3"
];
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function playSound(num) {
  document.getElementById("sound").src = "audio/"+ soundList[num];
  document.getElementById("sound").play();
}