function generateRandomNum(){
    return Math.floor(Math.random()*100) +1
}

// generate a random number 1 to 100
console.log(`First random number is : ${generateRandomNum()}`)
console.log(`Second random number is : ${generateRandomNum()}`)
console.log(`Third random number is : ${generateRandomNum()}`)

console.log(generateRandomNum())
module.exports = generateRandomNum