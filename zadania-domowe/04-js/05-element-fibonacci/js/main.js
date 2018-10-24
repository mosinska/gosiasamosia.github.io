: f(n)=f(n-2)+f(n-1)

//public class Fibonacci {
//    public static void main(String[] args) {
//        System.out.print("Ile liczb ma zostać wydrukowanych?\n");
//        //przyjmujemy, ile liczb w ciągu mamy wyliczyć. Wielkość większa niż 89 zabroniona.
//        Scanner sc = new Scanner(System.in);
//        int lenght = sc.nextInt();
//        if (lenght > 89) { //Wpisano większą wartość niż 89
//            System.err.println("Za dużo!");
//            System.exit(0);
//        }
//        else if (lenght < 1) { //Wpisano wartość mniejszą niż 1
//            System.err.println("Za mało!");
//            System.exit(0);
//        }
//        else if (lenght == 1) { //tylko jedna liczba ma być wydrukowana
//            System.out.println(1);
//            System.exit(0);
//        }
//        else if (lenght == 2) { //tylko dwie liczby mają być wydrukowane
//            System.out.println(1);
//            System.out.println(1);
//            System.exit(0);
//        }
//        long a = 1L, b = 1L;
//        System.out.println(1);
//        System.out.println(1);
//        for(int i = 0; i <= lenght; i++) {
//            //przyjmujemy, że B reprezentuje większą liczbę
//            long var = a + b;
//            a = b;
//            b = var;
//            System.out.println(var);
//        }
//    }
//}

//function fib (arg) {
//    
//if (arg <= 0)  return 0;
//
//if (arg === 1) return 1;
//
//return fib(arg-1) + fib(arg-2);
//
//}
//console.log(fib(arg));


////Inicjalizacja tablicy
//var tab = new Array(1,2,3,4,5,6);
//var dodawanie = 0;
//var mnozenie = 1;
//
//for (i = 0; i < tab.length; i++) {
//dodawanie += tab[+i+];
//}
//
//console.log(dodawanie);
//


//
////Inicjalizacja tablicy
//var tab = new Array(5,7,4,8,3,9,6,7,3,12,4,6,9);
//var suma = 0;
//document.write("Tablica: ");
////Wyświetlenie tablicy
//for (i = 0; i < tab.length; i++) {
//document.write(tab[i] + ", ");
////Dodanie do sumy i-tego elementu tablicy
//suma += tab[i];
//}
////Wyświetlenie wyniku
//document.write("<br />Suma elementów tablicy wynosi: " + suma);


//let tablica = [1, 2, 3, 4, 5, 6]
//
//function (dodawanie) {
//   for(let i=0; i<10; i++;)
////    let mnozenie = 1 * 2 * 3 * 4 * 5 * 6;
//    
////    console.log(mnozenie);
//
//}
//console.log(dodawanie);

//function (1,2,3,4,5,6){
//    let dodawanie = 1+2+3+4+5+6;
//    let mnozenie = 1*2*3*4*5*6;
//    console.log(dodawanie);
//    console.log(mnozenie);
//    
//}