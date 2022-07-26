function palceOrder(drink){
    return new Promise(function(resolve,reject){
        if (drink === 'coffee'){
            resolve ('order placed')
        }
        else {
            reject('sorry,we only serve coffee')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is being processed')
        resolve(`coffee served for the ${order}`)
    })
}

//scenario with promise          ----> for error we use catch function
// palceOrder('tea').then (function(orderFromCustomer){
//     console.log('Request Received');
//     let orderIsProcessed = processOrder(orderFromCustomer);
//     return orderIsProcessed;
// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed);
// }).catch(function(err){
//     console.log(err);
// })



//with Async await          --------> for error we use try -catch 
async function serveOrder(){
try {
    
    const orderReceived = await palceOrder('tea');
    console.log(orderReceived);
    const processedOrder =await processOrder(orderReceived);
    console.log(processedOrder);
} catch (error) {
    console.log(error);
}


}
serveOrder();