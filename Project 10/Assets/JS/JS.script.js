

let playEl = document.getElementById("Play");

function play() {

    document.querySelector("#video-container video").addEventListener("mousemove", function (dets) {
        // playEl.style.left = dets.x + "px";
        // playEl.style.top = dets.y + "px";
        // cursor.style.opacity = 0;



        gsap.to(playEl, {
            left: dets.x,
            top: dets.y,


        })






    })







    document.querySelector("#video-container video").addEventListener("mouseleave", function () {
        playEl.style.opacity = 0;
        cursor.style.display = "block";


    })



    document.querySelector("#video-container video").addEventListener('mouseenter', function () {

        playEl.style.opacity = 1;
        playEl.style.scale = 1;
        cursor.style.display = "none";

    })



}


play()




function loding() {


    var timeline = gsap.timeline()
    timeline.from('#page1 h2', {
        y: 35,
        duration: 0.5,
        opacity: 0,
        delay: 0.5,
        stagger: 0.8,


    })

    timeline.from('#video-container', {
        y: 35,
        duration: 0.5,
        opacity: 0,
        delay: 1.2,



    })

}


loding()






let product = document.getElementById("product");
console.log(product);
let cursor = document.getElementById("cursor");
console.log(cursor);

document.addEventListener('mousemove', function (dets) {
    gsap.to(cursor, {
        left: dets.x,
        top: dets.y,

    })
})





const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});


var a = document.querySelectorAll('.box img')


a.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        gsap.to(cursor, {
            transform: 'translate(-50% , -50%) scale(1)'
        })

    })


    elem.addEventListener('mouseleave', function () {
        gsap.to(cursor, {
            transform: 'translate(-50% , -50%) scale(0)'
        })

    })

})