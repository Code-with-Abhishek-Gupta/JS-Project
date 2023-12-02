// object

let category_sec = [
  {
    img_src:
      "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/bfcdffe68a4a77e6.jpg?q=100",
    title: "Top offers",
    href: "",
  },
  {
    img_src:
      "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/9015804c95cf223d.jpg?q=100",
    title: "Mobile & Tablet",
    href: "",
  },

  {
    img_src:
      "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/9015804c95cf223d.jpg?q=100",
    title: "Electronic",
    href: "",
  },
  {
    img_src:
      "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/9536c6d9d8d6f214.jpg?q=100",
    title: "TVs & Application",
    href: "",
  },
  {
    img_src:
      "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/9d6cf33034f3ad5d.jpg?q=100",
    title: "Fashion",
    href: "../HTML/Product.html",
  },
  {
    img_src:
      "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/3a99ad45162dae20.jpg?q=100",
    title: "Beauty",
    href: "",
  },
  {
    img_src:
      "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/7271d36081369b1b.jpg?q=100",
    title: "Home & Kitchen",
    href: "",
  },

  {
    img_src:
      "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/f8f98743e2ad89f6.jpg?q=100",
    title: "Furniture",
    href: "",
  },

  {
    img_src:
      "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/f7aacf23b793d4ba.jpg?q=100",
    title: "Grocery",
    href: "",
  },
];

// Array
// in map method one my one element come
// console.log("category")
category_sec.map((element) => {
  let image = document.createElement("img");
  image.src = element.img_src;
  let title = document.createElement("span");
  title.innerHTML = element.title;
  let link = document.createElement("a");
  link.append(title);
  link.href = element.href;
  let box = document.createElement("div");

  box.append(image, link);
  document.getElementById("category").append(box);

  // link.append(box);

  console.log(link);

  // console.log(category)
  // console.log(box)
});

let image_slide = [
  {
    img_src:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/624f9293b94ee221.jpeg?q=20",
  },
  {
    img_src:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a6d049a34b1a2468.jpg?q=20",
  },
  {
    img_src:
      " https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8c2d12c1b3b3cfbf.jpg?q=20",
  },

  {
    img_src:
      "    https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9ebe763293737dc0.jpeg?q=20",
  },
];

image_slide.forEach((element) => {
  let image_slide = document.getElementById("image-slide");
  image_slide.className = "flex";
  let slide = document.createElement("img");
  slide.src = element.img_src;
  image_slide.append(slide);
  // console.log(slide);
});

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
    img_src:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/140/image/c0b62e6c3d7b6203.jpg?q=20",
  },
];

// category.map((element) => {
//   let image = document.createElement("img");
//   image.src = element.img_src;
//   let title = document.createElement("span");
//   title.innerHTML = element.title;
//   let box = document.createElement("div");
//   box.append(image, title);
//   document.getElementById("category").append(box);
//   // console.log(image, title, box)
// });

ads.map((element) => {
  let ads_sec = document.getElementById("ads-sec");
  console.log(ads_sec);
  let ads_img = document.createElement("img");
  ads_img.src = element.img_src;
  let ads_div = document.createElement("div");
  ads_div.append(ads_img);
  // console.log(ads_img)
  // console.log(ads_div)
  ads_sec.appendChild(ads_div);
  ads_img.className = " width80p m12p";
});

// start end

// best Mobile

let mob = [
  {
    img_src:
      "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    Title: "Nothing Phone 2",
    offer: "incl of offer",
  },

  {
    img_src:
      "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    Title: "Google Pixel 7a",
    offer: "incl of offer",
  },
  {
    img_src:
      "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    Title: "Samsung S21 FE 2023 5G",
    offer: "incl of offer",
  },

  {
    img_src:
      "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    Title: "Realme 11 5G",
    offer: "incl of offer",
  },

  {
    img_src:
      "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    Title: "Poco FS 5G",
    offer: "incl of offer",
  },

  {
    img_src:
      "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    Title: "Infinix Hot 30 5G",
    offer: "incl of offer",
  },
];

mob.forEach("element", () => {
  img.src = element.img_src;
  
});
