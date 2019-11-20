function changeMe(arr) {
  // you can only write your code here!
      var biodata={};
      var nomor=0;
      for (var i=0; i<arr.length ;i++){
        nomor+=1;
        biodata.fullname= nomor + "." + " " + arr[i][0] + " " + arr[i][1]
        biodata.firstname = arr[i][0];
        biodata.lastname = arr[i][1];
        biodata.gender = arr[i][2];
        biodata.age = 2019 - arr[i][3];
        if(arr[i][3]===undefined){
            biodata.age = "Invalid Birth Year"
        }
        
        console.log(biodata);
      }
  
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// changeMe([]); // ""