//function has three method-->call() , apply() ,bind()
//Each function has two important properties: length and prototype.

//The length property determines the number of named arguments specified in the function declaration.
//The prototype property references the actual function object.

//(1) call
// let person1 = {
//     name :'Adam' ,
//     age : 25,


//      showDetails : function(){
//     console.log(this.name + "is" + this.age + "years old");
//     }
// }

// person1.showDetails();


// let person2 = {
//     name :'Steve' ,
//     age : 20,


//      showDetails : function(){
//     console.log(this.name + "is" + this.age + "years old");
//     }
// }


//person2.showDetails();            // the problem is here that for every person we have to call different function ,its so bulky and lengthy process


//(2)
// let person1 = {
//     name :'Adam' ,
//     age : 25,


//      showDetails : function(){
//     console.log(this.name + "is" + this.age + "years old");
//     }
// }




// let person2 = {
//     name :'Steve' ,
//     age : 20,


     
// }
// person1.showDetails.call(person2)  //-----> function borrowing --here we are taking function from obj1(person1) and calling it for person2


// (3)   here we call multiple obj with a single function
let person1 = {
    name :'Adam' ,
    age : 25,


    
}




// let person2 = {
//     name :'Steve' ,
//     age : 20,
// }

// let showDetails= function(){      // for global function --> we call like this that is function.call(obj)
    
//     console.log( this.name + "is" + this.age + "years old")
// }
//  showDetails.call(person1)


//(4) for multiple parameter
// let person2 = {
//     name :'Steve' ,
//     age : 20,
// }

// let showDetails= function(city , car){      
    
//     console.log( `${this.name} is ${this.age} years old,he lives in ${city} and drives ${car}`)
// }
//  showDetails.call(person2 , "Noida", 'BMW')     // we can pass external argument



 // (5) APPLY --> little difference between call and apply
//  let person2 = {
//     name :'Steve' ,
//     age : 20,
// }

// let showDetails= function(city , car){      
    
//     console.log( `${this.name} is ${this.age} years old,he lives in ${city} and drives ${car}`)
// }
//  showDetails.apply(person2 , ['Noida', 'BMW'])     // passing arguments in array


 //(6)bind
 let person2 = {
    name :'Steve' ,
    age : 20,
}

let showDetails= function(city , car){      
    
    console.log( `${this.name} is ${this.age} years old,he lives in ${city} and drives ${car}`)
}
let showDetailsBind= showDetails.bind(person2 , 'Noida', 'BMW') ;   

//console.log(showDetailsBind) ;   // this will return a function that bound showDetails function
showDetailsBind()

