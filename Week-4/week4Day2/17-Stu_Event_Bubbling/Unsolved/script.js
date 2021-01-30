var carouseBox = document.querySelector(".carousel-box");
var nextEl = document.querySelector(".next");
var previousEl = document.querySelector(".previous");
var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAiUvojtj1MzpVUEMpo9Th0xvWJBikiTEHA&usqp=CAU", "https://pbs.twimg.com/media/EbXxoy_U8AARw3a.jpg", "https://cdn.mos.cms.futurecdn.net/XiwuK9E79jwF4HAVqr26m9-1200-80.jpg"]

function nextimage() {
    nextEl.addEventListener("click", function() {
        for (i= 0; i < images.length; i++); 
         return nextimage();   
    })
}