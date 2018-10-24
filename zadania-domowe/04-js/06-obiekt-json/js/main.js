let jsonObject = {
    "pracownicy": [
        {
            "firstName": "Krystian",
            "lastName": "Dziopa"
        },
        {
            "firstName": "Anna",
            "lastName": "Szapiel"
        },
        {
            "firstName": "Piotr",
            "lastName": "Żmuda"
        }
    ]
}

console.log(jsonObject);
let osoba = `${jsonObject.pracownicy[0]} ${jsonObject.pracownicy.firstName} ${jsonObject.pracownicy.lastName}`;
console.log(osoba);




//Pobierz do zmiennej jsonPracownicy poniższy obiekt:
//
//{
//    "pracownicy":[
//        {"firstName": "Krystian", "lastName": "Dziopa"}, 
//        {"firstName": "Anna", "lastName": "Szapiel"},
//        {"firstName": "Piotr", "lastName": "Żmuda"}
//    ]
//}
//Wyświetl go w konsoli, a następnie za pomocą pętli forEach przeiteruj po każdym pracowniku, oraz wyświetl w konsoli index elementu tablicy oraz imie i nazwisko pracownika.
//
//Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
