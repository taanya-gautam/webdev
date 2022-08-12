//1.with callback
// function updateAccount(product,cb){
//     setTimeout(() => {
//         console.log(product + 'purchaesd')
//         cb()
//     }, 2000);
// }

// module.exports = {
//     updateAccount : updateAccount
// }

//2.with promises

function promiseUpdataAccount(product){
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve()
        },2000)
        
    })
}


module.exports = {
    //updateAccount : updateAccount
    promiseUpdataAccount : promiseUpdataAccount
}