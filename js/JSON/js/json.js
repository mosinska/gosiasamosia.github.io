let jsonObject = {
    'employees': [
       {
       'firstName': 'John',
       'lastName': 'Doe',
       'zainteresowania': ["sport","programowanie"]
        },
       {
       'firstName': 'Anna',
       'lastName': 'Smith',
       'zainteresowania': ["ogrodnictwo","malarstwo"]
        },
       {
       'firstName': 'Peter',
       'lastName': 'Jones',
       'zainteresowania': ["żeglarstwo","wędkowanie"]
        },
        
    ]
}

let pierwszaOsoba = `${jsonObject.employees[0] } ${jsonObject.employees[0].lastName} interesuje się ${jsonObject.employees[0].zainteresowania}` ; //ES6

console.log(pierwszaOsoba);

let stringSzesc= `Jakiś $ {2+2} string`;
let stringPiec =  "Jakiś" + "super string w środku" + "string";