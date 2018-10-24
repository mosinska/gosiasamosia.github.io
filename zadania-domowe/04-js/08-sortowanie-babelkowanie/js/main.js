let myTable = new Array (12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1);

console.log(myTable);

//BUBBLESORT
//sortowanie babelkowe
//www.algorytm.org
 
 $(document).ready(function init(){
 
////////////////
// BUBBLESORT //
////////////////
 
function BubbleSort(myTable) {
var change, temp;
do {
change = false;
for(var i=0; i<myTable.length-1; i++) {
if (myTable[i+1] < myTable[i]) {
temp = myTable[i];
myTable[i] = myTable[i+1];
myTable[i+1] = temp;
change = true;
}
}
} while (change);
return myTable;
}
 
//////////
// TEST //
//////////
 
function getRandom(min,max) {
var myRandom = max+1;
while (myRandom > max) {
myRandom = parseInt(Math.random()*(max-min+1) + min);
}
return myRandom;
}
function GenerateTable(min,max,legth) {
var myTable = [];
for(var i=0; i<legth; i++) {
myTable.push(getRandom(min,max));
}
return myTable;
}
 
var tableBefore = GenerateTable(1,9,10);
console.log(tableBefore);
var tableAfter = BubbleSort(tableBefore);
console.log(tableAfter);
 
 
});