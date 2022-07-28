const person1 = {
    name: 'Adam',
    age :25

}
//const person2 = person1;//-->if we want to change name of second person ---> this not happen -->it wil change both name
// solution 

//const person2 =Object.assign({} , person1);

// or with use of spread operator
const person2 = {...person1};
person2.name = 'Steve';    



console.log(person1);
console.log(person2);