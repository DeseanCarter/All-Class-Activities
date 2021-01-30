var count = 0;
var incrementEL = document.querySelector("#increment");
var decrementEL = document.querySelector("#decrement");
var countEl = document.querySelector("#count");


function setCounterText() {
    countEl.textContent = count;
}

incrementEL.addEventListener("click", function() {
    count++;
    setCounterText();
});

decrementEL.addEventListener("click", function() {
    if(count > 0) {
        count--;
        setCounterText();
    }
});