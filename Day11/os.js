const os = require('os')
const myDir = ("My Home dir is "+ os.homedir())
console.log(myDir)
const platform = `I use ${os.platform()} platform for coding`
console.log(platform)
const freeSpace = os.freemem()/1024
const freeGb = freeSpace/1024

console.log(freeGb)
console.log(os.machine())
console.log(os.release())
console.log(os.tmpdir())
console.log(os.userInfo())
console.log(os.uptime())