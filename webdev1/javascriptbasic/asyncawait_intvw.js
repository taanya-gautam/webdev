//Q(1)
// async function inc(x){
//     x = x + await 1
//     return x;
// }

// async function increment(x){
//     x = x+1;
//     return x
// }
// inc(1).then(function(x){
//     increment(x).then(function(x){
//         console.log(x)               //output ---> 3
//     })
// })

//Q(2)

// let p = new Promise(function(resolve, reject)  {
//     reject( new error("some error"));
//     setTimeout(function() {
//         reject( new error("some error"));
        
//     },1000)
//     reject( new error("some error"));
    
// });
// p.then(null,function(err){     // output=1 & error! becaz .then mai 2 callback function pass hota h ,1st=success callback & 2nd = failure,here null h success callback so error
//     console.log(1);
//     console.log(err);
// }).catch(function(err){
//     console.log(2);
//     console.log(err);
// })

//Q(3)
// async function f1(){
//     console.log(1)
// }
// async function f1(){       //async override karega first async ko
//     console.log(2)
// }
// console.log(3);
// f1();
// console.log(1);
// f2();
// async function f2(){
//     console.log("go")       //output= 3,2,1,go


// }



//Q(4)
function resolveAfterNSeconds(n,x){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(x);
        },n)
        
    });
}
(function(){
    let a = resolveAfterNSeconds(1000,1)
    a.then(async function(x){
        let y = await resolveAfterNSeconds(2000,2)
        let z= await resolveAfterNSeconds(1000,3)
        let p =  resolveAfterNSeconds(2000,4)
        let q =  resolveAfterNSeconds(1000,5)
        console.log(x+y+z+await p + await q)         // output = 15
    })
})()


//Q(5)(a)
for(var i= 0;i<=5; i++){        //var global instance,settimeout yha 6 leta h
    setTimeout(function log(){
        console.log(i)         // output= 6 6 6 6 6 6
    }, 1000)
}
//(b)
let i= 0;
for(;i<=5; i++){        
    setTimeout(function log(){
        console.log(i)         // output= 6 6 6 6 6 6
    }, 1000)
}
//solution(1)
for(let i= 0;i<=5; i++){
    setTimeout(function log(){
        console.log(i)         
    }, 1000)    // 0 1 2 3 4 5
} 
//(2)
for(var i= 0;i<=5; i++){ 
    (function(){
        var j= i;
        setTimeout(function log(){
            console.log(j)
        })
    })()
}
