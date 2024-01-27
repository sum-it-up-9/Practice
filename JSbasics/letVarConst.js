//let const are block scoped so when we execute this block at runtime then only this vairbales will be accessble
{
    let a=10;
    const b=20;
}

let aa=30;
console.log(aa) //30
console.log(window.a) //undefined bcoz let and const are not stored in window object but in script

console.log(bb); //let and const are hoisted but they are in tempral dead zone so erroe will be cannot access b before iitlaization 
let bb;
//const c; //cannot do this, we need to intilaise const variable at the time of declaration

//var is fucntion scoped while let and const are blocked scoped

/*
var sam=20;
let sam; //Identifier 'sam' has already been declared 
*/


/*
let a=20; 
var a; //Identifier 'a' has already been declared (
*/

console.log(a); //undefined
var a;



{
    let c;
    c=20;
    const b=20;
   
}

console.log(b);


let d=10;
function add(){

}



const arr=[1,2,3,4,5];

const ans=arr.map(x=>x*2);

//arr.forEach(x=> x*2);
let arr2=[];
arr.forEach((x)=>{
    arr2.push(x*2);
})

for(let i in arr){
    arr[i]=arr[i]*2;
}
console.log(arr,'arr');

const a = 10; // it will go into script till we excute this line at run-time

const displayValue = () => {
    console.log(a);  // refers to outside a i,e, in global.... and in block scope if we have let & const they will be aviable only in block scope not to outer world;
    if (a){
        console.log( a);  // it is a block scope and we have a defined but it is const so it will be in temporal dead zone till declaration so it gives referenceError cannot access a before initlization
        const a= 11;
        console.log( a);
    }
    console.log(a);
}


displayValue(); 



var a=0; //0 means false and 1 means true 
if(a) {
    console.log(a,'a:') ;
}

var a;//undefined
if(a){ //cannot enter in loop as it is undefined
    console.log('entered')
}

let b;
{
    let b; //shadowing, 
}

function abc() {
    var a = 1;
    let b = 1;

    {
        var a = 2;//it is function scoped and as 'a' is already decalred outside so it will overwrite that value
        let b = 2; //only avilable in this block
    }
    console.log(a, b); //2 1
}

 abc();


    


/*
First hoisting takes place. Function declaration takes precedence over variable declaration during hoisting (memory creation phase).

During execution of the code, if variable is assigned at any point, then it is replaced & takes precedence over function, otherwise it remains the same function.

(Note: First read the code from Line 4 to Line 8. Then again read from beginning to end.)

console.log(a); // f a(){...} - Executed just after hoisting
console.log(b); // f b(){...} - Executed just after hoisting

var a = 100; // here variable is assigned
function a(x) {...};

function b(x) {...};
var b; // only a declaration here

console.log(a); // 100
console.log(b); // f b(){...}

*/

function test(){
  
 
    var abc =5;
    function abc(){};
    return abc;
   
}

 console.log(test());


 function a(x) {
    return x * 2;
}
var a;

console.log(a);



let varr=10;
{
    console.log(varr);
}


function testing(){
    console.log(varr);
    //let varr=20;
}

testing();


//arguments is a object and not present in arrow function
//arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
function xyz(a,b){
    arguments[0] = 99; // updating arguments[0] also updates a
    console.log(arguments); // { '0': 99, '1': 2 }
}
xyz(1,2)


//check diff between arrow and normal function : this keyword, arguments, implicit return and we cannot use arrow function as a constructor (using new keyword)

//check css specificity
//what happens when you hit url in browser

//diff between map and foreach

/*
//Imp
add() //it will print 3
function add(){
    console.log(1);
}

var add;

function add(){
    console.log(3);
}
*/


/* 
add() //it will print 3
function add(){
    console.log(1);
}

var add=function(){
    console.log(2);
};

function add(){
    console.log(3);
}

add(); //it will print 2
*/


//VIMP
/* 
add() 
function add(){
    console.log(1);
}

const add=function(){ //throws error since add is already declared and in case of const and let we cannot declare the same variable name
    console.log(2);
};

function add(){
    console.log(3);
}

add(); 
*/

