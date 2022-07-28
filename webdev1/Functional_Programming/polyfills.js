// generally polyfills are written with Arry.prototype method  ----> Arry.prototype method uses 'this' method 

// here i am using custom function to writr polyfills of map , filter , reduce
//1. map
//  let myArr = [1,2,3,4,5];
//  let newArr = myArr.map(function(x){
//        return x*x;
//    })
//      console.log(myArr);
 //  console.log(newArr);

  //custom map

    //  let myArr = [1,2,3,4,5];
    //  function myPolyfillMap(arr, cb){
    //     let newArr = [];
    //     for (let i=0 ;i<arr.length ;i++){
    //         newArr.push(cb(arr[i]));
    //     }
    //     return newArr;
    //  }
    //  function square(x){
    //     return x*x;
    //  }

    //  console.log(myPolyfillMap(myArr ,square));




// 2.filter
// let myArr = [1,2,3,4,5];
// let filteredArr = myArr.filter(function(x){
//     return x%2 === 0;
// })
// console.log(filteredArr);


// custom filter
let myArr = [1,2,3,4,5];
function myPolyfillFilter(arr,cb){
    let newArr = [];
    for (let i =0;i<arr.length ; i++){
        if(cb(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;

}

function isEven(x){
    if(x%2 ===  0){
        return x;
    }
    
}
console.log(myPolyfillFilter(myArr,isEven));