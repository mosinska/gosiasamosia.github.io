/*
function addNumbers (parametr1,parametr2) {
    let result = parametr1 +parametr2; //zmienna lokalna
    return result;

}

let sum = addNumbers(1,2); //zmienna globalna
*/

/*let number = 5;
console.log(number);

function showNumber (num) {
    
    return num;
}

console.log(showNumber(10));*/


let number = 5;
console.log(number);

function showNumber (num) {
    let number = "w środku " + 15;
    //return num; //gdyby return był ponad console log funkcja nie zadziała. return kończy funkcję;
    if (2 + 2 ==4){
        let number = "w środku if ()" + 50;
    console.log(number);
    }
    return num;//jesli nie bedzie return num - to ostatnie console log nie zadziała //
 }

showNumber(10);
