
function car(brand , model, color){
    this.brand1= brand
    this.model= model
    this.color = color

    this.drive = function(){
        console.log("i am driving" + this.brand1);
    }

}
let car1 = new car('BMW',"xs",'white');  // constructor helps to create multiple obj with a single function
let car2= new car('OODI',"xs",'red');


// car1.brand1 ="Jaguar"
// console.log(car1.brand1);
// console.log(car2.color);

car1.drive()
car2.drive()