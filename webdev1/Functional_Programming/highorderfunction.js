///# higher order function(map,filter,reduce)
//1. map
// let myArr = [1,2,3,4,5];
// let newArr = myArr.map(function(x){
//    return x*x;
// })
// console.log(myArr);
// console.log(newArr);

// 2.filter

// let myArr = [1,2,3,4,5];
// let filteredArr = myArr.filter(function(x){
//     return x%2 === 0;
// })
// console.log(filteredArr);


// 3. reduce   ---> reduce have a accumulator that initialized with any value 
let myArr = [1,2,3,4,5];
let sumArr = myArr.reduce(function(accumulator,x){
    return accumulator + x;

})
console.log(sumArr);