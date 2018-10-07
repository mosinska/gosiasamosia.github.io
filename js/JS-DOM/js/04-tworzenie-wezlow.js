//TWORZENIE ELEMENTÓW
//document.createElement  //tworzy element HTML
//document.createTextNode //tworzy tekst
//document.createAttribute//tworzy atrybut

let istniejacyWezel = document.getElementById("parFirst");
//console.log(istniejacyWezel);

let newParagraf = document.createElement("p");
//let newParaagrafText = document.createTextNode

//appendowanie-dodawanie
//newParagraf.appendChild(document.createTextNode("Text z Java Script'u"));

//inny sposób wstawiania tekstu
//let newParagrafText = document.createTextNode("Text z Java Script'u");//ale raczej unikamy tworzenia wielu zmiennych
//albo text content
//istniejacyWezel.appendChild(newParagraf);//Wstawianie tekstu z JS do HTML 
//istniejacyWezel.removeChild(newParagraf);

newParagraf.appendChild(document.createTextNode("Text z Java Script'u"));
newParagraf.setAttribute("class", "custom-class");// dodaje atrybut class
newParagraf.removeAttribute("class");// usuwa atrybut class

console.log(newParagraf);


//DODAWANIE ELEMENTÓW



//USUWANIE ELEMENTÓW