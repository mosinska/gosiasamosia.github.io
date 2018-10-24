 function pobierzDane(callBack) {
    //pobieranie danych AJAX - AJAX zwraca nam json`a

    var dane = [
        {
            id: 10021,
            name: "Przykład 1",
        },
        {
            id: 10022,
            name: "Przykład 2",
        },
        {
            id: 10023,
            name: "Przykład 3",
        },
    ];

if(dane){//jesli dane istnieja wyswiet dane;
    return dane;
//}else{ //opcjonalnie else
    return false;
}
}  
    
    
//    callBack(dane);///przekazywanie funkcji do innej funkcji;wywolywanie funkcji w funkcji //function wyswietlDane(data) ??
//    console.log(dane);
////    
//    if(dane) {//jeśli dane są to je wyświetl
//        wyswietlDane(dane);
//    }
}
//wywoływanie funkcji w funkcji
function wyswietlDane(data) { //data - to dowolna nazwa tablicy//wyswietla danie pobrane z AJAX`a
    letoutput = document.getElementById('output');
    let html = "";
    
    //break i continue nie dziala w for each
    //forEach przyjmuje funkcje i element tablicy (arr-calosc tablicy)
    data.forEach(function(element,index){
        html += "<p>ID: " + element.id + ", NAME: " + element.name + "</p>"
    });
    
    output.innerHTML = html;
}

var pobraneDane = pobierzDane();
wyswietlDane(pobraneDane);
//console.log(pobraneDane);

//pobierzDane(wyswietlDane);

//let noweDane= [ //uruchamianie nowych danych w tej samej funkcji
//    {
//        id: 1,
//        name:"Adam"
//    }
//    {
//        id: 1,
//        name:"Adam"
//    }
//];
//
//wyswietlDane(noweDane);
//]