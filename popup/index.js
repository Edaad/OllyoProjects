const popUpButton = document.getElementById("popUpButton");
const popUpBar = document.getElementById("popUpBar");
const popUp = document.getElementById("popUp");

let clickCount = 0;

popUpButton.addEventListener("click", ()=>{
    popUp.style.display = "block";
    popUpBar.style.display = "block";
    if (clickCount < 1) {
        let button = document.createElement("button");
        popUpBar.append(button);
        button.append("X");
        button.setAttribute('id', 'closeButton');
        button.addEventListener("click", ()=> {
        popUp.style.display = "none";
        popUpBar.style.display = "none";
        });
    }
    clickCount++;
})

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
                popUp.style.transform = "translate(" + x2 + "px," + y2 + "px)";                
            }
        })
    }
    
    function endMove(obj) {
        obj.addEventListener("mouseup", () => {
          isMoving = false;
        })
    }
    
    function getPadding(e) {
        x3 = e.pageX - e.offsetX;
        y3 = e.pageY - e.offsetY;
    }  
}

draggable(popUpBar);
