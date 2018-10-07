let liczba = "wartość" + 50 + 50;

let tekst = "Tu będzie tekst - string";

let trueOrFalse = true;

let tablica = [1,4,60].length; //deklaracja tablicy[0]

let object = {klucz: "wartość"}; // object ["klucz"] lub object.klucz
//console.log(typeof liczba);
//console.log (typeof tablica); -wyswietli typ obiektu
//console.log(tablica); //- wyswietli ilosc elementow
console.log(object);
console.log(typeof liczba);

let zdanie = "Ala ma \n"+"kota"
console.log(zdanie);

let zdanie2 = "Ala ma 'rudego' kota"
console.log(zdanie2);

let zdanie3 = "Ala ma \"rudego\" kota"
console.log(zdanie3);

//ES5

let number = 10;
let zdanieNumber = "Wyświetl " + number + " i zakończ działanie! I to już!"
console.log(zdanieNumber);

//ES6

let number4 = 10;
let zdanie4 = `Wyświetl ${number4} i zakończ działanie`;

console.log(zdanie4);

//BOOLEAN true or false

let element = document.getElementById('id element')
    if(element !== null){
        //logika programu
}