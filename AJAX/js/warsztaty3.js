const url = "https://jsonplaceholder.typicode.com/users";


window.addEventListener(scroll)

onscroll( function() {

    console.log();

} );

function pobierzDane(endpoint){
    //za pomocą jQuery i jego wbudowanej funkcji $.getJSON pobieram JSONa z serwera

    $.getJSON(endpoint, function(result){
        //jesli dane istnieja stworz strukture html
        var html = `<p>userId: ${result.userId} | userName: ${result.userName} | userURL: ${result.userURL}</p>`;
        
        //wstawiam strukture html na strone
        document.getElementById('output').innerHTML = html;
    })

}

pobierzDane(url);

onscroll( function() {

    console.log();

} );


//ajax

function ajax (method, endpoint) {
    
    let httpReq = new XMLHttpRequest();
    httpReq.open(method, endpoint);
    httpReq.send();
    
    httpReq.addEventListener('readystatechange', function(){
        
        
    })
}