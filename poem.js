const line1 = document.getElementById("Note-C-First");
console.log(line1)

const synth = new Tone.Synth().toDestination();
const now = Tone.now();

let position = 50;
let direction = 1;
let speed = 5;
const bottom = 550; 

function soundBounce() {
     synth.triggerAttackRelease("C4", "8n");
}



line1.addEventListener("click", function animate () {
    position += direction *speed; 
    line1.style.top = position + 'px';
    if (position <= 50) {
        direction = 1;
    
    }

    if (position >= bottom) {
        position = bottom;
        direction = -1; 
        soundBounce();
    } 
    
    requestAnimationFrame(animate);
}); 
    






