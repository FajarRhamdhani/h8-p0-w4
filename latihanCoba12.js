function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  // you can only write your code here!

  var arr=[];
  var hasil={};
  var pembeliSpatu=[];
  var pembeliBaju=[];
  var pembeliSweater=[];
  var profitSpatu=listBarang[0][1];
  var profitBaju=listBarang[1][1];
  var profitSweater=listBarang[2][1];
  var sisaSpatu=listBarang[0][2];
  var sisaBaju=listBarang[1][2];
  var sisaSweater=listBarang[2][2];

  for (var i=0; i<shoppers.length; i++){
      if(shoppers[i].product==="Sepatu Stacattu"){
          if(sisaSpatu>=shoppers[i].amount){
            sisaSpatu-=shoppers[i].amount;
            pembeliSpatu.push(shoppers[i].name);
          }
      }
      else if(shoppers[i].product==="Baju Zoro"){
        if(sisaBaju>=shoppers[i].amount){
            sisaBaju-=shoppers[i].amount;
            pembeliBaju.push(shoppers[i].name);
        }
    }
      else if(shoppers[i].product==="Sweater Uniklooh"){
        if(sisaSweater>=shoppers[i].amount){
            sisaSweater-=shoppers[i].amount;
            pembeliSweater.push(shoppers[i].name);
        }
    }
      
  }

  

hasil.sisaSpatu=sisaSpatu;
hasil.sisaBaju=sisaBaju;
hasil.sisaSweater=sisaSweater;
hasil.pembeliSpatu=pembeliSpatu;
hasil.pembeliBaju=pembeliBaju;
hasil.pembeliSweater=pembeliSweater;
arr.push(hasil);
return arr;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

// console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
// console.log(countProfit([])); //[]