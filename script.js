// Load tasks on page startup
window.onload = function() {
    loadTasks();
};

// Add a task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return; // ignore empty tasks

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(taskText);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    loadTasks();
}

// Load tasks into the list
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;

        taskList.appendChild(li);
    });
}

// Delete a specific task
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    loadTasks();
}
