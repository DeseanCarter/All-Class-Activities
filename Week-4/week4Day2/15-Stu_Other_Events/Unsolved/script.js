var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");


function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

function keydown(event) {
  let keyPress = event.key;
  let keyCode = event.code;
  document.querySelector("#key").textContent = keyPress;
  document.querySelector("#code").textContent = "KEYDOWN Event";
}

functionKeyuo(e) {
  document.querySelector("#status").innerHTML = "KEYUP Event " + e.keyCode;
}

function click(event) {
  let target = event.target.textContent;
  let x = event
}