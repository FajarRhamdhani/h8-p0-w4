function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  
  var hasil=[];
  for(var i=0; i<=angka; i++){
    for(var j=0; j<=angka; j++){
      if(j*i===angka){
        hasil.push(String(i)+String(j));
      }
    }
}
var min=hasil[0].length;
for(var k=0; k<hasil.length; k++){
  if(hasil[k].length<min){
    min=hasil[k].length;
  }
}
 return min

}
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2