// console.log("Welcome to Spotify");

// //initalize the variables
// let songIndex=0;
// let audioElement=new Audio('songs/1.mp3');
// let masterPlay=document.getElementById('masterPlay');
// let myProgressBar=document.getElementById('myProgressBar');
// let gif=document.getElementById('gif');
// let songItems=Array.from(document.getElementsByClassName('songItem'));


// let songs=[
//     {songName:"warriyo",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
//     {songName:"cielo",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
//     {songName:"Deaf Kev",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
//     {songName:"Different heaven",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
//     {songName:"Janji-herors",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
//     {songName:"rabba-salam e eshaq",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
//     {songName:"shakhiyan",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
//     {songName:"bhula dena",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
//     {songName:"tumari kasam",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
//     {songName:"Na jaana",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
// ]
// songItems.forEach((element,i)=>{
//     //console.log(element,i);
//     element.getElementsByTagName("img")[0].src=songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
// })

// songItems.forEach((element, i) => {
//     let audio = new Audio(songs[i].filePath);
//     audio.addEventListener('loadedmetadata', () => {
//         let duration = formatTime(audio.duration);
//         let timestampEl = element.querySelector('.timestamp');
//         timestampEl.innerHTML = `${duration} <i class="far songItemPlay fa-play-circle"></i>`;
//     });
// });

// function formatTime(sec) {
//     let minutes = Math.floor(sec / 60);
//     let seconds = Math.floor(sec % 60);
//     if (seconds < 10) seconds = "0" + seconds;
//     return `${minutes}:${seconds}`;
// }

// //handle play/pause click
// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity=1;
//     }else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity=0;
//     }
// })

// //listen to events
// audioElement.addEventListener('timeupdate', () => {
//   let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
//   myProgressBar.value = progress;
// });

// myProgressBar.addEventListener('change',()=>{
//     audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
// })

// const makeAllPlays = (e) => {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     });
// };


// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
//    element.addEventListener('click', (e) => {
//        makeAllPlays();
//        e.target.classList.remove('fa-play-circle');
//        e.target.classList.add('fa-pause-circle');
//        songIndex = index;
//        audioElement.src = songs[songIndex].filePath;
//        audioElement.currentTime = 0;
//        audioElement.play();
//        masterPlay.classList.remove('fa-play-circle');
//        masterPlay.classList.add('fa-pause-circle');
//        gif.style.opacity = 1;

//        // ✅ Display current song name
//        document.getElementById('currentSongName').innerText = songs[songIndex].songName;
//    });
// });

// document.querySelector('.songItemContainer').addEventListener('click', function(e) {
//   if (e.target.classList.contains('songItemPlay')) {
//     let index = Array.from(document.getElementsByClassName('songItemPlay')).indexOf(e.target);
//     makeAllPlays();
//     e.target.classList.remove('fa-play-circle');
//     e.target.classList.add('fa-pause-circle');
//     songIndex = index;
//     audioElement.src = songs[songIndex].filePath;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//     gif.style.opacity = 1;

//     // ✅ Add this line to fix your issue:
//     document.getElementById('currentSongName').innerText = songs[songIndex].songName;
//   }
// });
// // for the next and previous
// document.getElementById('next').addEventListener('click', () => {
//     songIndex = (songIndex + 1) % songs.length;
//     playSong(songIndex);
// });

// document.getElementById('previous').addEventListener('click', () => {
//     songIndex = (songIndex - 1 + songs.length) % songs.length;
//     playSong(songIndex);
// });

// // Helper function to avoid repetition
// function playSong(index) {
//     audioElement.src = songs[index].filePath;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//     gif.style.opacity = 1;

//     // ✅ Update the current song name
//     document.getElementById('currentSongName').innerText = songs[index].songName;
// }

//optimize code ...

console.log("Welcome to Spotify");

// Initialize variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let currentSongName = document.getElementById('currentSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// Song list
let songs = [
    { songName: "warriyo", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "cielo", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Deaf Kev", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different heaven", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji-herors", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "rabba-salam e eshaq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "shakhiyan", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "bhula dena", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "tumari kasam", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Na jaana", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
];

// Load song names and covers into the UI
songItems.forEach((element, i) => {
    element.querySelector("img").src = songs[i].coverPath;
    element.querySelector(".songName").innerText = songs[i].songName;
});

// Load duration for each song
songItems.forEach((element, i) => {
    let audio = new Audio(songs[i].filePath);
    audio.addEventListener('loadedmetadata', () => {
        const duration = formatTime(audio.duration);
        element.querySelector('.timestamp').innerHTML = `${duration} <i class="far songItemPlay fa-play-circle"></i>`;
    });
});

// Format time helper
function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

// Play/pause control for master play button
masterPlay.addEventListener('click', () => {
    const songItemButtons = Array.from(document.getElementsByClassName('songItemPlay'));
    
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        togglePlayIcon(true);
        gif.style.opacity = 1;

        // ✅ Update the correct songItemPlay icon
        makeAllPlays();
        songItemButtons[songIndex].classList.remove('fa-play-circle');
        songItemButtons[songIndex].classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        togglePlayIcon(false);
        gif.style.opacity = 0;

        // ✅ Change container icon to play
        songItemButtons[songIndex].classList.remove('fa-pause-circle');
        songItemButtons[songIndex].classList.add('fa-play-circle');
    }
});


// Sync progress bar with audio
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Seek audio on progress bar change
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Remove all pause icons, reset to play icon
function makeAllPlays() {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((el) => {
        el.classList.remove('fa-pause-circle');
        el.classList.add('fa-play-circle');
    });
}

// Toggle master play button icon
function togglePlayIcon(isPlaying) {
    masterPlay.classList.toggle('fa-play-circle', !isPlaying);
    masterPlay.classList.toggle('fa-pause-circle', isPlaying);
}

// Play a specific song
function playSong(index) {
    songIndex = index;
    audioElement.src = songs[index].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    togglePlayIcon(true);
    gif.style.opacity = 1;
    currentSongName.innerText = songs[index].songName;
}

// Event for individual play buttons
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        playSong(index);
    });
});

// Handle click on container (event delegation)
document.querySelector('.songItemContainer').addEventListener('click', function (e) {
    if (e.target.classList.contains('songItemPlay')) {
        let index = Array.from(document.getElementsByClassName('songItemPlay')).indexOf(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        playSong(index);
    }
});

// Next button
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    playSong(songIndex);
});

// Previous button
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    playSong(songIndex);
});
