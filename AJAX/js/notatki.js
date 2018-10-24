notatki

const btn = document.getElementById('get');
const output = document.getElementById('output');
const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";

function ajax(method, url) {
    console.log()
}
//najpierw piszemy kod a potem ponizszy kod wklejamy do powyzszej funkcji
let httpReq = new XMLHttpRequest();
httpReq.open('GET', url);
httpReq.send();

httpReq.addEventListener('readystatechange', function () {

    //    console.log(`readyState: ${httpReq.readyState}`);
    //    console.log(`status: ${httpReq.status}`);

    if (httpReq.readyState == 4 && httpReq.status == 200) {
        //console.log(httpReq);
        let data = JSON.parse(httpReq.responseText);
        //console.log(data);
        console.log(data);
    }
});

//{}klamry to obiekt

//jak nie działa:
//sprawdź literówki
//sprawdź czy wywołałeś funkcję
//sprawdzić getElementBy czy jest dobrze podłączona Klasa Id Tag
