let x = 0;
let y = 0;

document.getElementById("controller").addEventListener("mousemove", (e) => {
    x = e.offsetX;
    y = e.offsetY;
    document.getElementById("object").style.transform = "translate(" + x + "px," + y + "px)";
    let xPercentage = x / document.getElementById("controller").offsetWidth * 100;
    let yPercentage = y / document.getElementById("controller").offsetHeight * 100;
    document.getElementById("object").style.borderRadius = xPercentage/2 +"%";
    document.getElementById("object").style.scale = 2 * yPercentage/100;
});


