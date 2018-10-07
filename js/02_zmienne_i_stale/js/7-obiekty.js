//ES5
/*let person ={
    name: 'Marcin',
    height: 184,
    print: function(){
        console.log(this.name);
    }
}*/

//ES6
/*
let person = {
    name: 'Marcin',
    height: 184,
    print() {
        console.log(this.name);
    }
}
*/

let adam = {
    wiek: 100,
    wlosy: false,
    oczy: true,
    nazwisko: 'Kowalski'
};

console.log(adam);
console.log(adam.wiek);
console.log(adam.wlosy);
console.log(adam.oczy);
console.log(adam.nazwisko);

console.log(adam.nazwisko, adam.wlosy);

