// .function currying  
// 1.--> currying with bind method  
function add(a,b){
    console.log(a+b);
}
// case-1
//let addWith2 = add.bind(this,2) ---> 9
//addWith2(7);
// case-2
//let addWith2 = add.bind(this)   ---->14
//addWith2(7,7);
//case-3
//let addWith2 = add.bind(this , 4,8)   //---->12
//addWith2();




//2.currying with closures

function add(x){
    return function(y){
        console.log(x+y)
    }
}
let  addWith2 = add(2)
addWith2(4)