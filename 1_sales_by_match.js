'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  var sockObj = {}
  for (var i=0; i<ar.length; i++) {
    var currentSock = ar[i]
    if (sockObj[currentSock] === undefined) {
      sockObj[ar[i]] = 1
    } else {
      sockObj[ar[i]] += 1
    }
  }
  
  var totalPairs = 0

  for (var key in sockObj) {
    if (sockObj[key] < 2) {
      continue
    } 
    totalPairs += Math.floor(sockObj[key] / 2)
  }
  return totalPairs
}

var input1 = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])

var expectedOutput1 = 3

console.log(input1);

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}



// sockMerchant(10, [1, 2, 3])