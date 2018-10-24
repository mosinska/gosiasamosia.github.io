const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";


$.getJSON(url, function(response){
   let html = `UserID: ${response.userId} <hr>
               User Name: ${response.userName}<hr>
               User Url: ${response.userURL}`;

   document.getElementById('output').innerHTML = html;
});