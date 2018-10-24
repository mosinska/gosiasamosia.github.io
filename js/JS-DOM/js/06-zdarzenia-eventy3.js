//ONCLICK
let naszH2 = document.querySelector("#sectionFirst > h2");

function pokazNaClicku() {
    console.log(naszH2.innerHTML);
}

naszH2.onclick = pokazNaClicku;
//naszH2.removeEventListener("click", pokazNaCliicku)
//naszH2.onclick = pokazNaClicku();//wyswietla sie klikniete

//ADD EVENTS by addEventListener()...

//let mainHeader = document.getElementById
let mainHeader = document.querySelector("#main-header");

function mouseOverEvent() {
    mainHeader.style.color = "red";
    //this.style.color = "red"; // alternatywa
}

function mouseOutEvent() {
    mainHeader.style.color = "green";
    //this.style.color = "green"; // alternatywa
}

mainHeader.addEventListener("mouseover", mouseOverEvent);
mainHeader.addEventListener("mouseout", mouseOutEvent);

mainHeader.removeEventListener("mouseover", mouseOverEvent);
mainHeader.removeEventListener("mouseout", mouseOutEvent);

console.log(mainHeader);
                    
// preventDefault()

let superLink = document.getElementById("super-link");
//
//function zablokuj(domyslneZachowanie) {
//    domyslneZachowanie.preventDefault();
//    
    // stopPropagation()
    
    function clickHeader() {
        console.log("Kliknięto w <header>");
    }
    
    function clickH1(domyslneZachowanie) {
        domyslneZachowanie.stopPropagation();//zatrzyma wszystko co powyzej w rodzicu(funkcje)//bubling //propagation
        console.log("Kliknięto w <h1>");
    }
    document.querySelector("header").onclick = clickHeader;
    document.querySelector("#main-header").onclick = clickH1;
    console.log("FUNKCJA 'click' DZIAŁA");
//}

//superLink.onclick = zablokuj;
            