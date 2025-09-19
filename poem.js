// I'd like to note here that I have not included the Math.Random() function as that will be part of the add poem button

const line1 = document.getElementById("Note-C-First");

const synth = new Tone.Synth().toDestination();
const now = Tone.now();

let position = 50;
let speed = 5;
let bottom = 550; 
let direction = 1;
let bouncing = false;

function soundBounce() {
     synth.triggerAttackRelease("C4", "8n");
}



line1.addEventListener("click", 
    function () {
    if (!bouncing) {
        bouncing = true;
        animate();
    } else {
        bouncing = false;
    }
});
    
    function animate () {
        if (!bouncing) return;

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
};

let dragging = false; 

let offsetX = 0;
let offsetY = 0; 


window.addEventListener("mousedown", 
    function(event) {
        if (bouncing) return;
    dragging = true;
    offsetX = event.clientX - line1.offsetLeft;
    offsetY = event.clientY - line1.offsetTop;
});

window.addEventListener("mouseup", function() {
    dragging = false;
});

window.addEventListener("mousemove", 
    function(event) {
    if (dragging && !bouncing) {
        line1.style.left = (event.clientX - offsetX) + "px";
        line1.style.top = (event.clientY - offsetY) + "px";
        position = event.clientY - offsetY;
    }
});







    






