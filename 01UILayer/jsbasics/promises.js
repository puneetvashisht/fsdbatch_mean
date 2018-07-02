//Callback example

function asynchFn(callback){
    console.log(callback)
    setTimeout(function(){
        callback("success from asynch")
    }, 2000)
}


asynchFn(function(result){
    console.log(result)
})

//Promises example

function asynchFn(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            // resolve("success from asynch")
            reject("failure in asynch function")
        }, 2000)
    }) 
}


asynchFn()
.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})