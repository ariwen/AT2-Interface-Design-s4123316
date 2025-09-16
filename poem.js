const line1 = document.getElementById("Note-C-First");
console.log(line1)

const synth = new Tone.Synth().toDestination();
const now = Tone.now();

let position = 50;
let direction = 1;
let acceleration = 0.1;
const bottom = 550; 



line1.addEventListener("click", function animate () {
    position += direction *5
    direction -= acceleration;
    line1.style.top = position + 'px';
    if (position => 50) {
        direction = 1;
    if (position >= bottom) {
        direction = -1; 
    }
    
    requestAnimationFrame(animate);
}); 
    




line1.addEventListener("click", async () => {
    await Tone.start();
    console.log("started");
    synth.triggerAttackRelease("C4", "8n", now + 4);
})

