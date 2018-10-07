let wartosc = (2 + 2 > 4 - 1);

wartosc = !(10 + 10 < 100);

//wartosc = 50 == "50"; -zwroci true - porownuje znaki
//wartosc = 50 === "50"; -zwroci false - porownuje wartosci

wartosc = (2 + 2 === 4 && 3 + 1 === 4); //&& i
wartosc2 = (2 + 2 === 4 || 3 + 2 === 4); //|| lub
wartosc3 = (2 + 2 === 4) ? "Równa się 4" : "Nie równa się 4";

console.log(wartosc);
console.log(wartosc2);
console.log(wartosc3);