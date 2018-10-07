let tablica = ["Monika", "Łukasz", "Konrad"]; 
console.log(tablica);

tablica[0] = "Karolina";

tablica.push("Ewa"); //dodaje na koncu element
tablica.unshift("Adam"); //dodaje element na początku

tablica.shift(); //usuwa element na poczatku
tablica.pop(); //usuwa element na koncu

tablica.reverse();
console.log(tablica.join(" + "));
