let fs = require('fs');
//1.parallel execution of code with callback
// console.log('before');
// fs.readFile('f1.txt',cb1)
// fs.readFile('f2.txt',cb2)
// fs.readFile('f3.txt',cb3)

// function cb1(err, content){          // random order mai file read hota h 
//     console.log('content ' + content)
// }
// function cb2(err, content){
//     console.log('content ' + content)
// }
// function cb3(err, content){
//     console.log('content ' + content)
// }

// console.log('after');


//2.serial execution of code with callback
console.log('before');
fs.readFile('f1.txt',cb1)
function cb1(err, content){           
    console.log('content ' + content);
    fs.readFile('f2.txt',cb2)
    function cb2(err, content){
        console.log('content ' + content)
        fs.readFile('f3.txt',cb3)
        function cb3(err, content){
            console.log('content ' + content)
        }
        
    }
    
}
console.log('after')