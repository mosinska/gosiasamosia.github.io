let nowaKsiazka ={ "ksiazka":[
          {"tytul": "Wiedźmin", 
          "autor": "Andrzej Sapkowski", 
          "przeczytana": true, 
          "opiszKsiazke": `Książka ma tytuł ${this.tytuł}, której autorem jest ${this.autor} i ${this.przeczytana}` }, 
          
          {"tytul": "Wiedźmin", 
          "autor": "Andrzej Sapkowski", 
          "przeczytana": false, 
          "opiszKsiazke": `Książka ma tytuł ${this.tytuł}, której autorem jest ${this.autor} i ${this.przeczytana}` }, 
           
          {"tytul": "Wiedźmin", 
          "autor": "Andrzej Sapkowski", 
          "przeczytana": false, 
          "opiszKsiazke": `Książka ma tytuł ${this.tytuł}, której autorem jest ${this.autor} i ${this.przeczytana}` },
      ]
      
      if (przeczytana == false){
        this.przeczytana = "nie została przeczytana";
      }else{this.przeczytana = "została przeczytana";}

  }

console.log(nowaKsiazka);

class Ksiazka {
    constructor(tytul, autor, przeczytana, opiszKsiazke) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = boolean;
        this.opiszKsiazke = opiszKsiazke;
        this.printInfo = function() {
      console.log(opiszKsiazke);
      }
    }
}

// // nowaKsiazka.printInfo();
// console.log(nowaKsiazka);

// this.printinfo = function() {
//         console.log('Imię' + this.name+','+'Nazwisko'+this.surname)
//     }
// }
// */
// console.log(lukasz.age, lukasz.eyeColor, lukasz);
// lukasz.printInfo();

//Klasy function(KLASYZDUZEJLITERY) lub class(KLASA)
/*
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.printinfo = function() {
        console.log('Imię' + this.name+','+'Nazwisko'+this.surname)
    }
}
*/

// let adam = {
//     wiek: 100,
//     wlosy: false,
//     oczy: true,
//     nazwisko: 'Kowalski'
// };

// class Osoba {
//     constructor(imie, nazwisko, wiek, kolorOczu) {
//         this.name = imie;
//         this.lastName = nazwisko;
//         this.age = wiek;
//         this.eyeColor = kolorOczu;
//     }

//     printInfo() {
//         let info = `Name: ${this.name}, Last name: ${this.lastName}, Wiek: ${this.age}`;
//         console.log(info);
//     }
// }

// let mateusz = new Osoba("Mateusz", "Górski");



// Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".

// Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.

// Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.

// Na samym końcu wyświetl w konsoli ilość przeczytanych książek



//proby
// let nowaKsiazka ={ "ksiazka":[
//           {"tytul": "Wiedźmin", 
//           "autor": "Andrzej Sapkowski", 
//           "przeczytana": true, 
//           "opiszKsiazke": `Książka ma tytuł ${this.tytuł}, której autorem jest ${this.autor} i ${this.przeczytana}` }, 
          
//           {"tytul": "Wiedźmin", 
//           "autor": "Andrzej Sapkowski", 
//           "przeczytana": false, 
//           "opiszKsiazke": `Książka ma tytuł ${this.tytuł}, której autorem jest ${this.autor} i ${this.przeczytana}` }, 
           
//           {"tytul": "Wiedźmin", 
//           "autor": "Andrzej Sapkowski", 
//           "przeczytana": false, 
//           "opiszKsiazke": `Książka ma tytuł ${this.tytuł}, której autorem jest ${this.autor} i ${this.przeczytana}` },
//       ]
      
// }

// console.log(nowaKsiazka);

//
//class Ksiazka {
//    constructor(tytul, autor, przeczytana, opiszKsiazke) {
//      
//      this.tytul = tytul;
//      this.autor = autor;
//      this.przeczytana = function (){
//        
//        if (przeczytana == false){
//              this.przeczytana = "nie została przeczytana";
//        }
//      
//        this.przeczytana = "została przeczytana";
//      
//      };
//      
//      this.opiszKsiazke = opiszKsiazke;
//      this.printInfo = function() {
//        console.log(opiszKsiazke());
//      }
//
//    }
//    
//}
//
//let horror = new Ksiazka("Carrie","King",true);
//console.log(horror);
//// console log (nowaKsiazka);
//
//
//// Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.
//
//// Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.
//
//// Na samym końcu wyświetl w konsoli ilość przeczytanych książek
//
//// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it