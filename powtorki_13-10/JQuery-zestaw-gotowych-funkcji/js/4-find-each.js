//PORUSZANIE SIE PO DOM JQuery
//$(selector).find(filter); np $(div).find(".first).css({"color":"red","border-color":"red"});

////$( "button" ).click( function() {
//$( "li" ).each( function() {
//console.log( $( this ).text() );//this bierzący element listy //w indexie
//} );
//} );

//$('body p')

var body = $('body'); //to jest złe

//METODA find
var p = body.find('.paragraf').eq(0); //eq(0) element 0 w indeksie 

p.css({
    'margin': '20px',
    'color': 'green',
    'font-size': '3rem'
})

//$('.paragraf').each(function(index,element){//w JQuery funkcji jest odwrotnie niż w js
//    $(this).append(`<span style='color: orange;'> INDEX ELEMENTU: ${index}</span>`); //"<span> INDEX:</span>" //ES6 żeby móc używać zmiennych w stringach
//});

//$('.paragraf').each(function(index,element){//w JQuery funkcji jest odwrotnie niż w js
//    $(this).before(`<span style='color: orange;'> INDEX ELEMENTU: ${index}</span>`); //"<span> INDEX:</span>" //ES6 żeby móc używać zmiennych w stringach
//});

$('.paragraf').each(function(index,element){//w JQuery funkcji jest odwrotnie niż w js
//    $(this).prepend(`<span style='color: orange;'> INDEX ELEMENTU: ${index}</span>`); //"<span> INDEX:</span>" //ES6 żeby móc używać zmiennych w stringach
    var txt = $(this).text();//pobieram element
    body.prepend(`<strong class='decor-bold'> ${txt} </strong>`);
});

//console.log(p);
