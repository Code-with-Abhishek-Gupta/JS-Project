let playbtn = document.getElementById('playbtn');

let myProgressbar = document.getElementById('myProgressbar');
let songIndex = 0;
let songGif = document.getElementById('Gif')
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [

    { songName: "50 hello", filePath: "/Music/1.mp3", coverPath: "./Image/Spotify-Logo-1602033512.png" },
    { songName: "50 min mind relax Bollywood Lofi song and slower", filePath: "/Music/50 min mind relax Bollywood Lofi song and slower x reverd lofi mashup Bollywood.mp3", coverPath: "" },
    { songName: "Vaari Aa Full Song Raabta Sushant", filePath: "/Music/yt1s.com - Ik Vaari Aa Full Song Raabta Sushant Singh Rajput Kriti Sanon Pritam Arijit Singh Amitabh B.mp3", coverPath: "./Image/Spotify-Logo-1602033512.png" },
    { songName: "baba ji ", filePath: "/Music/BEST UNPLUGGED SONGS 2020 BOLLYWOOD SONGS BEST HINDI SONGS.mp3", coverPath: "./Image/Spotify-Logo-1602033512.png" },
]

let songItem = Array.from(document.getElementsByClassName("songItem"));

// Handle Play // Pause click 
let music = new Audio('./Music/1.mp3');
playbtn.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        playbtn.classList.remove('fa-circle-play');
        playbtn.classList.add('fa-circle-pause');
        songGif.style.opacity = 1;
        // playbtn.style.display = "none";
        // pause.style.display = "inline";
    } else {
        music.pause();
        playbtn.classList.add('fa-circle-play');
        playbtn.classList.remove('fa-circle-pause');
        songGif.style.opacity = 0;
    }
})

// Listen the Event 
music.addEventListener('timeupdate', () => {
    progress = parseInt((music.currentTime / music.duration) * 100);
    myProgressbar.value = progress;
})
myProgressbar.addEventListener('change', () => {
    music.currentTime = myProgressbar.value * music.duration / 100;
})


// songItems.forEach(element => {
//     element.getElementBy

// });

// handle songName 








songItems.forEach((element, i) => {

    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    // element.getElementByTagName("img")[0].src = songs[i].coverPath;
    element.querySelector("img")[0].src = songs[i].coverPath;


})