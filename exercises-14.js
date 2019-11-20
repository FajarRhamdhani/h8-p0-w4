function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var result=[];
    if(arrPenumpang.length===0){
        return [];
    }else{
        for(var i=0; i<arrPenumpang.length; i++){
            var hasil={};
            var berangkat=0;
            var sampai=0;
            var bayar=0;
            for(var j=0; j<rute.length; j++){
                if(arrPenumpang[i][1]===rute[j]){
                    berangkat=j;
                }else if(arrPenumpang[i][2]===rute[j]){
                    sampai=j;
                    bayar=(sampai-berangkat)*2000;
                }
            }
            hasil.penumpang=arrPenumpang[i][0];
            hasil.naikDari=arrPenumpang[i][1];
            hasil.tujuan=arrPenumpang[i][2];
            hasil.bayar=bayar;
            result.push(hasil);
        }
    }
    return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]