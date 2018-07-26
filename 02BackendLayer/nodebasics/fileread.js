const fs = require('fs')


//Synch
// console.log('starting')
// // takes some time, blocking operation
// var contents = fs.readFileSync('./files/node.txt');
// console.log('Contents: ', contents + '')
// console.log('finishing')

//Async
console.log('starting')
fs.readFile('./files/node.txt', (err, data)=>{
    console.log('Contents: ', data + '')
})
console.log('finishing')

// console.log('starting')
// function asynchFn(callback){
//     setTimeout(function(){
//         callback("success from asynch")
//     }, 2000)
// }
// asynchFn(function(result){
//     console.log(result)
// })

// console.log('finishing')