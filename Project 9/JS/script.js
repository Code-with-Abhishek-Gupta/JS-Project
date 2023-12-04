var arr = [
    {
        dp: "https://images.unsplash.com/photo-1441123694162-e54a981ceba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybCUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D",

    },

    {
        dp: "https://images.unsplash.com/photo-1482555670981-4de159d8553b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D",

    },


    {
        dp: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D",

    },

    {
        dp: "https://images.unsplash.com/photo-1491154664016-3a6107d463ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90JTIwZ2lybCUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D",

    },
    {
        dp: "https://images.unsplash.com/photo-1495063378081-52411c3eedf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMGdpcmwlMjBpbWd8ZW58MHx8MHx8fDA%3D",

    },

    {
        dp: "https://images.unsplash.com/photo-1465145782865-09532f760e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdCUyMGdpcmwlMjBpbWd8ZW58MHx8MHx8fDA%3D",

    },









]


var clutter = "";


arr.forEach(function (elem, idx) {
    clutter += `
 <div id="stores"> <div class="story">
                        <img id="${idx}" src="${elem.dp}" alt>

                    </div>
                </div>


    `

})

document.querySelector("#stores_div").innerHTML = clutter;

document.querySelector("#stores_div").addEventListener('click', function (dets) {
    // console.log(dets);
    // console.log(dets.target);
    // console.log(dets.target.id);
    console.log(arr[dets.target.id].story);
    // var value = arr[dets.target.id];
    document.querySelector("#full-screen").style.display = "block";
    // document.querySelector("#full-screen").style.backgroundImage = `url(${value})`

    
})