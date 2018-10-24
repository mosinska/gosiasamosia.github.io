//ONCLICK
let naszH2 = document.querySelector("#sectionFirst > h2");

function pokazNaClicku() {
    console.log(naszH2.innerHTML);
}

naszH2.onclick = pokazNaClicku;
naszH2.removeEventListener("click", pokazNaCliicku)
//naszH2.onclick = pokazNaClicku();//wyswietla sie klikniete

//ADD EVENTS by addEventListener()...

//let mainHeader = document.getElementById
let mainHeader = document.querySelector("#main-header");

mainHeader.mouseOverEvent("mouseover", function(){
    mainHeader.style.color = "red";
    //this.style.color = "red"; // alternatywa
});

mainHeader.mouseOutEvent() {
    mainHeader.style.color = "green";
    //this.style.color = "green"; // alternatywa
});

mainHeader.addEventListener("mouseover", mouseOverEvent);
mainHeader.addEventListener("mouseout", mouseOverEvent);

mainHeader.removeEventListener("mouseover", mouseOverEvent);
mainHeader.removeEventListener("mouseout", mouseOverEvent);



console.log(mainHeader);
                                        
                                        