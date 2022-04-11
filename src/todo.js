const todo = (title, description, dueDate, priority) => {
    const todoObject = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    };
    return todoObject;
}