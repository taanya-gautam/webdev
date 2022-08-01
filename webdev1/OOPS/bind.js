// let person1 = {
//     name :'Adam' ,
//     age : 20,
// }

// let showDetails= function(){      
    
//     console.log( this.name + " " + this.age)
// }
// let showDetailsBind= showDetails.bind(person1 ) ; 
// showDetailsBind()  ;

//1.
let person1 = {
    name :'Adam' ,
    age : 20,
}
//case-1
// let showDetails= function(city , state){      
    
//     console.log( this.name + " " + this.age +" "+ city +" "+state)
// }
// let showDetailsBind= showDetails.bind(person1 ,'Bengaluru','karnatka') ;   // pass multiple arguments -->Adam 20 Bengaluru karnatka

// showDetailsBind()  ;

// Function.prototype.myBind = function(...args){               //bind returns a function    --->myBind-function name   -->rest parameter
//     let obj = this       // ->here this points the same obj for which 
//     return function(){
//         obj.call(args[0])

//     }
// }
//let showDetailsMyBind = showDetails.myBind(person1);     //-->Adam 20 undefined undefined

//showDetailsMyBind();

//case-2
// let showDetails= function(city , state){      
    
//     console.log( this.name + " " + this.age +" "+ city +" "+state)
// }
// let showDetailsBind= showDetails.bind(person1 ,'Bengaluru','karnatka') ;   
// showDetailsBind()  ;

// Function.prototype.myBind = function(...args){               
//     let obj = this 
//     params = args.slice (1)     
//     return function(){
//         obj.apply(args[0],params)

//     }
// }
// let showDetailsMyBind = showDetails.myBind(person1,'noida','delhi'); 

// showDetailsMyBind();

//case-3

let showDetails= function(city , state){      
    
    console.log( this.name + " " + this.age +" "+ city +" "+state)
}
let showDetailsBind= showDetails.bind(person1 ,'Bengaluru') ;   
showDetailsBind('karnatka')  ;        //-->Adam 20 Bengaluru karnatka

Function.prototype.myBind = function(...args){               
    let obj = this 
    params = args.slice (1)     
    // just small change -->return function(){
       // obj.apply(args[0],params)
       return function(...args2){
        obj.apply(args[0],[...params,...args2])


    }
}
let showDetailsMyBind = showDetails.myBind(person1,'noida'); 

showDetailsMyBind('delhi');       //-->Adam 20 noida undefined
