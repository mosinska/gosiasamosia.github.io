//Inicjalizacja tablicy
var tab = new Array(1,2,3,4,5,6);
var dodawanie = 0;
var mnozenie = 1;

for (i = 0; i < 6; i++) {
//console.log(tab[i]);
//Dodanie do sumy i-tego elementu tablicy
dodawanie += tab[i];
mnozenie *= tab[i];
}

function wynik{
console.log(dodawanie);
console.log(mnozenie);
}


//
////Inicjalizacja tablicy
//var tab = new Array(5,7,4,8,3,9,6,7,3,12,4,6,9);
//var suma = 0;
//document.write("Tablica: ");
////Wyświetlenie tablicy
//for (i = 0; i < tab.length; i++) {
//document.write(tab[i] + ", ");
////Dodanie do sumy i-tego elementu tablicy
//suma += tab[i];
//}
////Wyświetlenie wyniku
//document.write("<br />Suma elementów tablicy wynosi: " + suma);


//let tablica = [1, 2, 3, 4, 5, 6]
//
//function (dodawanie) {
//   for(let i=0; i<10; i++;)
////    let mnozenie = 1 * 2 * 3 * 4 * 5 * 6;
//    
////    console.log(mnozenie);
//
//}
//console.log(dodawanie);

//function (1,2,3,4,5,6){
//    let dodawanie = 1+2+3+4+5+6;
//    let mnozenie = 1*2*3*4*5*6;
//    console.log(dodawanie);
//    console.log(mnozenie);
//    
//}