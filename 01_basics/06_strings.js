const name="Harshit ";
const repoCount=10
// Not recommended
// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName= new String('harshit-hl-youtube-luthra');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString= gameName.substring(0,4);
console.log(newString);
const anotherString=gameName.slice(-8,5)
console.log(anotherString);

const newOne="    Harshit     ";
console.log(newOne);
console.log(newOne.trim());

const url='https://harshit-luthra-500';
console.log(url.replace('-',"%20"));
console.log(url.includes('arpit'));


console.log(gameName.split('-'));
console.log(gameName.bold);




