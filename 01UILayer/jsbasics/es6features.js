// Arrow functions

function asynchFn(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("success in asynch function")
        }, 2000)
    }) 
}
asynchFn()
.then(result => console.log(result))
.catch((error)=>{
    console.log(error)
})

function sum(x,y){
    return x + y;
}
var add  = (x,y)=> x+y