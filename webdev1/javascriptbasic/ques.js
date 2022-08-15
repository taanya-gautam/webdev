//  closure and scope interview question
//Q(1)
// (function immediateA(a){       //parent function
//     return (function immediateB(b){    //child function
//         console.log(a)
//     })(1);
// })(0)        //output= 0,becaz child got value from parent that is '0'

//Q(2)
let count = 0;
(function immediate(){
    if (count === 0){
        let count = 1;
        console.log(count);//---->1(let block scope)
    }
    console.log(count);  //------>0(global scoce se value)
})();


//Q(3)
function createIncrement(){
    let count = 0;
    function increment(){      // function scope 
        count++;
    }
    let message = `count is ${count}`;   // ye 0 lega
    function log(){
        console.log(message);   // so -->0
    }
    return [increment,log];
}
const [increment , log] = createIncrement();
increment();
increment();
increment();   // --->0 kitna v call kr le 0 output hoga
log();


//Q(4)
for (var i =0; i< 3 ;i++){    // var function scope --for loop(stack),settime out(node api)
    setTimeout (function(log){
        console.log(i);      // 3 3 3
    },1000)
}

//solution other than let
for (var i =0; i< 3 ;i++){ 
    delay(i)
}
function delay(i){
    setTimeout (function(log){
        console.log(i);      
    },1000)
}