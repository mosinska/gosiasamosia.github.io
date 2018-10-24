const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";

const mojPrzycisk = $('#get');

function pobierzDane(endpoint){
    //za pomocą jQuery i jego wbudowanej funkcji $.getJSON pobieram JSONa z serwera

    $.getJSON(endpoint, function(result){
        //jesli dane istnieja stworz strukture html
        var html = `<p>userId: ${result.userId} | userName: ${result.userName} | userURL: ${result.userURL}</p>`;
        
        //wstawiam strukture html na strone
        document.getElementById('output').innerHTML = html;
    })

}

mojPrzycisk.click( function() {
    pobierzDane(url);
    console.log( $( this ).text() );

} );



//var jakisElement = $( "#idElementu" ); //jquery



//mojPrzycisk.addEventListener('click', function () {
//    pobierzDane("GET", url); //funkcja wywołana..trzeba stworzyc ja powyzej
//})
                         
