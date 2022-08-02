//let arry = [2,3,4,5,6]

let person1 = {
     name :'Adam' ,
        age : 20,
     showDetails : function(){
       console.log(this.name , " ", this.age); 
    }
}

let person2 = {
    name : 'Steve'
}

person2.__proto__= person1  // person2 has access of all properties of person1 --> that's prototypal inheritance
//console.log(person2.name + ' '+ person2.age);

person2.showDetails()
