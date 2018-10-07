//RODZICE
//let pierwszyDiv = document.getElementById("parFirst").parentNode; //elementy HTML
//let pierwszyDiv = document.getElementById("parFirst").parentElement;// najblizszy element HTML
let pierwszyDiv = document.getElementById("parFirst").parentElement.parentElement;// przejscie do BODY
console.log(pierwszyDiv);

//DZIECI
//let header = document.getElementsByTagName("header")[0];
//let header = document.getElementsByTagName("header")[0].childNodes;
//let header = document.getElementsByTagName("header")[0].children;
//let header = document.getElementsByTagName("header")[0].firstElementChild;
//let header = document.getElementsByTagName("header")[0].lastElementChild;
//console.log(header);

//RODZEŃSTWO

//let linki = document.querySelectorAll(".linki")//pobierze linki
let linki = document.querySelectorAll("#sectionFirst .link")[1];

//console.log(linki);

//console.log(linki.previousElementSibling);//przechodzi do wyzszego elementu
console.log(linki.nextElementSibling);//przechodzi do niższego/wczesniejszego elementu