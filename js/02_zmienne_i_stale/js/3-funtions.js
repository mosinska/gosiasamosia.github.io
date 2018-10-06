/*
//FUNKCJA - instrukcja, która wykonuje dane zadanie
function nazwaFunkcji() {
    //kod funkcji;
}

const nazwaFunkcji = function{
    //kod funkcji anonimowej
}
nazwaFunkcji(); //wywołanie funkcji
*/
//funkcja zawiera jeden parametr "Karolina";
/*function wyswietlImie() {
return "Karolina";
}
wyswietlImie();
console.log(wyswietlImie());*/

/*return zwraca funkcje
function wyswietlImie(imie) {
    return imie;
}

console.log(wyswietlImie("Karol"));
*/

/*nic nie zwraca - nie wykonuje funkcji, przechowuje dane
function wyswietlImie(imie) {
    console.log(imie);
}

wyswietlImie("Krystian");*/

//przypisanie funkcji do zmiennej

/*
let wyswietlImie = function wyswietlImieWSrodku(imie) {
    console.log(imie);
}

wyswietlImie("Krystian");
*/

let wyswietlImie = function (imie) {
    return imie;
}

let wynikWyswietlImie = wyswietlImie("Krystian");

console.log(wynikWyswietlImie);
