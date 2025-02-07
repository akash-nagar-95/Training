// Selectig the elements : 
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage
document.addEventListener("DOMContentLoaded", loadTasks);



// Add task event listener
addTaskBtn.addEventListener("click", addTask);




// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // creating the task element :
    const li = document.createElement("li");
    li.innerHTML = `${taskText}<button class="delete-btn">X</button>`;


    // Adding the event listener to delete the task : 
    li.querySelector(".delete-btn").addEventListener("click", function() {
        li.remove();
        removeTaskFromLocalStorage(taskText);
    });

    // Append task to list
    taskList.appendChild(li);

    // Save to localStorage
    saveTaskToLocalStorage(taskText);

    // Clear input field
    taskInput.value = "";
}

// Function to save tasks to localStorage
function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button class="delete-btn">X</button>
        `;

        // Add event listener to delete button
        li.querySelector(".delete-btn").addEventListener("click", function() {
            li.remove();
            removeTaskFromLocalStorage(task);
        });

        taskList.appendChild(li);
    });
}

// Function to remove task from localStorage
function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
