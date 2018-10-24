/*Stwórz stronę zawierającą przycisk pt. "Pobierz dane"

Po kliknięciu przycisku pobierz dane o programiście w formacie JSON z internetu za pomocą Javascript lub jQuery:

https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php

{"imie":"Piotr","nazwisko":"Szapiel","zawod":"Programista","firma":"Akademia 108"}

Pobrane dane wyświetl poniżej przycisku w nowym, stworzonym DIVie o id="dane-programisty".

Zadanie domowe zrób za pomocą GitHub Pages.

Podpowiedź przed wysłaniem zadania do sprawdzenia:
- pracując z mechanizmem AJAX używaj wbudowanych funkcji jQuery

Dodaj
Podzagadnienia*/

class Osoba{
    
}


const dane= "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php"

/*var btn = document.getElementById('dane-programisty').innerHTML ;*/
const btn = $("#przycisk");

function pobierz(abc) {
    
    $.getJSON(abc, function(result){
        
   document.getElementById('dane-programisty').innerHTML = dane;
    })
    

}

btn.click( function() {
    pobierz(dane);
    console.log($(this).text());
    
});