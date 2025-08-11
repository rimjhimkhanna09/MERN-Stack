const generateRandomNum = require('./randomNum')
const greeting = require('./sayhii')
const operation = require('./math')


console.log(`Third random number is : ${generateRandomNum()}`)
greeting("rim")
console.log(`The result is ${operation.add(2,4)} `)
console.log(`The result is ${operation.multiply(2,4)} `)



