var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var bodyEl = document.createElement("div");
var millisecondsPerWord = prompt("How many milliseconds between words would you like?")

function prepareRead() {
  var timeLeft = 5;
  // Create the countdown timer.
  var timerInterval = setInterval(function() {
    timerInterval.textContent = timeleft + " seconds remaining";
    timeLeft--;

    if(timeleft === 0) {
      timeEl.textContent = "";
      speedRead();
      clearInterval(timerInterval);
    }

  }, 1000);

}

function speedRead() {
  // Print words to the screen one at a time.
  mainEl.append(bodyEl);

  var poem
}
