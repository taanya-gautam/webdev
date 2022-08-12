// parallel(random)
//1.read selected number of files with promises
// const fs = require('fs');

// let fileRead1 = fs.promises.readFile('./f1.txt')

// let fileRead2 = fs.promises.readFile('./f2.txt')

// let fileRead3 = fs.promises.readFile('./f3.txt')

// fileRead1.then((data)=>{
//     console.log('data -> ' + data) 
//     // console.log('data ->', data)                 //('data ->', data)--> this will give data in buffer
// })                                               //console.log('data -> ' + data) ----> perfect data

// fileRead2.then((data)=>{
//     console.log('data -> '+ data)
// })

// fileRead3.then((data)=>{
//     console.log('data -> '+ data)
// })


//2.read n number of files with promises
const fs = require('fs').promises

let arr = ['./f1.txt' , './f2.txt' , './f3.txt']

for(let i= 0; i< arr.length;i++){
    let fileReadPromise = fs.readFile(arr[i])
    fileReadPromise.then(cb)
}
function cb(data){
    console.log('content-> ' + data)
}
