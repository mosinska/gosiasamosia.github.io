//MANIPULACJA
//zmiana tekstu w akapicie
//let parSecond = document.querySelector("#parSecond > p").innerHTML;//pobiera znaki z paragrafu
//console.log(parSecond);

let tablicaParagrafow = document.querySelectorAll("#parSecond p"); //pobiera wszystkie paragrafy

//tablicaParagrafow.forEach();

tablicaParagrafow.forEach(function (element, index) { //element-nazwa elementu, index-kolejnosc w tablicy

    element.style.color = "red";//css w js (stosowanie np. przy formularzach)
    element.innerHTML = "Nowy tekst"; //wstawia tekst w HTML
    
    element.outerHTML = "<a href='#'>Teraz link </link><br>"; //wstawia link w HTML // tekst oraz tagi

    //będąc w pętli klasy sa nadpisywane
    
//    console.log(element.innerHTML); //wyswietla tekst bez znacznikow
});

//console.log(tablicaParagrafow);
