function createSetInterval(){
    
    let intervalId = 0;
    let intervalMap = {};

    function setIntervalPolyfill(callback , delay=0 , ...args){
        var id = intervalId++;

        function repeat(){
            intervalMap[id] = setTimeout(() => {
                callback(...args)
                if(intervalMap[id]){
                    repeat()
                }
            },delay);
        }
        repeat()
        return id
    }

    function clearIntervalPolyfill(intervalId){
        clearTimeout(intervalMap[intervalId])
        delete intervalMap(intervalId)
    }
    


    return {
        setIntervalPolyfill,
        clearIntervalPolyfill
    } 



}


const {
     setIntervalPolyfill,
     clearIntervalPolyfill

} = createSetInterval

let counter = 0
let intervalID
function greeting(){
         counter++;
         console.log('Hiiiii')
         if(counter>=3){
            clearIntervalPolyfill(intervalID)
         }
  }
 intervalID = setIntervalPolyfill(greeting , 2000 );