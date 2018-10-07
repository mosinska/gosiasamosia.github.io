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

let adam = {
    wiek: 100,
    wlosy: false,
    oczy: true,
    nazwisko: 'Kowalski'
};

class Osoba {
    constructor(imie, nazwisko, wiek, kolorOczu) {
        this.name = imie;
        this.lastName = nazwisko;
        this.age = wiek;
        this.eyeColor = kolorOczu;
    }

    printInfo() {
        let info = `Name: ${this.name}, Last name: ${this.lastName}, Wiek: ${this.age}`;
        console.log(info);
    }
}

let mateusz = new Osoba("Mateusz", "Górski");
//mateusz.age = 30;
//mateusz.kolorOczu = "zielony";
//
/*mateusz.kolorOczu = function(param){
    return "Kolor ooczu to: "
}*/
//mateusz.printInfo(Osoba);
//mateusz.printInfo(mateusz);

//mateusz.kolorOczu = null;
//console.log(mateusz.kolorOczu);
//console.log Osoba;//

let lukasz = new Osoba ("Łukasz", "Nowak", 50, "piwny");

console.log(lukasz.age, lukasz.eyeColor, lukasz);
lukasz.printInfo();