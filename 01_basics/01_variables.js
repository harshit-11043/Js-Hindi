const accountId= 133445
let accountEmail="harshit@linkedin.com"
var accountPassword="12345"
accountCity="Panipat"
let accountState;
// accountId=2 not allowed
console.log(accountId);
accountEmail="hl@hl.com";
accountPassword="2121212";
accountCity="Pune"
/* 
Prefer not to use var because of issue on block scope and function scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
