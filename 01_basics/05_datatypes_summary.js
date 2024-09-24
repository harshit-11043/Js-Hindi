// Primitive Call by value
//7 types
//string
//number
//null
//boolean
//undefined
//symbol
//bigInt
// const score=100
// const value=100.4
// const isLoggedIn=false
// const temp=null;
// let useremail=undefined;

// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId);

//Non Primitive Call by reference
//Objects, Array,functions

// const heros=["shaktiman","naagraj","doga"]
// let myObj={
//     name:"harshit",
//     age:21
// }

// const myFunction=function(){
//     console.log("Hello World")
// }
// console.log(typeof myObj)
// console.log(typeof myFunction)
// console.log(typeof heros);

// ------------------------Memory Allocation--------------------------
//Stack Memory
//for Primitive data types




//Heap Memory(for non primitve data types)

let myYoutubeName="Harshitluthradotcom"

let anotherName=myYoutubeName;
anotherName="YoutubeHarshit";
console.log(myYoutubeName);
console.log(anotherName);

let user={
    email:"user@google.com",
    upi:"use@ohkhdfcbank.com"
}
let userTwo=user
userTwo.email="harshit@google.com"
console.log(user);
console.log(userTwo);