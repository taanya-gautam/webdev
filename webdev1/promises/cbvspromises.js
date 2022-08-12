
const lib = require('./lib')

let amount = 2000
let tocut = 200

function chargeDebitCard(){
    amount = amount-tocut
    console.log(`Remaining amount is ${amount}`)
}

//chargeDebitCard()

//lib.updateAccount('Tv ' , chargeDebitCard)

let promiseObj = lib.promiseUpdataAccount('Tv').then(chargeDebitCard)