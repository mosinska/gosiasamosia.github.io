const url = "https://jsonplaceholder.typicode.com/users";
const content = document.querySelector('.content');
const doc = document.documentElement; // znacznik html

const pobierzDane = function() {
   
   // sprawdzam czy suma wysokości okna przeglądarki + odległość od początku strony 
   // (scroll) jest mniejsza niż wysokość całego dokumentu 
   // jesli jest mniejsza, kończę działanie funkcji...
   if( ( window.innerHeight + doc.scrollTop ) < doc.offsetHeight ) {
      return;
   }

   // w innym przypadku wykonuje zapytania AJAX do serwera

   // tworzę obiekt odpowiedzialny za wysyłanie zapytań AJAX do serwera
   var http = new XMLHttpRequest();
   
   // otwieram połączenie
   http.open("GET", url);

   // wysyłam request
   http.send();

   // nasłuchuję czy wszystko przebiegło poyślnie - event load dla obiektu XMLHttpRequest
   http.addEventListener('load', function(){

      // jeśli wszystko jest ok, zamieniam otrzymany ciąg znaków na JSONa
      let data = JSON.parse(http.responseText);

      let html = "";

      // z serwera otrzymaliśmy tablicę, więc trzeba po niej przejsć
      data.forEach(function(el, ind) {

         // dla każdego elementu tablicy, który jest obiektem - {}
         // tworzę obiekt HTML za pomocą metody createElement
         // dodaje mu klasę content-item (setAttribute)
         let newItem = document.createElement("div");
         newItem.setAttribute('class', 'content-item');
         // tworzę strukturę html i wstawiam ją do nowoutworzonego diva
         let child = `<h2>${el.name}</h2><h3>${el.username}</h3><h4>${el.email}</h4>`;
         newItem.innerHTML = child;

         // wrzucam stworzoną strukturę do elementu o klasie .content - referencja do elementu siedzi w stałej content
         content.appendChild(newItem);

         // jquery
         // let child = `<div class="content-item"><h2>${el.name}</h2><h3>${el.username}</h3><h4>${el.email}</h4></div>`;

         // $('.content').append(child);
      });

   })
}

window.addEventListener('scroll', pobierzDane);



