// Array.prototype.myFunction = function(){
//     console.log(this);
// }

// let arr = [1,2,3,4,5]
// arr.myFunction();

//.using prototype write polyfills of map,filter,reduce
//1. Map
// Array.prototype.myMap = function(cb){
//     let newArr = [];
//     for(let i= 0;i< this.length;i++){
//         newArr.push(cb(this[i]));

//     }
//     return newArr;

// }
// function square(x){
//     return x*x;
//}
//let arr =[1,2,3,4,5,];
//let mappedArr = arr.myMap(square);
//console.log(mappedArr);




//2.filter
Array.prototype.myFilter = function(cb){
    let newArr = [];
    for(let i= 0;i< this.length;i++){
        if(cb(this[i]))
        newArr.push(this[i]);

    }
    return newArr;

}
function isEven(x){
    return x%2 ===0;
}
let arr =[1,2,3,4,5,56,78,45,66,88];
let filteredArr = arr.myFilter(isEven);
console.log(filteredArr);

