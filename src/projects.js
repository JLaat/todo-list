export {project};

let projectList = [];

const project = (projectName) => {
    let newProject = {
        projectName: projectName,
    }
    return newProject;
}

const removeProject = (project) => {
    projectList.splice(projectList.indexOf(project), 1);
}