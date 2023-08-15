document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("head").style.transform = "rotate(15deg)";
document.getElementById("body").style.border = "2px black solid";
document.getElementById("mouth").style.borderRadius = "4px";
document.getElementById("righteye").style.border =
"4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor =
"#FF00FF";
document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop =
"5px black solid";

// *************************************************************************

// This declaration creates the shorthand for us to reger to the right eye
// let rightEye = document.getElementById("righteye");

// // Tell JavaScript to listen for mouse clicks on the right eye
// rightEye.addEventListener("click", moveUpDown);

// //// creating the listener
// /* When the function is called by the addEventListener function, the e will contain some information
// about the event that just happened, which we can use inside of the function.*/

function moveUpDown(e) {
    let robotPart = e.target;
    let top = 0;
    let id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + "%";
        top++;
        if (top === 20){
            clearInterval(id);
        }
    }
}

// ************************************************

// // Arm movement animation
let leftArm = document.getElementById("leftarm");
// event handler
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
    let robotPart = e.target;
    let left = 0;
    let id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70){
            clearInterval(id);
    }
    }
}
