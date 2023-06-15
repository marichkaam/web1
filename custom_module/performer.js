class Performer {
    constructor(name, age, company) {
        this.name = name;
        this.age = age;
        this.company = company;
    }
}

let performersList = new Array();

//додати виконавця в колекцію
function addPerformer(name, age, company) {
    let performer = new Performer(name, age, company);
    performersList.push(performer);

    return performer;

}

//видалити виконавця з колекції
function removePerformer(name, age, company) {
    for (let id = 0; id < performersList.length; id++) {


        let performer = performersList[id];


        if (performer.name === name &&
            performer.age === age){
                performersList.splice(id, 1);
                return 1;
             }
    }
    return -1;
}

//редагування виконавця в колекції
function editPerformer(name, age, company, newName, newAge) {

    for (let id = 0; id < performersList.length; id++) {

        let performer = performersList[id];


        if (performer.name === name &&
            performer.age === age) {

            performersList[id].name = newName;
            performersList[id].age = newAge;

            return 1;
        }
    }

    return -1;

}

function allPerformers(){
    console.log("\n" + "List of all performers:");
    
    for (let id = 0; id < performersList.length; id++) {
        let performer = performersList[id];
        console.log(`Name: ${performer.name}\n age ${performer.age}\n company: ${performer.company}\n`);
    }
    console.log();
    return performersList;
}

exports.allPerformers = allPerformers;
exports.addPerformer = addPerformer;
exports.removePerformer = removePerformer;
exports.editPerformer = editPerformer;