//ZNAJDOWANIE ELEMENTÓW
//let elementFirst = document.getElementById("parFirst");
//pobierze nam element o id "parFirst"

//let elementsTable = document.getElementsByClassName("link");
//pobierze nam element o klasie "link"

//let allP  = document.getElementsByTagName("p");
//pobierze nam element po tagu "p"

//let parFirst = document.getElementById ("parFirst");
//console.log(parFirst);

//let linki = document.getElementsByClassName ("link");
//console.log(linki);
//żeby coś zmienić wchodzimy w ZBADAJ HTML Collection

//let paragrafy = document.getElementsByTagName ("p");
//tag - nazwa znacznika
//1 console.log(paragrafy);
//2 console.log(paragrafy[0]); pierwszy element w tablicy0
//
//let onlyLink = document.querySelector(".link");
//console.log (onlyLink);//wyszukuje pierwszy link

let onlyLink = document.querySelectorAll(".link");
console.log (onlyLink)//wszystkie linki
