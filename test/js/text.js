//Have alot of useless stuff here... Why I even call this test...
//TO DO: Add some comm(s)

let i = 0;
let currentNarrator = 0;
const txt = 'Make a fucking dialog three!';
const speed = 50;
let textIsReady = false;

narratorSound1 = new Audio('./audio/pick.wav');
narratorSound2 = new Audio("./audio/synth.wav");

const NarratorSoundOption = [narratorSound1, narratorSound2]

function togleNarrator(){
    //Change narrator if narrator = 0 to 1 and if 1 to 0
    // currentNarrator = currentNarrator === 0 ? 1 : 0; // <-- read friendly (best) 
    //Or!!!!
    // currentNarrator = +!currentNarrator; // <-- kinda tuff
    //Or use bits
    currentNarrator ^= 1; // <--- I save this for future? God like btw
}

function clearText(id){
    document.getElementById(id).innerHTML = "";
}

// Maybe
// function fancyClearText(id){
//     let n = Number(txt.length);
//     if (n != 0){
//         document.getElementById("typewrite-demo").innerHTML -= txt.charAt(n);
//         n--;
//         setTimeout(fancyClearText, speed)
//     }
// }

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewrite-demo").innerHTML += txt.charAt(i);
        NarratorSoundOption[currentNarrator].play();
        i++;
        setTimeout(typeWriter, speed);
    }
}

function typeWriterWrapper() { 
  typeWriter();
  if (i == txt.length) {
    setTimeout(() => {
      clearText("typewrite-demo");
      i = 0;
    }, speed);
  }
}

