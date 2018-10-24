//ANIMACJE JQuery
//hide()
//show()
//
//fadeIn()
//fadeOut()
//
//slideUp
//slideDown

//$( selector ).animate( { params }, speed, callback );
//params - właściwości CSS, które mają być animowane
//speed - szybkość animacji
//callback - funkcja która wykona się po zakończeniu animacji

//$( "button" ).click( function() {
//$( "div" ).animate( { left: '250px' } );
//} );
//$( "button" ).click( function() {
//$( "div" ).animate( {
//left: '250px',
//opacity: '0.5',
//height: '150px'
//} );
//} );
//$( "button" ).click( function() {
//$( "div" ).animate( { left: '100px' }, "slow" );
//$( "div" ).animate( { fontSize: '3em' }, "slow" );
//} );

$('p').on('click', function () {
    //    $(this).hide(1500);
    //    $(this).slideUp(1500);
    $(this).fadeOut(1500);
});

$('h1').on('click', function () {
    //        $(this).show(1500);
    //    $(this).slideDown(1500);
    $('p').fadeIn(1500);
});

$('.anim').on('click', function(){
    $(this).animate(
    {
        'width': '600px',
        'height': '600px',
        'left': '300px'
        
    }, 2500, function (){ //czas i funkcja ktora wykona sie po zdarzeniu
        $('body').addClass('decor');
    }
    );
});
