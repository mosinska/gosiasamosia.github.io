//$( 'a.guzik' ).on( 'click', function() {
//console.log( 'Guzik został naciśnięty.' );
//} );

//'click': function() {
//// kod do wykonania
//},
//'mouseover': function() {
//// kod do wykonania
//}
//} );

//Wybrane zdarzenia jQuery:
//click() - gdy użytkownik kliknie na wskazany element
//dblclick() - gdy użytkownik dwukrotnie kliknie na wskazany element
//mouseenter() - gdy wskaźnik myszy wejdzie na wskazany element
//mouseleave() - gdy wskaźnik myszy opuści wskazany element
//resize() - gdy zmieniany jest rozmiar wskazanego elementu //np.element window
//load() - gdy wybrany element jest ładowany
//scroll() - gdy użytkownik skroluje wskazany element
//submit() - gdy formularz jest wysyłany

///developer.mozilla.org Events 

$('p').on('click',function(){
   $(this).toggleClass('decor-bold'); 
});

$('h1').on('click',function(){
   $(this).text('BLA BLA BLA'); 
});

$(window).on('scroll', function(event){
   console.log(parseInt($(window).scrollTop() ) ); //parseInt - liczba całkowita
});

$('h1').on({// tak jak hoover w css, z tymże w cssie nie jest możliwe by dziecko zmieniało rodzicaq
    'mouseenter': function(){
        $('body').addClass('decor');
    },
    'mouseleave': function(){
        $('body').removeClass('decor');
    },
})