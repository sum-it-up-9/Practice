let str="hello there   ";
console.log(str);
console.log(str.length);

console.log(str.toUpperCase());


let string2="   hhh hey      !";
console.log(string2.trim().toLowerCase());
console.log(string2.trimStart());
console.log(str.trimEnd());

let sentence = "hey we are buildin hey app";

//indexOf(searchString)
//indexOf(searchString, position) index no from which search starts, if omitted starts from 0th index
console.log(sentence.indexOf('hey',1));


//slice(indexStart) --indexEnd is optional
//slice(indexStart, indexEnd)

//negative index means starts from end & ending indexes starts from 1 not from 0.
//starting indexes starts form 0 like always except -ve starts from 1
console.log(sentence.slice(0)); // "hey we are buildin hey app"
console.log(sentence.slice(1)); //"ey we are buildin hey app


console.log(sentence.slice(3,-1)) // " we are buildin hey ap"
console.log(sentence.slice(11,-7));

console.log(sentence.replace('h','H')); //replaces first occurene only, use regex global for rplacing all occurences

const re = /apples/gi;
const strss = "Apples are round, and apples are juicy.";
const newstr = strss.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.


console.log(sentence.charAt(-1));//charAt does not work with -ve indexes
console.log(sentence.at(-1));

let str1='hey';
let str2='world';

console.log(str1.concat(str2,str1,"  ",' jsjk'));
console.log(str1);

// /endsWith(searchString, endPosition) 
console.log(str1.endsWith('heyllo',2));

//includes(searchString,startPosition)
console.log(str1.includes('y'));
console.log(str1.includes('ey',1));

const num = 42;
const numToString=num.toString(); // Output: "42"
console.log(typeof(numToString));
console.log(typeof(num));

const bool = true;
console.log(bool.toString()); // Output: "true"


let b=5;
let s="hey";

//template literals
console.log(`${s} and ${b}`);
console.log("${s} and ${b}");

b=6;
console.log(b);

console.log(s.includes(' '));

console.log(s.indexOf(' '));



