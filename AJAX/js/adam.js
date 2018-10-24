//ustawiam url
const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";

//ustawiam przycisk w html z id 'get'
const mojPrzycisk = document.getElementById('get');

//tworze funkcje pobierzDane
function pobierzDane(method, endpoint) { //metoda i url-typ zawartości; endpoint = url //dane od backendu

    //ajax
    var httpReq = new XMLHttpRequest(); //obiekt odpowiedzialny za zapytania

    // otwieram połączenie ustawiając metodę oraz adres url
    httpReq.open(method, endpoint);

    //wysyłam request do serwera
    httpReq.send();

    //nasłuchuję zdarzenia readystatechange
    httpReq.addEventListener('readystatechange', function () {
        
        if (httpReq.readyState == 4 && httpReq.status == 200) {
            //jeśli status i readyState są odpowiednie, to pobieram dane i konwertuje je na JSONa
            var data = JSON.parse(httpReq.responseText); //odpowiedź serwera jest w ciągu tekstowym Text

            //tworzę strukturę HTML do wyświetlenia na stronie;
            //`` backticks
            let html = `<p>UserId: ${data.userId}</p>
            <p>UserName: ${data.userName}</p>
            <p>UserURL: ${data.userURL}</p>
            <hr>`;

            //wrzucam stworzoną strukturę do HTLM
            document.getElementById('output').innerHTML = html;

            console.log(data);
        }

    });
}

//nasłuch addEventListener
mojPrzycisk.addEventListener('click', function () {
    pobierzDane("GET", url); //funkcja wywołana..trzeba stworzyc ja powyzej
});
