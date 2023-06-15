//підключаємо необхідні файли
const project    = require("./project");
const performer  = require("./performer");
const customer  = require("./customer");

//доступні операції з замовником
exports.addCustomer = customer.addCustomer;
exports.allCustomers = customer.allCustomers;
exports.removeCustomer = customer.removeCustomer;
exports.findCustomer = customer.findCustomer;
exports.editCustomer = customer.editCustomer;


//доступні операції з виконавцем
exports.addPerformer = performer.addPerformer;
exports.removePerformer = performer.removePerformer;
exports.editPerformer = performer.editPerformer;
exports.allPerformers = performer.allPerformers;


//доступні операції з проектомт
exports.addProject = project.addProject;
exports.findProjectByCustomer = project.findProjectByCustomer;
exports.findProjectByPerformer = project.findProjectByPerformer;
exports.allProjects = project.allProjects;
exports.removeProject = project.removeProject;
exports.editProject = project.editProject;

