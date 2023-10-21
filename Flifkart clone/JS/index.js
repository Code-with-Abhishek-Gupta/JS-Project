// object 

let category = [
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/4f84f7cf33100b5d.png?q=100",
        title: "Top offers",
        href: "",

    },
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/72ec95ea3c99ee60.png?q=100",
        title: "Mobile & Tablet",
        href: "",

    },

    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0dac5f7442d7fd5f.png?q=100",
        title: "Electronic",
        href: "",

    },
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/436cd6fc952ae1cb.png?q=100",
        title: "TVs & Application",
        href: "",

    },
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/eb336e40e5a1b6ec.png?q=100",
        title: "Fashion",
        href: "",

    },
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/f4f8f26cdeb86ce4.png?q=100",
        title: "Beauty",
        href: "",

    },
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/92b1f08861995c5f.png?q=100",
        title: "Home & Kitchen",
        href: "",

    },

    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/d47b98754854d054.png?q=100",
        title: "Furniture",
        href: "",

    },

    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/898880c3805043b1.png?q=100",
        title: "Grocery",
        href: "",

    },
];



// Array 
// in map method one my one element come 
// console.log("category")
category.map((element) => {
    let image = document.createElement('img');
    image.src = element.img_src;
    let title = document.createElement('span');
    title.innerHTML = element.title;
    let box = document.createElement('div')
    box.appendChild(image , title)
    document.getElementById("category");
    // console.log(category)
    // console.log(box) 

});




let image_slide = [
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/624f9293b94ee221.jpeg?q=20",

    }, 
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a6d049a34b1a2468.jpg?q=20",
    },
    {
        img_src: " https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8c2d12c1b3b3cfbf.jpg?q=20",
    },

    {
        img_src: "    https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9ebe763293737dc0.jpeg?q=20",
    },


]


image_slide.forEach((element) => {

    let image_slide = document.getElementById('image-slide');
    image_slide.className = "flex"
    let slide = document.createElement('img');
    slide.src = element.img_src;
    image_slide.append(slide);
    // console.log(slide);

})


// image_slide.map((element) => {

//     let image_slide = document.getElementById('image-slide');
//     image_slide.className = "flex"
//     let slide = document.createElement('img');
//     slide.src = element.img_src;
//     image_slide.append(slide);
//     // console.log(slide);

// })






// ads Start 

let ads = [
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/1600/140/image/c0b62e6c3d7b6203.jpg?q=20",
    }
];


category.map((element) => {
    let image = document.createElement('img');
    image.src = element.img_src;
    let title = document.createElement('span');
    title.innerHTML = element.title;
    let box = document.createElement('div')
    box.append(image, title)
    document.getElementById("category").append(box);
    // console.log(image, title, box) 

});


ads.map((element) => {
    let ads_sec = document.getElementById("ads-sec");
    console.log(ads_sec)
    let ads_img = document.createElement('img');
    ads_img.src = element.img_src;
    let ads_div = document.createElement('div');
    ads_div.append(ads_img);
    // console.log(ads_img)
    // console.log(ads_div)
    ads_sec.appendChild(ads_div)
    ads_img.className = " width80p m12p"


})


// start end 

