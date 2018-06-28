// Pass  functions as arguments
function test(callback){
    callback();
}

test(function(){console.log('foo')})

// Returning a function from a function
function outer(){
    console.log('outer');
    var inner = function(){
        console.log('inner')
    }
    return inner;
}
// var fn = outer();
// fn();
// outer()();

// function scopes
function outer(){
    console.log('outer');
    var x = 0;
    var inner = function(){
        console.log('inner')
        console.log(x+2)
        var x = 0
    }
    return inner;
}
outer()();

// // Phase 1. Creation of scopes
// outer: [x: undefined, inner: undefined]
// inner: [x: undefined]
// // Phase 2. Executions
// outer: [x: 0, inner: fn]
// inner: [x: undefined]
