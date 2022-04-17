import {todo, changePriority } from "./todo";
import { project } from "./projects";

const gameController = (() => {
let projectList = [];
let todoList = [];

const removeProject = (project) => {
    projectList.splice(projectList.indexOf(project), 1);
}
const removeTodo = (todo) => {
    todoList.splice(todo.indexOf(todo), 1);
}
})()