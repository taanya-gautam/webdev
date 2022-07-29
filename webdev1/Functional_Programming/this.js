//1.this in node in non-strict mode

 

// //(a)
// console.log(this);  //--->returns {}

// //(b)fun-this
// function showThis(){
//     console.log(this);
// }
// showThis();      //------>returns global object

// //(c)obj-fun-this
// let obj = {
//     name:'adam',
// f:function(){
//     console.log(this);      //----->return same object

//     }
// }

// //(d) obj-fun-fun-this
// let objc = {
//     name:'adam',
//     f:function(){
//         function g(){
//         console.log(this) 
//        }                   //------>returns global object
//     g()
//     }
// }
//objc.f()
     
  
// //2.this in node in strict mode
// //(a)
// 'use strict'
// console.log(this);  //--->returns {}

// //(b)fun-this
// 'use strict'
// function showThis(){
//     console.log(this);
// }
// showThis();      //------>returns undefined

// //(c)obj-fun-this
// 'use strict'
// let obj = {
//     name:'adam',
// f:function(){
//     console.log(this);      //----->return same object

   // }
//}
// obj.f();
//(d) obj-fun-fun-this
'use strict'
let objc = {
    name:'adam',
    f:function(){
        function g(){
        console.log(this) 
       }                   //------>undefined
    g()
    }
}
objc.f();
     


