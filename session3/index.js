// var a; //undefined
// if(a){
//     console.log(a); //so wont print
// }

/*
console.log(a);
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

const a = 10;

const displayValue = () => {
    console.log(a);
    if (a){
        console.log( a); 
        const a= 11;
        console.log( a);
    }
    console.log(a);
}


displayValue(); 



var a=0;
if(a) {
    console.log(a,'a:') ;
}

let b;
{
    let b;
}

function abc() {
    var a = 1;
     let b = 1;

      {
          var a = 2;
           let b = 2;
       }
      console.log(a, b);
      }

     abc();


*/


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


// new Promise((resolve,reject)=>{
//     reject('err');
// })

// console.log(2);