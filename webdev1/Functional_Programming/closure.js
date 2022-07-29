// 1.function scope
// function calculate(a,b){
//     let result = a+b;
//     return result;
// }
// console.log(calculate(2,3));
// console.log(result);  // ---> this will give ref error ,we can not access result out  of the scope of function,
//becaz it is declare within function = this is called scope of function(function scope) and also
// let result or var result ,whatever is present there


// 2.lexical scope
function add(){
    let a= 4;
    function addChild(){      //----> childfunction/nestedfunction have access of all variable defined in parent function,
        console.log(a+5);     //----> so ,no error= this will give 9 as a result
    }
    addChild();
}
add();


// 3.closure
function add(){
    let a= 4;
    function addChild(){
        console.log(a+5);
    }
    return addChild;
}
let catchAdd = add();
console.log(catchAdd);   // --->result= function:addChild
catchAdd();       //-----> this will give 9 as a result, when we already return child function but afterthat chid function have 
                  // have access of parent function 
                  // a function always bundled with its lexical scope forms a closure = ek function bundle hota h apne lexical scope
                  //ke sath ,chahe kahi de v call kar le ,return kar le,chahe parent function ko he khatm kar de