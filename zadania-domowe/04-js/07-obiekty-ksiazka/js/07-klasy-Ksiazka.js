class Ksiazka {
    constructor(tytul, autor, przeczytana, opiszKsiazke) {

        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana //== true;
        // this.nieprzeczytana = nieprzeczytana //== false;

        opiszKsiazke() {
            //this.printInfo = function() {
            return `Książka ma tytuł ${this.tytuł}, której autorem jest ${this.autor} i jest ${this.przeczytana}`;
            // console.log(opiszKsiazke());
        }
    }
}

let fantastyka = new Ksiazka("Wiedźmin", "Sapkowski", true)

let horror = new Ksiazka("Carrie", "King", false);

console.log(fantastyka.opiszKsiazke());
console.log(horror.opiszKsiazke());
