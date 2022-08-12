//deep copy
//(1) array
let sports = ['cricket' , 'football','swimming',{a:'hockey',b:'tennis'}]

let copySports = JSON.parse(JSON.stringify(sports))
copySports[1] = 'baseball'
copySports[3]['a'] = 'basketball'       
console.log('originalArr-> ',sports)
console.log('copyArr-> ', copySports)

//(2)object
let person = {
    name : 'Tanya',
    roll :2,
    hobies : ['painting' , 'cooking' ,'gardening']
}

let newPerson = JSON.parse(JSON.stringify(person))

newPerson.roll =  4
newPerson.hobies[0] = 'sports'
console.log('originalArr-> ',person)
console.log('copyArr-> ', newPerson)
