
let add_btn = document.getElementById('add_btn');
let remove_btn = document.getElementById('remove_btn');

let text = document.getElementById('text');


// function h() {
//     if (text.value == "") {
//         alert("f");
//         console.log(text.value)



//     } else {

//         let c = document.getElementById('c');
//         let span = document.createElement('span');
//         // document.removeChild()
//         // span.innerHTML = text.value;
//         span.innerHTML = text.value;
//         let box = document.createElement('div');
//         box.id = "container"

//         c.appendChild(box);
//         box.append(span)
//         console.log(text.value)
//         text.value = "";

//     }


// }


// add_btn.addEventListener('click', (h));

add_btn.addEventListener('click', () => {
    if (text.value == "") {
        alert("f");
        console.log(text.value)



    } else {

        let c = document.getElementById('c');
        let span = document.createElement('span');
        // document.removeChild()
        // span.innerHTML = text.value;
        span.innerHTML = text.value;
        let box = document.createElement('div');
        box.id = "container"

        c.appendChild(box);
        box.append(span)
        console.log(text.value)
        text.value = "";

    }


    
})










remove_btn.addEventListener('click', () => {
    let c = document.querySelector('#c');
    let container = document.getElementById('container')
    c.removeChild(document.getElementById('container'))

    console.log(c)






});





// text.addEventListener('keyup', () => {




// })

text.value = "";
console.log(text.value);
console.log(text);
console.log(c);
