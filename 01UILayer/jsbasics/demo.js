var str = "ravi"
console.log(str.split(''))
console.log(str.split('').reverse())
console.log(str.split('').reverse().join(''))

var sentence = "rainY Morning in DeLHI"
console.log(sentence[0].toUpperCase())
console.log(sentence.slice(1).toLowerCase())
console.log(sentence[0].toUpperCase() + sentence.slice(1).toLowerCase())

var todos = [];
todos.push('Go for a walk!!');
todos.push('Get milk!!');
todos.push('Item 3');
console.log(todos)
todos.splice(1,1)
console.log(todos)

var today = new Date();
console.log(today);
console.log(today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear());