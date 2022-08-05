//1.setTimeout
// function greet(){
//     console.log('Hello')
// }
// setTimeout(greet , 5000);

// console.log('Byeeeee')

//2.setinterval

// function sayHi(){
//     console.log('Hiiiii')
// }
// setInterval(sayHi , 2000)


//3.how to stop setinterval
 let counter =0;
 let intervalId;
 function sayHi(){
    counter++;
         console.log('Hiiiii')
         if(counter>=3){
            clearInterval(intervalId)
         }
     }
  intervalId =   setInterval(sayHi , 2000);