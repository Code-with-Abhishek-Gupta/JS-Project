var main = document.querySelector("main");
var cursor = document.querySelector('#cursor');
var blur = document.querySelector('#blur');




main.addEventListener('mousemove', (dets) => {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    blur.style.left = dets.x - 40 +"px";
    blur.style.top = dets.y + "px";


})

// cursor.style.backgroundColor = "red";