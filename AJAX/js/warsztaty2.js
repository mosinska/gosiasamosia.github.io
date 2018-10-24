const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";

const mojPrzycisk = $('#get');




pobierzDane.addEventListener

mojPrzycisk.click( function() {
    pobierzDane(url);
    console.log( $( this ).text() );

} );



//var jakisElement = $( "#idElementu" ); //jquery



//mojPrzycisk.addEventListener('click', function () {
//    pobierzDane("GET", url); //funkcja wywołana..trzeba stworzyc ja powyzej
//})
                         
