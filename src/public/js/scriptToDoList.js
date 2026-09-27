let taskData =[];

const elements = {
    taskInput: document.getElementById('taskInput'),
    taskList: document.getElementById('taskList'),
    errorP: document.getElementById('errorP'),
    contTask: document.getElementById('contTask'),
    addTaskBtn: document.getElementById('addTaskBtn'),
    deleteAllTaskBtn: document.getElementById('deleteAllTaskBtn')
}
loadTasks();

function addTask(){
    console.log("Adicionado tarefa");
    
    let task = elements.taskInput.value.trim();

    if(task === ""){
        elements.errorP.textContent = "Erro! Digite uma tarefa.";
        elements.taskInput.value = "";
        return;
    }
    elements.errorP.textContent = "";

    taskData.push(task)
    saveTasks()
    createTask(task);

    elements.taskInput.value = "";
    elements.taskInput.focus();
    updateCounter();
}
elements.addTaskBtn.addEventListener("click", () => {
    addTask()
})
elements.taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
function updateCounter(){
    const amount = elements.taskList.children.length;
    if (amount === 1){
        elements.contTask.textContent = `Você tem ${amount} tarefa. `
    } else {
    elements.contTask.textContent = `Você tem ${amount} tarefas. `
    }
}
elements.deleteAllTaskBtn.addEventListener("click", () => {
    taskData = [];
    saveTasks();
    for (let i = elements.taskList.children.length -1; i >= 0; i--) {
        elements.taskList.children[i].remove()
    }
    updateCounter();
})

function createTask(task){
    const index = taskData.indexOf(task)
    const taskItem = document.createElement("li");
    taskItem.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.textContent = "Excluir"

    taskItem.appendChild(deleteBtn)
    elements.taskList.appendChild(taskItem);

    deleteBtn.onclick = function(){
        taskData.splice(index, 1);
        saveTasks();
        taskItem.remove();
        updateCounter();
    };

    taskItem.onclick = () => {
        taskItem.classList.toggle("completed");
    };
}
function saveTasks(){
    localStorage.setItem(
        "tasks",
        JSON.stringify(taskData)
    );
}
function loadTasks(){
    const data = localStorage.getItem("tasks");

    if (data != null){
        taskData = JSON.parse(data);
    } else {
        taskData = [];
    };
    for(let i = 0; i < taskData.length; i++ ){
        createTask(taskData[i]);
    }
    updateCounter();
}
