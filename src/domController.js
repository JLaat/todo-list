import { ProvidePlugin } from "webpack";
import { todo } from "./todo";
export {domController};

const domController = (() => {
    const mainElement = document.getElementById("content");


    const addTodo = () => {
        let todo = document.createElement("div");

        let todoName = document.createElement("h2");
        todoName.textContent = document.querySelector("#title").textContent;
        
        let todoDescription = document.createElement("p");
        todoDescription.textContent = document.querySelector("#description").textContent;

        let todoDueDate = document.createElement("h2");
        todoDueDate.textContent = document.querySelector("#dueDate").textContent;

        let todoPriority = document.createElement("h2");
        todoPriority.textContent = document.querySelector("#priority").textContent;

        todo.appendChild(todoName);
        todo.appendChild(todoDescription);
        todo.appendChild(todoDueDate);
        todo.appendChild(todoPriority);

        mainElement.appendChild(todo);
    }

    const toggleTodoForm = () => {
        let todoForm = document.querySelector(".myForm");

        if (todoForm.style.display === "none") {
            todoForm.style.display = "flex";
        } else {
            todoForm.style.display = "none";
        }
    }

    // Add eventListeners
    document.querySelector(".addBtn").addEventListener("click", () => {
        toggleTodoForm();
    })

})()