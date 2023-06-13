const greenBox = document.getElementById("greenBox");
const redBox = document.getElementById("redBox");

function draggable(obj) {
    let isMoving = false;
    let x1, y1, x2, y2, x3, y3;  
    startMove(obj);
    onMove(obj);
    endMove(obj);

    function startMove(obj) {
        obj.addEventListener("mousemove", getPadding);
        obj.addEventListener("mousedown", (e) => {
            obj.removeEventListener("mousemove", getPadding);
            isMoving = true;
            x1 = e.offsetX + x3;
            y1 = e.offsetY + y3;
        })
    }
    
    function onMove(obj) {
        window.addEventListener("mousemove", (e) => {
        if (isMoving) {
            x2 = e.pageX - x1;
            y2 = e.pageY - y1;
            obj.style.transform = "translate(" + x2 + "px," + y2 + "px)";
            if (elementsOverlap(obj, redBox)) {
                redBox.style.backgroundColor = "yellow";
            } else {
                redBox.style.backgroundColor = "red";
            }
        }
        })
    }
    
    function endMove(obj) {
        obj.addEventListener("mouseup", () => {
          isMoving = false;
        })
    }
    
    
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
    
    function getPadding(e) {
        x3 = e.pageX - e.offsetX;
        y3 = e.pageY - e.offsetY;
    }  
}

draggable(greenBox);
