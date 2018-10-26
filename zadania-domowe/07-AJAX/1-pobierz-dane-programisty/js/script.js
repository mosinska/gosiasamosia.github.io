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

//podączyć jquery <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

const url = "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php";

var btn = $('#klik');
// const btn = getElementById.
//const btn = document.getElementById("klik");
//  .onclick = `${this.imie}`

function pobierzDane(endpoint) {

  $.getJSON({
    url: url,
    method: "GET",
    success: function(response) {
    //jesli dane istnieja stworz strukture html
    var html = `imie: ${response.imie} <hr>
                nazwisko: ${response.nazwisko} <hr>
                zawod: ${response.zawod}`;

    document.getElementById("dane-programisty").innerHTML = html;
  }

});
}

btn.click(function () {
  pobierzDane(url);
  console.log($(this).text());
});
