const mod = require('custom_module');


let c1 = mod.addCustomer("M",1,"Logic");
let c2 = mod.addCustomer("F",2,"Logaaic");
let c3 = mod.addCustomer("Fjfbgiv",20,"flj");


mod.allCustomers();
mod.findCustomer("M",1,"Logiic");
mod.removeCustomer("Fjfbgiv",20,"flj");
mod.allCustomers();


//додавання нового виконавця в колекцію
let p1 = mod.addPerformer("G",22,"PPP");
let p2 = mod.addPerformer("O",90,"OPOP");
let p3 = mod.addPerformer("kkk",23,"LLLLL");

mod.allPerformers();
mod.removePerformer("O",90,"OPOP");
mod.allPerformers();

let pr1 = mod.addProject("Project1", "1", c1.name, p1.name);
let pr2 = mod.addProject("Project2", "2", c2.name, p3.name);
let pr3 = mod.addProject("Project3", "3", c2.name, p2.name);
let pr4 = mod.addProject("Project4", "4", c3.name, p1.name);


mod.allProjects()


mod.editProject("Project1", "4");


mod.allProjects();
mod.removeProject("Project2");
mod.allProjects();
