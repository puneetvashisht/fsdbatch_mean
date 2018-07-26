
function sleep(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

// ----------------------------------

console.log('starting')

// function readFile(){
//     sleep(5000)
//     console.log('Read the file')
//     return "abcd"
// }
// readFile();


// console.log('finishing')





function asynchFn(callback){
    setTimeout(function(){
        callback("success from asynch")
    }, 2000)
}
asynchFn(function(result){
    console.log(result)
})

console.log('finishing')