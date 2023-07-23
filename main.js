var ball = prompt("Siz necha ball topladingiz");

if (ball < 80) {
  alert("Siz imtigondan ota olmadingiz");
} else if (ball == 80 || (ball > 80 && ball < 100)) {
  alert("Siz super kantrakt asosd  oqshga qabul qilindingiz");


var sum = prompt("Kantrakt narxi 3000$ siz ni qancha pulingiz bor ?");

if (sum >= 3000) {
  alert("Siz oqishga qabul qilndingiz");
} else {
  alert("Siz oqshga kira olmadingiz");
}

} else if (ball < 100 || (ball > 100 && ball < 130)) {
    alert("Siz kantrakt asosda oqshga qabul qilindingiz");
  

 var sum = prompt("Kantrakt narxi 2000$ sizni qancha pulingiz bor ")

 if (sum >= 2000) {
    alert("Siz oqishga qabul qilindingiz");
 } else {
    alert("Siz oqishga kira olmadingiz");
 }
}  else if  (ball == 130 || (ball > 130 && ball == 180) || ball < 180){
    alert("Tabriklayman siz oqishga GRAND asos da  qbul qilndingiz");
 } else {
    alert("Mavjud bolmagan miqdor");
 }