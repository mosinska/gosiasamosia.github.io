//TABLICA ARRAY
/*let names =["Krystian","Ala","Ania"];

console.log(names(1));*/

let tablica = ["Monika", "Łukasz", "Konrad"]; //tablica nie wie o poniższych zmiennych
console.log(tablica);

tablica[0] = "Karolina";

tablica.push("Ewa"); //dodaje na koncu element
tablica.unshift("Adam"); //dodaje element na początku

tablica.shift(); //usuwa element na poczatku
tablica.pop(); //usuwa element na koncu

//tablica.splice(1, 2, "Przemek");//ucina do dwoch elementow

//tablica.splice(1, 0, "Przemek");//wstawia "Przemek" na 1 miejscu w tablicy
/* 1- znajdź element pod indexem 1
    2-usun dwa elementy
    "Przemek" dodaj
*/
tablica.splice(2, 0, "Przemek", "Loren");

//console.log(tablica);

tablica.reverse();
console.log(tablica);

console.log(tablica.indexOf("Karolina"));//Karolina jest 4 w tablicy
console.log(tablica.indexOf("blablabla"));//element znajduje się poza tablicą (-1)

//let akademia = []; //pusta tablica