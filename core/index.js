//1. this is how most of javascript codes are executed which are present 
// in a file or in entire project.
console.log('hello World');

//4. Read file(theory.md) here using fs module and console the results of operation.
  var { readFile } = require('fs');//desctructured                                 
  readFile('theory.md','UTF-8', (err, res)=>{   //UTF for character encoding
      console.log(res);
  });
//6. Blocking code
 // Run it first and observe the output
  readFile('./theory.md', 'UTF-8', (err, file) =>{
  console.log(file);
});
//  console.log(file);
//  console.log('run me first');
 
 // change it to run it in non-blocking manner.
 // Observe the difference in blocking and non-blocking code. 

// 10. require math.js
  // console const pie and add and multiply function.

const math = require("./math.js");
console.log(math.pie);
console.log(math.sum(74,56));
console.log(math.multiply(45,10));