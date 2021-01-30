var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

todoList.textContent = ""

todoCountSpan.textContent = todos.length

const renderTodos = function(list) {
    todolist.textContent =''

    const createAndAppend = (arrayItem) => {
        const li = document.createElement("li")
        li.textContent = arrayItem
        todoList.appendChild(li)
    }

    list.forEach((item) => { createAndAppend(item)})
        
}

document.addEventListener("keydown", (e) => {
    e.preventDefault()
    //if(e.key==="Enter"){
        if(todoInput.value){
            todos.push(todoInput.value)
        }
        renderTodos(todos)
        todoInput.value = ""
    //}
    
})