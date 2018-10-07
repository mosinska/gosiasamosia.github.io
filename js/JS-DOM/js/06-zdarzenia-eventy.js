//NAJBARDZIEJ POPULARNE - WEB EVENTS
//click
//bdclick
//onmouseover
//onmouseout
//
//onkeydown
//onkeyup
//onkeypress
//
//touchmove
//touchstart
//touchedend
//
//blur - gdy pole formularza przestaje byc aktywne
//change - gdy pole ulega zmianie
//focus - gdy klikamy w pole
//submit - wysyłanie formularza

//<a href="#" onclick="alert(tekst alertu z paragrafu)"> - z HTML

//z JS
function showText(){
    console.log("click");

}

//document.getElementById("link").onclick = showText; //funkcja zostanie wywołana tylko po kliknięciu na element //bez onclick odpali się od razu

//Tej funkcji nie mogli byśmy usunąć
//document.getElementById("link").addEventListener(
//    function {
//    console.log("click");
//
//});

//document.getElementById("link").addEventListener(
//    function(nazwajakas) {
//e.preventDefault();
//alert("Ten link nigdzie nie przeniesie");
//
//});

//