
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




;

add_btn.addEventListener('click', () => {
    if (text.value == "") {
        alert("f");
        console.log(text.value)



    } else {

        let c = document.getElementById('c');
        let span = document.createElement('span');
        span.innerHTML = text.value;
        let box = document.createElement('div');
        box.id = "container"

        let remove = document.createElement('i')
        remove.id = "removeItem"
        remove.className = "fa fa-minus-square"
        c.appendChild(box, remove);
        // c.appendChild(remove)
        box.append(span , remove)
        
        console.log(text.value)
        text.value = "";

    }



})



function RemoveTask() {


    // let Tasklist = document.getElementById('container')
    console.log("fff")


}
RemoveTask();









// remove_btn.addEventListener('click', () => {

//     let box = document.getElementById('container')
//     box.removeChild;
//     console.log(box)







// });





// text.addEventListener('keyup', () => {




// })

// text.value = "";
// console.log(text.value);
// console.log(text);
// console.log(c);
