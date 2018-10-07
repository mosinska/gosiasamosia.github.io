/*//np. 1++ po wykonaniu działania zwieksz o 1

let number = 10;

//for loop

for (let i = 0; i <= number; i++) {
    console.log(i);
}

//forEach loop

let tablica = ["Ania", "Konrad", "Mateusz"]

//dostepne tylko na tablicach
//tablica.forEach(function(element, index) {
//    console.log(element);
//});


tablica.forEach(function(element, index) {
    console.log("Imię " + element + " znajduje się pod indexem " + index);
});*/

// while loop

let number = 10; // do
//let index = 0; //od

//nieskonczonosc
/*while(number > 0) 
    console.log(index++);
}*/

/*
while(number >= 0) {
    number--; // number = number - 1;

    console.log(index++);
}*/

//zrób "to" while true to zrób "tamto" - inaczej niż funkcje,gdzie if "cośtam" true to zrób "coś innego"

/*
while(number >= 0) {
    number--; // number = number - 1;
    console.log(number);
}
*/

//Break - przerwanie działania funkcji
// i continue


/*
//jedna liczba
while (number >= 0) {
    number--; // number = number - 1;

    if (number > 5) {
        console.log(number);
        break;
    }
}*/

/*while (number >= 0) {
    number--; // number = number - 1;

            console.log(number);
    
    if (number === 5) {
console.log("hahaha! teraz 5!")
        //break;
        continue;
    }
}*/

//FOR ..in loop

let adam = {
    wiek: 100,
    wlosy: false,
    oczy: true,
    nazwisko: 'Kowalski'
};

for (let i in adam) {
    console.log(adam[i]);
}

for (let i in adam) {
    console.log("Klucz: " + i + " wartość: " + adam[i]);
}
