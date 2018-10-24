const btn = document.getElementById('get');
const output = document.getElementById('output');
const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";

//wywołuję funkcję pobierzDane
function pobierzDane(method, endpoint) {

    let httpReq = new XMLHttpRequest();
    httpReq.open(method, endpoint);
    httpReq.send();

    httpReq.addEventListener('readystatechange',
        function () { //Przesyłanie danych
            if (httpReq.readyState == 4 && httpReq.status == 200) {

                let data = JSON.parse(httpReq.responseText);
                console.log(data); //sprawdzam
            }
        });
}
//        let html = `<p>UserId: ${data.userId}</p>
//            <p>UserName: ${data.userName}</p>
//            <p>UserURL: ${data.userURL}</p>
//            <hr>`;

$.getJSON(url, function (response) {
    let html = `UserID: ${response.userId} UserName: ${response.userName} UserURL: ${response.userURL}`
})
//wywołuję funkcję na przycisku
btn.addEventListener('click', function () {
    console.log("DZIAŁA!");
    pobierzDane("GET", url);//zagniezdzam funkcje pobierzDane

    document.getElementById("output").innerHTML = html;

});



//HTMLButtonElement.


//window.innerHeight;









////function showText() {
////console.log( "click" );
////}
////document.getElementById( "link" ).onclick = showText;
//
//var button = document.getElementById("pobierz");
//
//const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";
//
//function pobierzDane(event)
//{
//  alert('Przycisk został wciśnięty!');
//    console.log(aaa);
//    
////    if{$.getJSON(url, function (response) { //endpoint, funkcja
////
////    let html = `UserID: ${response.userId} <hr>
////                User Name: ${response.userName}<hr>
////                User Url: ${response.userURL}`;
////
////    document.getElementById('output').innerHTML = html;}
////      
////                 button.addEventListener('command', pobierzDane, true); 
//                 document.getElementById( "pobierz" ).onclick = pobierzDane;
//
//
//
//}
//
//
//
//
//
////$.ajax({
////    url: url,
////    method: "GET",
////    success: function(response){
////        let html = `UserID: ${response.userId} <hr>
////                    User Name: ${response.userName}<hr>
////                    User Url: ${response.userURL}`;
////        
////        document.getElementById('output').innerHTML = html;
////    }
////});
