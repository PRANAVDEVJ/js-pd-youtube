const accountId = 144553
let accountEmail="pranav@gmail.com"
var accountPassword="12345"
accountCity="chennai"

// accountId = 2 // not possible as constant when fixed once cannot change its value
accountEmail="pd@gmail.com"
accountCity="pallakad"

let accountState

/* 
prefer not to use var due to issues in block and functional scope
*/

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])