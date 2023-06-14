const canvas = document.getElementById("canvas");
let canvasWhite = "rgb(251, 237, 225)";
const colors = [
    {id: 'greenPaint', unclickedColor:'rgb(83, 142, 83)', clickedColor:'rgb(72, 112, 72)'},
    {id: 'bluePaint', unclickedColor:'rgb(58, 75, 174)', clickedColor:'rgb(46, 61, 144)'},
    {id: 'orangePaint', unclickedColor:'rgb(232, 141, 29)', clickedColor:'rgb(192, 118, 28)'},
    {id: 'pinkPaint', unclickedColor:'rgb(207, 140, 231)', clickedColor:'rgb(164, 103, 186)'},
 ];

function draggable(obj) {

    const mousemovecallback = (e) => {
        console.log(e)
        const {pageX, pageY} = e;
        x2 = e.pageX - x1;
        y2 = e.pageY - y1;

        if (clicked) {
        ele.style.transform = "translate(" + x2 + "px," + y2 + "px)";
        console.log({pageX, pageY})
        console.log(enteredCanvas);
            if (overlaps(ele, canvas)) {
                setColor = obj.unclickedColor;
                canvas.style.backgroundColor = setColor;
                enteredCanvas = true;
            } else if (!unclicked && enteredCanvas) {
                canvas.style.backgroundColor = canvasWhite;
            }
        }
    }
    const ele = document.getElementById(obj.id);
    let clicked = false;
    let unclicked = false;
    let enteredCanvas = false;
    let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
    let setColor = "";

// Start Move
    ele.addEventListener("mousedown", (e) => {
        unclicked = false;
        clicked = true;
        x1 = e.pageX;
        y1 = e.pageY;
        ele.style.backgroundColor = obj.clickedColor;
        console.log("mousedown: " + clicked)
        enteredCanvas = false;
        window.addEventListener("mousemove", mousemovecallback)
    })

// Stop Move
    ele.addEventListener("mouseup", () => {
        clicked = false;
        unclicked = true;
        ele.style.backgroundColor = obj.unclickedColor;
        console.log("mouseup: " + unclicked)
        ele.style.transform = "translate(" + "0" + "px," + "0" + "px)";
        console.log("r");
        window.removeEventListener('mousemove',mousemovecallback);
    })

}
function overlaps(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
  
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }

  function printColors() {
    for (let i = 0; i < colors.length; i++) {
        let color = document.createElement("div");
        color.style.width = "100px"; 
        color.style.height = "100px"; 
        color.style.backgroundColor = colors[i].unclickedColor;
        color.style.border =  "3px solid white";
        color.style.borderRadius = "50%";
        color.setAttribute('id', colors[i].id);
        document.getElementById("paint").append(color);
    }
}
printColors();

for (let i = 0; i < colors.length; i++) {
    draggable(colors[i]);
}


