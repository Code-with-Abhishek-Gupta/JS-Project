// var elem1 = document.querySelector("#elem1");
// var elemImage = document.querySelector("#elem1 img")


// elem1.addEventListener('mousemove', function(dets) {
//     elemImage.style.left = dets.x + "px";
//     elemImage.style.top = dets.y + "px";
// })

// elem1.addEventListener('mouseenter', function (dets) {
//     elemImage.style.opacity = 1;

// })


// elem1.addEventListener('mouseleave', function (dets) {
//     elemImage.style.opacity = 0;

// })



var elem = document.querySelectorAll(".elem");
var elemImage = document.querySelectorAll(".elem img");

elem.forEach(function (val) {
    // console.log(val)




    // val.addEventListener('mousemove', function(dets) {
    //     elemImage.style.left = dets.x + "px";
    //     elemImage.style.top = dets.y + "px";
    // })

    val.addEventListener('mouseenter', function (dets) {
        console.log("enterenter")

        val.childNodes[3].style.opacity = 1;
        // console.log(val.childNodes[3])
      
        val.style.backgroundColor = "red";

    })

    val.addEventListener('mousemove', function (dets) {


        val.childNodes[3].style.left = dets.x + "px";
       
      



    })

    val.addEventListener('mouseleave', function (dets) {
        // console.log("enterleave")
        val.style.backgroundColor = "transparent";
        val.childNodes[3].style.opacity = 0;
     
    })




})