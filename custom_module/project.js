class Project{
    constructor(name,company,customer,performer){
        this.name = name;
        this.company = company;
        this.customer = customer;
        this.performer = performer;
    }
}

let projectsList = new Array();

function addProject(name,company,customer,performer){
    let project = new Project(name,company,customer,performer);
    projectsList.push(project);

    return project;
}

function removeProject(name){

    for (let id = 0; id < projectsList.length; id++) {


        let project = projectsList[id];


        if (project.name === name){
                projectsList.splice(id, 1);
                return 1;
             }
    }
    return -1;
}

function editProject(name,company,new_name,new_company){
    
    for (let id = 0; id < projectsList.length; id++) {


        let project = projectsList[id];


        if (project.name === name){ 
                projectsList[id].name = new_name;
                projectsList[id].company = new_company
                return 1;
            }
    }


    return -1;
}

function allProjects(){
    console.log("\n" + "Project List:");
    
    for (let id = 0; id < projectsList.length; id++) {
        let project = projectsList[id];
        console.log(`Name: ${project.name}\n company: ${project.company}\n customer: ${project.customer}\n performer: ${project.performer}\n`);
    } 
    console.log();
    return projectsList;
}

function findProjectByCustomer(Customer){
    const projects = projectsList.filter(project => project.customer.includes(Customer));
    return projects;
}

function findProjectByPerformer(Performer){
    const projects = global_project_list.filter(project => project.performer.includes(Performer));
    return projects;
}



exports.addProject = addProject;
exports.findProjectByCustomer = findProjectByCustomer;
exports.findProjectByPerformer = findProjectByPerformer;
exports.allProjects = allProjects;
exports.removeProject = removeProject;
exports.editProject = editProject;


