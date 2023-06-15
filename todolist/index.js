const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");
const textField = document.getElementById("text-field");
const list = document.getElementById("list");
const completed = document.getElementById("completed");
let tasks = [];
let activeTasks = [];
let completedTasks = [];

addButton.addEventListener("click", addValue);
clearButton.addEventListener("click", clearTasks);

function clearTasks() {
    localStorage.tasks = "[]";
    tasks = [];
    activeTasks = [];
    completedTasks = [];
    list.innerHTML = "";
    completed.innerHTML = "";
}

function addValue() {
    if (textField.value != '') {
        tasks.push({task: getValue(), status: 1});
        textField.value = "";
        displayTask(tasks[tasks.length-1].task, list);
    }
}

function getValue() {
    return textField.value;
}

function displayTask(task, divId) {
    let newInputDiv = document.createElement("div");
    newInputDiv.setAttribute("id", task);
    newInputDiv.setAttribute("class", "task");
    divId.append(newInputDiv);

    let newInputCheckbox = document.createElement("input");
    newInputCheckbox.setAttribute("type", "checkbox");
    newInputCheckbox.setAttribute("id", "$"+task);
    newInputDiv.append(newInputCheckbox);

    let newInputLabel = document.createElement("label");
    newInputLabel.setAttribute("for", "$"+task);
    newInputLabel.setAttribute("id", "$$"+task);
    newInputLabel.append(task);
    newInputDiv.append(newInputLabel);

    // let pinButton = document.createElement("img");
    // pinButton.setAttribute("src", "images/pin.png");
    // pinButton.setAttribute("id", task+"pin");
    // pinButton.setAttribute("class", "pin-button");

    let deleteButton = document.createElement("img");
    deleteButton.setAttribute("src", "images/trash.png");
    deleteButton.setAttribute("id", task+"delete");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.style.width = "15px"; deleteButton.style.height = "15px";
    // newInputDiv.append(pinButton);
    newInputDiv.append(deleteButton);
    deleteFunction(deleteButton, task);
    // pinFunction(pinButton, task);

    checkFunction(newInputCheckbox, task);
    setStorageData();
}

function deleteFunction(deleteButton, task) {
    deleteButton.addEventListener("click", () => {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].task == task) {
                tasks.splice(i, 1);
            }
        }
        document.getElementById(task).remove();
        setStorageData();
    })
}

// function pinFunction(pinButton, task) {
//     pinButton.addEventListener("click", () => {
//         for (let i = 0; i < tasks.length; i++) {
//             if (tasks[i].task == task) {
//                 tasks.unshift(tasks.splice(i, 1)[0]);
//             }
//         }
//         let taskDiv = document.getElementById(task).cloneNode(true);
//         document.getElementById(task).remove();
//         list.insertBefore(taskDiv, document.getElementById(tasks[1].task));
//         setStorageData()
//     })
// }

function checkFunction(checkbox, task) {
    checkbox.addEventListener("change", () => {
        for (let i = 0; i < tasks.length; i++) {
            if (checkbox.checked && tasks[i].task == task) {
                tasks[i].status = 0;
            } else if (tasks[i].task == task) {
                tasks[i].status = 1;
            }
        }
        setStorageData();
        activeTasks = tasks.filter(t => t.status === 1);
        completedTasks = tasks.filter(t => t.status === 0);
        for (let i = 0; i < completedTasks.length; i++) { 
            completed.append(document.getElementById(completedTasks[i].task));
        }
        for (let i = 0; i < activeTasks.length; i++) { 
            list.append(document.getElementById(activeTasks[i].task));
        }
    })
}

function setStorageData() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

if (localStorage.length > 0) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    activeTasks = tasks.filter(t => t.status === 1);
    completedTasks = tasks.filter(t => t.status === 0);
    if (tasks != null) {
        for (let i = 0; i < activeTasks.length; i++) {
            displayTask(activeTasks[i].task, list);
        }
        for (let i = 0; i < completedTasks.length; i++) {
            displayTask(completedTasks[i].task, completed);
            document.getElementById("$"+completedTasks[i].task).checked = "checked";
        }
    } 
}

document.addEventListener('keydown', (e)=> {
    if(e.key == "Enter") {
        addValue();
    }
});

