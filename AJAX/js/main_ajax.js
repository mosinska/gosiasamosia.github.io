const btn = document.getElementById('get');
const output = document.getElementById('output');
const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";

function ajax() {

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
            show(data); // funkcja sie wykona jak dane zostaną pobrane...na zewnatrz funkcji nie zadziała, gdyż nie zostaną pobrane dane
        }
    });
}

function show(response) {
    console.log(response);
}

var result = ajax();

