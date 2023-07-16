console.log("Welcome To Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "aagye ni billo", filepath: "1.mp3.mp3",coverpath:"1.jpg.jpg"},
    {songName: "billal saeed", filepath: "2.mp3.mp3",coverpath:"2.jpg.jpg"},
    {songName: "yaar ni miliya", filepath: "3.mp3.mp3",coverpath:"3.jpg.jpg"},
    {songName: "pb-26", filepath: "4.mp3.mp3",coverpath:"4.jpg.jpg"},
    {songName: "Backbone", filepath: "5.mp3.mp3",coverpath:"5.jpg.jpg"},
    {songName: "Badnaam", filepath: "6.mp3.mp3",coverpath:"6.jpg.jpg"},
]

songItems.forEach((element, i)=> {
   console.log(element,i);
    element.getElementsByTagName ("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerTect = songs[i].songName;
});
//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.durartion)*100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        audioElement.src = '3.mp3.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
    })



}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

    })
})
