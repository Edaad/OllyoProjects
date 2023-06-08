let buttons = [7, 8, 9, ' ÷ ', 4, 5, 6, ' × ', 1, 2, 3, 
' - ', '.', 0, '=', ' + ', 'CLEAR', '⌫']

let finalInput = "";
let result;


function buttonClick(i) {
    document.getElementById("display").append(buttons[i])
    finalInput += buttons[i];

    document.getElementById("CLEAR").onclick = function() {
        finalInput = "";
        document.getElementById("display").innerHTML = finalInput;
    }

    document.getElementById("⌫").onclick = function() {
        finalInput = finalInput.slice(0, -2);
        document.getElementById("display").innerHTML = finalInput;
    }

    document.getElementById("=").onclick = function() { 
        finalInput = finalInput.replace(' × ', '*');
        finalInput = finalInput.replace(' ÷ ', '/');
        result = eval(finalInput.slice(0,-1));
        document.getElementById("display").innerHTML = result
    }
}

function printCalculator() {
    for (let i = 0; i < buttons.length; i++) {
        let button = document.createElement("button");
        button.append(buttons[i]);
        button.setAttribute('id', buttons[i]);
        document.getElementById("calculator").append(button);
        button.addEventListener("click", ()=> buttonClick(i));
    }
}

printCalculator();

