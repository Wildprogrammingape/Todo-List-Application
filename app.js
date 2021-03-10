// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(event){
    // Prevent form from submitting
    event.preventDefault();
    console.log("Hello");
    // Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");  // equal to : todoDiv.className='todo';
    // Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    // Append LI on Div
    todoDiv.appendChild(newTodo);

    // Complete button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);
    // Delete button
    const DeleteButton = document.createElement("button");
    DeleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    DeleteButton.classList.add("trash-button");
    todoDiv.appendChild(DeleteButton);

    // Append the whole Div to unordered list
    todoList.appendChild(todoDiv);

    // Set Input Value to empty
    todoInput.value="";
}

function deleteCheck(event){
    const item = event.target; // target is what we are clicking on (trash button)
    // Delete Todo
    if (item.classList[0] === "trash-button"){
        const todo = item.parentElement;
        // Add fall animation
        todo.classList.add("fall");
        //todo.remove();
        // function executed after trasnsition end
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }
    // Check Todo
    const todo = item.parentElement;
    if (item.classList[0] === "complete-button"){
        // The classList.toggle("", boolean) method supports adding and removing CSS classes 
        todo.classList.toggle("completed"); 
    }
}