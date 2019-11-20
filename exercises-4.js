function cariModus(arr) {
    // you can only write your code here!
    var angka=[];
  for (var i = 0; i < arr.length; i++) {
    if(arr===0){
      angka.push(arr[i]);
    }
    else
    { 
      for (var j = i; j < arr.length; j++) {
      if (arr[j+1]  === arr[i]) {
        angka.push(arr[i]);
      }
      }
      }
    }
    if(angka[0]!==angka[1])
    {
      return angka[0];
    }
    else {
      return -1;
    }
    
}
    
  
  
  // TEST CASES
   console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1