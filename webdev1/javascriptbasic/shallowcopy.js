//spread operator
//(1) let sports = ['cricket' , 'football','swimming']

// let copySports = [...sports]

// copySports[1] = 'baseball'
// console.log('originalArr-> ',sports)
// console.log('copyArr-> ', copySports)

//(2)but there is problem with nested obj using spread operator---->shallow copies
// let sports = ['cricket' , 'football','swimming',{a:'hockey',b:'tennis'}]

// let copySports = [...sports]

// copySports[1] = 'baseball'
// copySports[3]['a'] = 'basketball'       //for nested obj
// console.log('originalArr-> ',sports)
// console.log('copyArr-> ', copySports)
// //---->result
// //originalArr->  [ 'cricket', 'football', 'swimming', { a: 'basketball', b: 'tennis' } ]
//copyArr->  [ 'cricket', 'baseball', 'swimming', { a: 'basketball', b: 'tennis' } ]





//(3)shallow copy from array.from method
// let sports = ['cricket' , 'football','swimming',{a:'hockey',b:'tennis'}]

// let copySports = Array.from(sports)

// copySports[1] = 'baseball'
// copySports[3]['a'] = 'basketball'       
// console.log('originalArr-> ',sports)
// console.log('copyArr-> ', copySports)
//result
//originalArr->  [ 'cricket', 'football', 'swimming', { a: 'basketball', b: 'tennis' } ]
//copyArr->  [ 'cricket', 'baseball', 'swimming', { a: 'basketball', b: 'tennis' } ]


//(4) shallow
let sports = ['cricket' , 'football','swimming',{a:'hockey',b:'tennis'}]

let copySports = sports.slice(0)
copySports[1] = 'baseball'
copySports[3]['a'] = 'basketball'       
console.log('originalArr-> ',sports)
console.log('copyArr-> ', copySports)//    ----> same bahaviour