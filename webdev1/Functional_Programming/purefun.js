// impure function
// ---> here if a == 3 or 6 or whatever and we call this function we get every time different result

let a =4;
 function addNo(b){
    console.log('the sum is' ,a+b);
 }
 addNo(2);


 //pure function -----> whenever we call from same arguments the function will pass same result
 // the function which return same result for the same set of arguments

 //function addNum(a,b){
  //  console.log('The Sum is' , a + b);    // ---> this will give side effect
 //}
 //addNum(2 , 3);


 // improve version
 function addNum(a,b){
    return a+b;

 }
 console.log(addNum(2 , 3));