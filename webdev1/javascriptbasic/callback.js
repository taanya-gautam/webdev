//1.
// function greet(personName){
//     let msg = "Hello" + personName
//     console.log(msg)
// }

// greet('Steve')


//2.
// function greet(personName , callback){
//     let msg = "Hello" + personName
//     callback(msg);
    
// }
// function logGreeting(greeting){
//     console.log(greeting)
// }



// greet('Steve',logGreeting)


//3.synchronus callback -----> matlab ek line se(krama se)
function greet(personName, age , callback ,callback2){
    let msg = "Hello" + personName;
    let ageOfPerson = age;
    
    callback(msg);
    callback2(ageOfPerson)
    
}
function logGreeting(greeting){
    console.log(greeting)
}
function showAge(age){
    console.log(age)

}



greet('Steve',25 ,logGreeting ,showAge)

//4.asynchronus callback

console.log('hello')

setTimeout(function st1(){
    console.log(' I am s1')

}, 2000)

setTimeout(function st2(){
    console.log(' I am s2')

}, 1000)

function sayBye(){
    console.log(' bye')
}

sayBye()