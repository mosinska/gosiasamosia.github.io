//$( selektor ).text(); // zwraca zawartość tekstową ze wszystkich dopasowanych selektorów
//$( selektor ).text( "tekst" ); // ustawia tekst we wszystkich dopasowanych selektorach
//np.
$( "p" ).text( "Hello world!" );

//append() - wstaw zawartość na końcu wybranego selektora
//prepend() - wstaw zawartość na początku wybranego selektora
//after() - wstaw zawartość za wybranym selektorem
//before() - wstaw zawartość przed wybranym selektorem

//np.
//$( "p.green" ).append( "Hello world!" );

//remove() - usuwa wybrany element i elementy znajdujące się
//wewnątrz tego elementu
//empty() - usuwa elementy znajdujące się wewnątrz wybranego
//elementu
//np.
//$( "p" ).empty();

//$( selektor ).css( "wlasnoscCSS" ); // zwraca określoną własność CSS z pierwszego dopasowanego selektora
//$( selektor ).css( "wlasnoscCSS", "wartosc" ); // ustawia własność CSS we wszystkich dopasowanych selektorach
//np.
//$( "p" ).css( "color" ); // zwróci kolor tekstu pierwszego elementu p
//$( "p" ).css( "color", "red" ); // ustawi kolor tekstu wszystkim elementom p
//19

//$( selektor ).val(); // zwraca wartość z pierwszego dopasowanego pola formularza
//$( selektor ).val( "tekst" ); // ustawia wartość do wszystkich dopasowanych pól formularza
//np.
//$( "input#name" ).val();
//$( "input#email" ).val( "name@gmail.com" );
//20

//addClass(); // dodaje jedną lub więcej klas do wybranego elementu
//removeClass(); // usuwa jedną lub więcej klas z wybranego elementu
//np.
//$( "div" ).addClass( "important" );
//$( "p" ).removeClass( "green", "important" );
