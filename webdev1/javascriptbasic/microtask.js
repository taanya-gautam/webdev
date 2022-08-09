console.log("Program Starts")

setTimeout(() =>{
    console.log('I am Set Time out')      //----->callback queue
},1000)

Promise.resolve().then((val)=>{
    console.log("Promise output")        //---->1st priority promise --> ye jata h microtask queue mai
})

console.log("program ends")          //Program Starts
                                      // program ends
                                    //Promise output  
                                     //I am Set Time out 