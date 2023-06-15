class Customer{

    constructor(name,age,company){
        this.name = name;
        this.age = age;
        this.company = company;
    } 
 
}

var customers = [];

//додавання нового замовника в колекцію
function addCustomer(name,age,company){
    
    let customer = new Customer(name,age,company);
     customers.push(customer);

     return customer;
}

//видалення замовника з колекції
function removeCustomer(name,age,company){
    
    for (let id = 0; id < customers.length; id++) {


        let customer = customers[id];


        if (customer.name === name &&
            customer.age === age
            && customer.company === company){
                customers.splice(id, 1);
                return 1;
             }
    }
    return -1;
    
}

//пошук одного замовника в колекції
function findCustomer(name,age,company){
    
    for(let id = 0; id < customers.length; id++){
        let customer = customers[id];
    }
    if(name === Customer.name && age === Customer.age && company === Customer.company ){
        console.log(`Customer found: name: ${customer.name}\n age: ${customer.age} company: ${customer.company} \n`);
        return Customer;
    }
}


//редагування замовника в колекції
function editCustomer(name,age,company,newName,newAge){
    
    for (let id = 0; id < customers.length; id++) {


        let customer = customers[id];


        if (customer.name === name &&
            customer.age === age){ 
                customers[id].name = newName;
                customers[id].age = newAge;
                return 1;
            }
    }


    return -1;
}

function allCustomers(){
    console.log("\n" + "List of all customers:");
    
    for (let id = 0; id < customers.length; id++) {
        let customer = customers[id];
        console.log(`Name: ${customer.name}\n age: ${customer.surname}\n company: ${customer.company}\n`);
    }
    console.log();
    return customers;
}



exports.allCustomers      = allCustomers;
exports.findCustomer      = findCustomer;
exports.addCustomer       = addCustomer;
exports.removeCustomer    = removeCustomer;
exports.editCustomer      = editCustomer;
