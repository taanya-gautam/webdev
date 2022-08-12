const fs = require('fs').promises
// read selected files serially
// let fileRead1 = fs.readFile('./f1.txt')




// function cb1(data){
//     console.log('content-> ' + data)
//     let fileRead2 = fs.readFile('./f2.txt')
//     return fileRead2
// }
// function cb2(data){
//     console.log('content-> ' + data)
//     let fileRead3 = fs.readFile('./f3.txt')
//     return fileRead3
// }


// function cb3(data){
//     console.log('content-> ' + data)

// }

// fileRead1.then(cb1).then(cb2).then(cb3).catch((err)=>{
//     console.log('error')
// })


//2.read n number of files serially
let arr = ['./f1.txt' , './f2.txt' , './f3.txt', './f4.txt']

let fileReadPromise = fs.readFile(arr[0])
for(let i= 1; i<arr.length; i++){
     fileReadPromise = fileReadPromise.then((data)=>{
        console.log('content-> ' + data)
        return fs.readFile(arr[i])
    })
    
}
fileReadPromise.then((data)=>{
    console.log('content-> ' + data)
})
