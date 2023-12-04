

let playEl = document.getElementById("Play");

function play() {

    document.querySelector("#video-container video").addEventListener("mousemove", function (dets) {
        // playEl.style.left = dets.x + "px";
        // playEl.style.top = dets.y + "px";


        gsap.to(playEl, {
            left: dets.x - 50,
            top: dets.y - 20,

        })






    })







    document.querySelector("#video-container video").addEventListener("mouseleave", function () {
        playEl.style.opacity = 0;


    })



    document.querySelector("#video-container video").addEventListener('mouseenter', function () {

        playEl.style.opacity = 1;
        playEl.style.scale = 1;

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