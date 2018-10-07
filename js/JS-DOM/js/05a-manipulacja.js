let tablicaParagrafow = document.querySelectorAll("#parSecond p"); 


tablicaParagrafow.forEach(function (element, index) { //element-nazwa elementu, index-kolejnosc w tablicy
//    console.log(element,index);
    element.setAttribute("class", "pierwsza-klasa");
});

let allLinks = document.getElementsByClassName("link"); // [] ze wszystkimi linkami

allLinks[1].href = "http://www.google.com";
//allLinks[1].className = "google-class"; // zmienia-dodaje-klasę
allLinks[1].classList = "google-class"; // zmienia-dodaje-klasę
//allLinks[1].classList.add("link"); //deklasowanie dodanej(wyżej) klasy
//
//console.log(allLinks[1].classList);
//console.log(tablicaParagrafow);
console.log(allLinks);