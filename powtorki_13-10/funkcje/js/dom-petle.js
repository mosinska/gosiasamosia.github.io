//HTML Collection
let p1 = document.getElementsByClassName('main-text');
let p2 = document.querySelectorAll('.main-text');

p2.forEach(function(el,ind){
    console.log(el);
})
//console.log(p1);
//console.log(p2);

//p1 forEach

////zły sposób
//p1.forEach(function(el,ind){//to nie jest tablica i nie zadziała 
//    console.log(el);
//})

////dobry sposób 1-wszy
//var dlugosc = p1.length;
//for(let i=0; i<dlugosc; i++) {
//    console.log(p1[i].id);
//}


//for(let i=0; i<10; i++){//pętla wchodzi w i++ wchodzi w i<10 i wyswietla console.log(i) i znów iteruje od i
//    console.log(i);
////    break;//pętla wyświetli się tylko raz, break przerwie pętlę
//}

////dobry sposób 2-gi - spread ES6
////[...p1]//operator spread tworzący tablicę ze zmiennych
//[...p1].forEach(function(el, ind){
//    console.log(el);
//})

////dobry sposób 3-ci - call
//[].forEach.call(p1,function(el, ind){ //tworzymy pustą tablicę i wywołujemy forEach //tak działa funkcja call
//    console.log(el);
//})


////dobry sposób 4-ty Array.from - funkcja jako tablica
let  n = Array.from(p1,function(el){}
console.log(n);
});
//Array.from(p1)

