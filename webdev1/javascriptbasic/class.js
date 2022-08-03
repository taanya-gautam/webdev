//1.creating object with class and constructor
class person {
    constructor (name , age){
        this.name = name,
        this.age = age
    }
}

let person1 = new person('Adam' , 25);
console.log(person1);


//2.class with function

class personn {
    constructor (name , age){
        this.name = name,
        this.age = age
    }
    showDetails(){
        return this.name;
    }
}

let person2 = new personn('Aadi' , 25);
console.log(person2.showDetails());


//3.inheritance can be used in java script but not suggestable

class parent {
    constructor (name , age){
        this.name = name,
        this.age = age
    }
    showDetails(){
        return this.name;
    }
}
class parentChild extends parent {
    constructor(){ 
        super ('Steve')

   }
}

let person3 = new parentChild('Aadi' , 25);
console.log(person3.showDetails());

