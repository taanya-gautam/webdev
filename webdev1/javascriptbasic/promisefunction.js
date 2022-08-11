//1.Promise.all

// let p1 = new Promise(function (resolve,reject) {
//     resolve ('Promise 1 is resolved')
// })

// let p2 = new Promise(function (resolve,reject) {
//     reject ('Promise 2 is rejected')
// })

// let p3 = new Promise(function (resolve,reject) {
//     resolve ('Promise 3 is resolved')
// })

//let promiseAll = Promise.all([p1,p2,p3])
//console.log(promiseAll)    // return pending promise
// promiseAll.then((PromiseArr)=>{
//     console.log(PromiseArr)
// }).catch((err)=>{
//     console.log(err)
// })

//2.Promise.race
//(a)
// let p1 = new Promise(function (resolve,reject) {
//     //resolve ('Promise 1 is resolved')
//     reject ('Promise 1 is rejected')
// })

// let p2 = new Promise(function (resolve,reject) {
//     resolve ('Promise 2 is resolved')
// })

// let p3 = new Promise(function (resolve,reject) {
//     resolve ('Promise 3 is resolved')
// })
// Promise.race([p1,p2,p3]).then((val)=>{                  //output promise1 is resolved(ye sirf pahli promise ko dekhti h if resolve to return resolve ,if reject then return rejected)
//     console.log(val)
// }).catch((err)=>{
//     console.log(err)        //Promise 1 is rejected



//})

//(b)
// let p1 = new Promise(function (resolve,reject) {
//     setTimeout(()=>{
//         resolve ('Promise 1 is resolved')
//     },2000)
    
// })
// let p2 = new Promise(function (resolve,reject) {
//     setTimeout(()=>{
//         resolve ('Promise 2 is resolved')
//     },1000)
    
// })
// let p3 = new Promise(function (resolve,reject) {
//     setTimeout(()=>{
//         resolve ('Promise 3 is resolved')
//     },500)
    
// })
// Promise.race([p1,p2,p3]).then((val)=>{                    //-->kam settimeout wala first hoga = p3
//     console.log(val)
// })



// //3.allSettled

// let p1 = new Promise(function (resolve,reject) {
//         resolve ('Promise 1 is resolved')
//     })
    
//     let p2 = new Promise(function (resolve,reject) {
//         reject ('Promise 2 is rejected')
//     })
    
//     let p3 = new Promise(function (resolve,reject) {
//         resolve ('Promise 3 is resolved')
//     })
//     Promise.allSettled([p1,p2,p3]).then((arr)=>{
//          console.log(arr)               //[
            
//     })



    //4.finally method
   // var loader = true
    function test(){
        var a= 1 + 1
        return new Promise((resolve, reject) => {
            if (a === 2){
                resolve('promise resolved yesssssssss')
            }
            else{
                reject('promise rejected noooooo')
            }
        })
    }
    test().then((val)=>{
        console.log(val)
    }).catch((err)=>{
        console.log(err)
    }).finally(()=>{
       // loader = false
        console.log('experiment completed')
    })


    //5.resolve
    let p1 = Promise.resolve('Promise resolved').then((val)=>{
        console.log(val)
    })

    //6.reject
    let p2= Promise.reject('Promise rejected').catch((err)=>{
        console.log(err)
    })

