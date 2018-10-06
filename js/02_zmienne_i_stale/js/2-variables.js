console.log("Działa variables!");

//var - stara nazwa zmiennej - silnik js wyciaga wszystkie zmienne które zaczynaja sie od var , a nie od let
//hojsting
//let - deklaracja zmiennej (jak var)

let imie;
//zasada camel case jesli zmienna sklada sie z dwoch slow odznaczamy ja duza litera zamiast spacja
imieMeskie = "Kacper";

imie = "Monika";

//imie = "Gosia";

imie = imieMeskie;

let liczba = "5000" + "5000"; //(tekstowe);
//let liczba = 5000 + 5000; // (policzalne);

const innaLiczba = 1000;
//const liczba stała, np. liczba pi, rok urodzenia itp.
//innaLiczba = 4000; - nie zadziała, bo const jest stała

console.log(innaLiczba);