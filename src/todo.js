export {todo, changePriority};

const todo = (title, description, dueDate, priority) => {
    const todoObject = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    };
    return todoObject;
}

const changePriority = (todo, priority) => {
    todo.priority = priority;
}

const removeTodo = (todo) => {
    
}