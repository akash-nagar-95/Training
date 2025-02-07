const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", loadTasks);

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `${taskText}<button class="delete-btn">X</button>`;


    li.querySelector(".delete-btn").addEventListener("click", function() {
        li.remove();
        removeTaskFromLocalStorage(taskText);
    });

    taskList.appendChild(li);

    saveTaskToLocalStorage(taskText);

    taskInput.value = "";
}

function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `${task}<button class="delete-btn">X</button>`;

        li.querySelector(".delete-btn").addEventListener("click", function() {
            li.remove();
            removeTaskFromLocalStorage(task);
        });

        taskList.appendChild(li);
    });
}

function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
