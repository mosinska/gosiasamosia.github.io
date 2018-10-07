//ES6 - funkcje strzalkowe

// = jeden parametr
// => znaczek return

//jedna zmienna
/*let wyswietlImie = imie => imie;

console.log(wyswietlImie("Ala", "Karol"));*/

//interpolacja ES5
/*
let wyswietlImie = (imie, imie2) => "Imie : " + imie + " Imie2 : " + imie2;

console.log(wyswietlImie("Ala", "Karol"));
*/

//interpolacja ES6
let wyswietlImie = (imie, imie2) => {
    return "Imie : " + imie + " Imie2 : " + imie2;
}

        console.log(wyswietlImie("Ala", "Karol"));
