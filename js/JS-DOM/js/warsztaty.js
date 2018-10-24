/*NOTATKI
//petla for each

let button = document.querySelector("input");


//    let paragraf1 = document.getElementById("pierwszy");
//    let paragraf2 = document.getElementById("drugi");
button.onclick =
    function ustawTlo(paragraf1, paragraf2) {

        parafraf1.style.backgroundColor = "red";
        console.log("Funkcja działa");
    }


// document.querySelector("przycisk").onclick = ustawTlo;*/
//WERSJA ALEXA
//function color() {
//    document.getElementById("pierwszy").style.backgroundColor = "red";
//    document.getElementById("drugi").style.backgroundColor = "green";
//    document.querySelector("body").style.backgroundColor = "black";
//
//}
//
//document.querySelector("button").onclick = color; //albo onclick="color()" w html

//wersja ULI
document.querySelector("button").onclick = tlo;

function tlo(){
  let paragrafs = document.getElementsByTagName("p");


paragrafs[0].style.backgroundColor = "red";
paragrafs[1].style.backgroundColor = "green";

}

document.querySelector("button").onclick = tlo;
////wersja Sebastiana:
//function ustawTlo() {
//    let paragrafs = document.getElementsByTagName("p");
//
//    //    array -przekształcenie tablicy
//    paragrafs = Array.from(paragrafs);
//
//    paragrafs.forEach(function (element, index) {
//        if (index % 2 == 0) { //sprawdzaparzystosc
//            element.style.backgroundColor = "red";
//        } else {
//            element.style.backgroundColor = "green";
//        }
//        //        console.log(element);
//    })
//}
//
//document.querySelector("button").onclick = ustawTlo; //albo onclick="color()" w html
