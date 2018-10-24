//Inicjalizacja tablicy
var tab = new Array(5,7,4,8,3,9,6,7,3,12,4,6,9);
var suma = 0;
document.write("Tablica: ");
//Wyświetlenie tablicy
for (i = 0; i < tab.length; i++) {
document.write(tab[i] + ", ");
//Dodanie do sumy i-tego elementu tablicy
suma += tab[i];
}
//Wyświetlenie wyniku
document.write("<br />Suma elementów tablicy wynosi: " + suma);