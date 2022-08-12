// promise is a object of javascript
let fs = require("fs");
//async code
console.log("Before");
//fs.readFileSync("f1.txt",function (err,data) {
  //  console.log(data);
//});

let promise = fs.promises.readFile("f1.txt");
//console.log(promise);     ------> starting promise state pending 

// promise settle hoga --> 2 state= 1.fulfilled 2.rejected
//if promise fulfill state mai hoga to then function call hoga
promise.then(function (data){
    console.log("" + data);
})

//if promise rejected state mai hoga to catch function call hoga
promise.catch(function (err){
    console.log(err);
})
console.log("after");