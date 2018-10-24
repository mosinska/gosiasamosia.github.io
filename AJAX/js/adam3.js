const url = "https://jsonplaceholder.typicode.com/users";
const content = document.querySelector('.content');
const doc = document.documentElement; //znaczniki html
//lub document.addEventListener
//tworze funkcję
const pobierzDane = function () {

    //sprawdzam czy suma wys okna przegl. + odległość od początku strony (scroll) jest mniejsza mniz wysokosc calego dokumentu
    //jesli jest mniejsza koncze dzialanie funkcji...
    if ((window.innerHeight + doc.scrollTop) < doc.offsetHeight) {
        return;
    }

    ///w innym przypadku wykonuje zapytania AJAX do serwera

    //tworze obiekt odpowiedzialny za wysyłanie zapytan AJAX do serwera

    var http = new XMLHttpRequest();

    //otwieram połączenie
    http.open("GET", url);

    //wysyłam request
    http.send();

    //nasłuchuje czy wszystko przebiegło pomyslnie - event load dla obiektu XMLHttpRequest
    http.addEventListener('load', function () { //wykona sie jak ready state 200 i 4

        //jesli wszystko jest ok, zmieniam otrzymany ciag znakow na JSONa
        let data = JSON.parse(http.responseText);

        let html = '';

        //z serwera otrzymalismy tablice, wiec trzeba po niej przejsc
        data.forEach(function (el, ind) {


            //dla kazdego ele. tablicy, który jest obiektem -{}
            //tworze obiekt HTML za pomocą metody createElement
            //dodaje mu klasę content-item (setAttribute)
            let newItem = document.createElement("div");
            newItem.setAttribute('class', 'content-item');
            //tworze strukture html i wstawiam do nowego diva
            let child = `<h2>${el.name}</h2><h3>${el.username}</h3><h4>${el.email}</h4>`;
            newItem.innerHTML = child;

            //wrzucam stworzona strukture do elementu o klasie .content - referencja do elementu siedzi w stałej content
            content.appendChild(newItem);

            //jquery
            //let child =`<dic class="content-item"><h2>${el.name}</h2><h3>${el.username}</h3>
            //<h4>
        });
    })
}

window.addEventListener('scroll', pobierzDane);


//mojPrzycisk.addEventListener('scroll', function(){
//    pobierzDane(url);
//});

//TESTOWANIE
//window.addEventListener('scroll', () => {
//    let html = document.documentElement;
//    console("wysokość całego dokumentu " + html.offsetHeight,
//        "odległość od początku strony " + html.scrollTop,
//        "wysokość okna przeglądarki " + window.innerHeight,
//    )
//});
