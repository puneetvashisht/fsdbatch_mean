
function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

// ----------------------------------

console.log('starting')

function readFile(){
    pausecomp(2000)
    console.log('Read the file')
    return "abcd"
}
setTimeout(function(){
    // readFile();
}, 0)





function asynchFn(callback){
    setTimeout(function(){
        callback("success from asynch")
    }, 2000)
}
asynchFn(function(result){
    console.log(result)
})

console.log('finishing')