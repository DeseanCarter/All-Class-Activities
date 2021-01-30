// Create your HTML Page via DOM Methods here!
let head = document.createElement("h1");
head.textContent = "Header One"
head.setAttribute("style", "color: green")
head.setAttribute("class", "delicious")
console.log(head)
document.body.appendChild(head)

let head2 = document.createElement("h2");
head2.textContent = "Yall Boi Look Yah!"
document.body.appendChild(head2)
let imgDiv = document.createElement("div")
imgDiv.setAttribute("class", "yummy")
console.log(imgDiv)
//let img = createElement("IMG")
let imgCaption = document.createElement("p");
imgCaption.textContent = "testing out practice practice"
document.body.appendChild(imgCaption)





let create = document.createElement