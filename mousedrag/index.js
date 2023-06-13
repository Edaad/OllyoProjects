const greenBox = document.getElementById("greenBox");
const redBox = document.getElementById("redBox");
let isMoving = false;
let x;
let y;
let oTop, oLeft;

greenBox.addEventListener("mousedown", (e) => {
    isMoving = true;
    x1 = e.offsetX;
    y1 = e.offsetY;
})

window.addEventListener("mousemove", (e) => {
    if (isMoving) {
      x2 = e.pageX - x1;
      y2 = e.pageY - y1;
      greenBox.style.transform = "translate(" + x2 + "px," + y2 + "px)";
      if (elementsOverlap(greenBox, redBox)) {
        redBox.style.backgroundColor = "yellow";
      } else {
        redBox.style.backgroundColor = "red";
      }
    }
})

window.addEventListener("mouseup", (e) => {
    isMoving = false;
})


function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
  
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
}

