const line1 = document.getElementById("Note-C-First");
console.log(line1)

const synth = new Tone.Synth().toDestination();
const now = Tone.now();

let speed = 5;
let bouncing = false; 
let dragging = false; 

function move () {
    requestAnimationFrame(move); 
}


line1.addEventListener("click", async () => {
    await Tone.start();
    console.log("started");
    synth.triggerAttackRelease("C4", "10n", now + 0.5);
})