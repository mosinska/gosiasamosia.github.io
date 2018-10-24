let tablica = [1, 2, 3, 4, 5, 6]

function (tablica) {
    let dodawanie = 1 + 2 + 3 + 4 + 5 + 6;
    let mnozenie = 
    console.log(dodawanie);
    console.log(mnozenie);

}

//let liczby = [1, 2, 3, 4, 5, 6];
//let n = 1;
//
////function wynik {
//    for (i = 1; i < 10; i++) {
//        let dodawanie = n += liczby[i];
//    }
////}
//console.log (dodawanie);


let numery = [1, 2, 3, 4, 5, 6];
let number=6;
//
//for (let i = 1; i <= number; i++) {
//    console.log(i);
//}


let sum = numery.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}
console.log(myFunction(total, value, index, array));

//var numbers1 = [45, 4, 9, 16, 25];
//var sum = numbers1.reduce(myFunction);
//
//function myFunction(total, value, index, array) {
//    return total + value;
//}
//
//console.log(myFunction);

//var numbers = [1, 2, 3, 4, 5, 6];
//
//var sum = numbers.reduce(myFunction);
//
////document.getElementById("demo").innerHTML = "The sum is " + sum;
//
//function myFunction(total, value) {
// let wynik = total + value;
//console.log(wynik);
//}

//function myFunction(item) {
//    document.getElementById("demo").innerHTML = numery.reduce(getSum, 0);
//
//}
//let tablica = new Array[1, 2, 3, 4, 5, 6];
//let dodawanie = 0;
//let mnozenie = 0;
//
////function wynik(tablica, index) {
//for (i = 0; i < tablica.length; i++) {
//    dodawanie += tablica[i];
//    console.log(dodawanie);
//}
//
//}

//console.log(wynik(tablica));


//function myFunction(value, index, array) {
//    return value * 2;
//}


////Inicjalizacja tablicy
//var tab = new Array(5,7,4,8,3,9,6,7,3,12,4,6,9);
//var suma = 0;
//
//for (i = 0; i < tab.length; i++) {
//
////Dodanie do sumy i-tego elementu tablicy
//suma += tab[i];
//}


//let tablica = [1,2,3,4,5,6]
//function wynik(tablica) {
//    let dodawanie = 1 + 2 + 3 + 4 + 5 + 6;
//    let mnozenie = 1 * 2 * 3 * 4 * 5 * 6;
//    console.log(dodawanie);
//    console.log(mnozenie);
//
//}
//
//var wynikFunkcjiJeden = wynik (1,2,3,4,5,6);
//
//
//console.log (wynik);


//function iloczyn (parametr1, parametr2, parametr3){
//    var wynik = parametr1*parametr2*parametr3
//    return wynik;
//}
//
//var wynikIloczynu = iloczyn (1,4,5);
//
//console.log (wynikIloczynu);


//Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.
//
//Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
//
//Podpowiedź przed wysłaniem zadania do sprawdzenia:
//- użyj pętli for lub forEach w zadaniu
