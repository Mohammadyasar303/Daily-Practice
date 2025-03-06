// Filtering Even Numbers Using Callback Functions

// function filterEvenNumbers(arr, isEven) {
//     // Write your code here
//     // Do not console.log, just return the result.
//     let odd=[];
  
//     for(let i=0; i<arr.length; i++){
//       if(!isEven(arr[i])){
//         odd.push(arr[i]);
//       }
//     }
//     return odd;
//   }
  
//   const isEven = (num) => num % 2 === 0;
  
//   const readline = require("readline");
  
//   const input = [];
  
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
  
//   rl.on("line", function (cmd) {
//     input.push(cmd);
//   });
  
//   rl.on("close", function (cmd) {
//     Main(input);
//   });
  
//   function Main(input) {
//     const arr = JSON.parse(input[0]).map((e) => parseInt(e, 10));
//     console.log(filterEvenNumbers(arr, isEven));
//   }

// Summing Values Using a Callback Function

function sumWithCallback(arr, callback) {
    // Do not console.log here
    // Just return the output
    let sum = 0;
    for(let i=0; i<arr.length; i++){
      sum = callback(sum, arr[i]);
    }
    return sum;
    
  }
  
  function multiplyByTwo(sum,num) {
    return sum + num * 2;
  }
  
  const readline = require("readline");
  
  const input = [];
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on("line", function (cmd) {
    input.push(cmd);
  });
  
  rl.on("close", function (cmd) {
    Main(input);
  });
  
  function Main(input) {
    const arr = JSON.parse(input[0]);
    console.log(sumWithCallback(arr, multiplyByTwo));
  }
  
  