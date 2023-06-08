const buttons = ['7', '8', '9', ' ÷ ', '4', '5', '6', ' × ', '1', '2', '3', 
' - ', '.', '0', ' = ', ' + ', 'CLEAR', '⌫', '↩']

let finalInput = "";
let expression;
let result;
let equation;
let history = [];
let historyEntryCount = 0;

// creates an Object with the expression and result for the history array
function newEntry(expression, result) {
    equation = {"expression": expression, "result": result};
    return equation;
}

// executes after a button is clicked
function buttonClick(index) {
    if (buttons[index] != 'CLEAR' && buttons[index] != '⌫' && buttons[index] != '↩') {
        document.getElementById("display").append(buttons[index]) // adds each button clicked into the display
        finalInput += buttons[index]; // updates final input 
    }

    // executes a function after ClEAR button is clicked
    document.getElementById("CLEAR").onclick = function() {
        history.unshift(newEntry(expression, result));  // adding to history array (unshift used to add to the front)
        finalInput = "";
        document.getElementById("display").innerHTML = finalInput;
        historyEntryCount++;
        // printing under History
        let historyEntry = document.createElement("div")
        document.getElementById("history").insertBefore(historyEntry, document.getElementById("history").children[0]);
        historyEntry.setAttribute("id", "historyEntry" + historyEntryCount);
        document.getElementById("historyEntry" + historyEntryCount).append(history[0].expression + history[0].result);
    }

    // executes a function after ↩ button is clicked
    document.getElementById("↩").onclick = function() {
        finalInput = history[0].expression.slice(0, -3);
        document.getElementById("display").innerHTML = finalInput;
    }

    // executes a function after backspace button is clicked
    document.getElementById("⌫").onclick = function() {
        finalInput = finalInput.slice(0, -2);
        document.getElementById("display").innerHTML = finalInput;
    }

    // executes a function after = button is clicked
    document.getElementById(" = ").onclick = function() { 
        expression = finalInput;
        finalInput = finalInput.replace(' × ', '*');
        finalInput = finalInput.replace(' ÷ ', '/');
        result = eval(finalInput.slice(0,-2));
        document.getElementById("display").innerHTML = result
    }
}

// prints the calculator at the beginning 
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

document.addEventListener('keydown', keyPressed);

function keyPressed(event) {
    let key = event.key;
    console.log(key);
    if (buttons.includes(key)) {
        buttonClick(buttons.indexOf(key, 0));
    } else {
        switch (key) {
            case "+":
                buttonClick(buttons.indexOf(' + ')); break;
            case "-":
                buttonClick(buttons.indexOf(' - ')); break;
            case "*":
                buttonClick(buttons.indexOf(' × ')); break;
            case "/":
                buttonClick(buttons.indexOf(' ÷ ')); break;
        }
    }
}


  