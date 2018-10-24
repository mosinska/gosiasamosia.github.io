// pobranie tekstu
//$( 'selektor' ).text( "tekst" );

//let h1Text = $('h1').text();
//console.log(h1Text);

//ustawianie tekstu  $('h2').text

//setTimeout(function(){
//    $('h2').text("Nowa treść h2");//wstawia ten tekst po 4 sek
//},4000); //4000milisek czyli 4 s

// pobieranie html
let html = $('body').html();
//console.log(html);

//zmiana html  $('body').html

//setTimeout(function(){
//    $('body').html("<h3>Nowa zawartość elementu body</h3><div>Lorem lorem</div>");//wstawia ten tekst po 2 sek
//},2000);

//dodawanie do elementu treści jak i html - append dodaje na koniec

$('h2').append("<span style='color:red;'> Span w H2</span>");

//dodawanie do elementu treści jak i html - prepend dodaje na poczatku

$('h2').prepend("<span style='color:red;'> Span w H2</span>");

//dodawanie za i przed -treści do elementu jak i html - after

$('a').after(' <div style="padding:30px; background:green;"></div>');
$('a').before(' <div style="padding:30px; background:green;"></div>');

//usuwanie
$('h1').remove();

//usuwanie zawartosci elementu
$('h1').empty();

//Style
$('p').css({
    'font-size': '2rem',
    'color': 'blue',
    'padding': '20px'
})

//Style
$('.paragraf-next').css({
    'font-size': '2rem',
    'color': 'grey',
    'padding': '20px'
})

//dodawanie i usuwanie klas
//setTimeout(function(){
//    $('body').addClass('decor');
//},2000);

//dodano klase
//setTimeout(function(){
//    $('body').addClass('page');
//},2200);
////usunieto klase
//setTimeout(function(){
//    $('body').removeClass('page');
//},4000);

//set interval
setInterval(function (){
    $('body').toggleClass('decor');
},150);
