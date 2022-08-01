//1.this in browser in non-strict mode

 

 //(a)
 console.log(this);  //--->returns window object

// (b)fun-this
function showThis(){
     console.log(this);
 }
 showThis();      //------>returns window object

 //(c)obj-fun-this
 let obj = {
    name:'adam',
     f:function(){
     console.log(this);      //----->return same object

     }
 }
 obj.f()

 //(d) obj-fun-fun-this
 let objc = {
     name:'adam',
     f:function(){
         function g(){
         console.log(this) 
        }                   //------>returns window object
     g()
     }
 }
objc.f()
     