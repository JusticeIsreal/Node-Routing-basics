const data = require("./module3")
const password = 2;

if (password > 0) {
  console.log("password is correct");
}


// sayHi("john")
// sayHi(name1)
// sayHi(name2)

console.log(data.item)

const os = require("os");

console.log(os.userInfo())
console.log(os.uptime())