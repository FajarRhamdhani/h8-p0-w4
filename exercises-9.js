function checkAB(num) {
  // you can only write your code here!
  var pertama=0;
  var kedua=0;
 for (var i=0; i<num.length; i++){
   if(num[i]==="b"){
     for (var j=i; j<num.length; j++){
       if(num[j]==="a"){
        pertama=[j-1]-[i]
       }
     }
     for (var k=i; k>=0; k--){
       if(num[k]==="a"){
        kedua=[i-1]-[k]
       }

     }
   }
 }
 if(pertama===3 || kedua===3){
   return true
 }else {
   return false
 }

}


// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false