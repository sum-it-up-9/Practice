

function randomFn(){
    return {
        name:"jhon",
        ref:this,
    }
}

let zar=randomFn();
console.log(zar.ref); //window

function makeThisPointToObj(){
    return{
        name:"jhon",
        ref(){
            console.log(this);
        }
    }
}

let kri=makeThisPointToObj();
console.log(kri.ref()); //points to object



const anotherobj={
    name:'zare',
    msg(){
        console.log(this.name,'from here')
    }
}

setTimeout(anotherobj.msg,1000) //it will point to window and window.name is undefined
//how to fixe wrap it into callback

setTimeout(()=>{
    anotherobj.msg();
},1000)


console.log(this);


const cal={
    read(){
        this.a=parseInt(prompt('enter first number',0));
        this.b=parseInt(prompt('enter second number',0));
    },
    sum(){
        return this.a+this.b;
    },
    multipy(){
        return this.a*this.b;
    }
}

// cal.read();
// console.log(cal.sum());
// console.log(cal.multipy());


var lname='zareen';
function printNanme(){
    console.log(this.lname,'from window');
}

const object={
    lanme:'kriti',
    method(fn){
        fn();
    }
}

object.method(printNanme); //prints zareen

var length=10;
function printNanme2(){
    console.log(this.length,'from window');
}
const objectModified={
    lanme:'kriti',
    method(){
        console.log(arguments[0]()); //argument is an object where 0,1,2 and o on are keys and parameters are values, so printName function will be present at 0th key that means it will point to arguments object and argumnets object has length key 
    }
}


objectModified.method(printNanme2,1,2); 




//implement calc;
const calc={
    total:0,
    add(a){
        this.total+=a;
        return this;//points to user
    },
    multipy(b){
        this.total*=b;
        return this;
    },
    sub(a){
        this.total -=a;
        return this;
    }

}

const res=calc.add(10).multipy(5).sub(30).add(10);
console.log(res.total);

function sum(){
    console.log(this);
}

//window.sum()
sum();

/*
const person={
    name:'ronit',
    age:28,

    printName(){
        console.log(this); //person
        let y=()=>{
            console.log(this);
        }
        y();
    },

    // arrow functions don't provide their own this binding -- behaves just like "this" in its enclosed lexical context
    arrowFunction:()=>{
        console.log(this); //window
    }

    
}

console.log(person.printName());

const printName=()=>{
    console.log(this.fname,this.lname);
}


function print(){
    console.log(this.fname,this.lname);
} 

function prinWithArguments(arg1,arg2){
    console.log(this.fname,this.lname,arg1,arg2)
}
const name1={
    fname:'sachin',
    lname:'tendulkar'
}

const name2={
    fname:'virat',
    lname:'kohli'
}

//value of this is determined by how the function is called
//but in case of call,apply & bind we can set the value of function's this reagrdless of how its called 


//printName is arrow function and arrow does not have their own this context, so it will go its lexical enclosed context which is window in this case and windows doesnt not have fname and lname so undefined will be printed on console.
printName.call(name1);


print.call(name1);
print.call(name2);
prinWithArguments.call(name1,'is','great');

//apply and call are similar except apply allows to pass in arr (only array)
prinWithArguments.apply(name1,['OP','apply']); 

let useItLater=prinWithArguments.bind(name1); //like a callback, can be used later


function addingProperties(){
    this.email=`${this.fname}@exmaple.com`
}
addingProperties.call(name1);

name1.address='30,delhi'


//Apply - allows you to pass the elements of one array as individual arguments

const arr1=[1,2,3];
const arr2=[4,5,6]
// Q- append arr2 into arr1 using apply
arr1.push.apply(arr1,arr2);
arr1.push(...arr2);

arr1.Math.max(...arr1);
arr1.Math.max.apply(arr1,arr1);


console.log(printName.bind(null)); // when pass null it points to window object in non-strict mode, and undefined in strict mode


function f(){
    console.log(this);
}

f=f.bind({name:'sum'}.bind({name:'hey'}));//prints 'sum' bcoz bind chaining doesnt exist


//IMP 
function checkPass(sucess,fail){
    console.log('sucess:',sucess);
    let pass=prompt('enter paass');
    if(pass==='AS') sucess(); //check carefully we are calling window.sucess() so this will be window
    else fail();
}

const user={
    name:'jhon cena',
    loginSucessful: function(){
        console.log(`${this.name} - sucessfull`);
    },
    loginFailed:function(){
        console.log(`${this.name} -failed`);
    },
    login:function(result){
        console.log( result? 'login scuess' : 'login failed' );
    },
    arrowfn:()=>{
        console.log(`${this.name}`);
    }

}

checkPass(user.loginSucessful.bind(user),user.loginFailed.bind(user)); //

//now do it using single function i.e login

checkPass(user.login.bind(user,true),user.login.bind(user,false)); //when we pass arguments to bind then it returns us a function which we can call it anytime , so when we call it we dont need to pass the arguments which was passed earlier


user.arrowfn.call({name:'arrow name'}); //prints window object

//VIMP - call, bind & apply doesnt work on arrow fucntions



//polyfill for call

//function.call({},args);

Function.prototype.myCall=function(context={},...args){
    if(typeof this!=='function'){
        throw new Error('this is not callable');
    }
    context.fn=this;
    context.fn(...args);
}


//polyfill for apply

Function.prototype.myApply=function(context={},argsArr=[]){
    if(typeof this!=='function'){
        throw new Error('not callable');
    }
    //generate unique property
    const uniqueKey=Math.random();
    context[uniqueKey]=this;
    const result= context[uniqueKey](...argsArr);
    delete context[uniqueKey];

    return result;
}


//polyfill for bind
printName.bind(object,arg1,arg2);

Function.prototype.myBind=function(context={},...args){
    if(typeof this!== 'function'){
        throw new Error('not callable');
    }

    const originalFunction=this;
    //this points to original function
 
    return function(...x){
        return originalFunction.call(context,...args,...x);
    }
}

checkPass(user.loginSucessful.myBind(user),user.loginFailed.bind(user));

//fn.bind(obj,arg);
Function.prototype.binddd=function(context={},...arg){

    const originalfn=this;
    return function(x){
        originalfn.call(context,...arg,...x);
    }
}

/*
const  getname = (arg1,arg2) =>{
    console.log(this.name);
}

getname.call(name2);

getname.call(name2,arg1,arg2);

getname.apply(name2,[2,3,4]);

const fn=getname.bind(name2);




*/

















/*

const piyush={
    name:'py',
    printName:function(){
        console.log(this.name);
    }
}

//piyush.printName;
setTimeout(()=>{piyush.printName()},0);
*/
var value=18;

function name(arg1,arg2){
  console.log(this.value);  
  console.log(arg1,arg2);
}

Function.prototype.mycall=function(context={},...args){
    //const newobj={};
    if(typeof this!=='function'){
        throw new Error('not callable');
    }
    let uniquerproname=Math.random();
    while(context[uniquerproname] !== undefined){
        uniquerproname=Math.random();
    }
    context.uniquerproname=this;
    const result=context.uniquerproname(...args);

    delete context[uniquerproname];

    return result;
}

Function.prototype.myapply=function(context={},args=[]){
    if(typeof this!== 'function'){
        throw new Error('not callable');
    }
    if(!Array.isArray(args)) throw new Error('args not an array');
    context.uniquerproname=this;
    context.uniquerproname(...args);
}

Function.prototype.mybind=function(context={},...args){
    if(typeof this!== 'function') throw new Error('not callable');

    context.fn=this; 
    //OR just use original function only

    return function(...args2){
        console.log(context,'ctx');
        return context.fn(...args,...args2);

    //     //OR just use original function only
    //     console.log(this);
    //     return this.call(context,...args2,...args);
    // 
    }
};

const obj={
    value:'fromObj'
}

const bnd=name.mybind(obj,'arg1');
// name.apply(obj,[])
// name.call(obj,'arg1','arg2');
console.log(bnd,'bnd');
bnd('hhh');


// function nb(){
//     console.log(this.name,this);
// }
// nb.call('hey');

// var status = '😎';

// setTimeout(() => {
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus()); //🥑
//   console.log(data.getStatus.call(this));//😎
// }, 0);


// const animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Queen' }
//   ];
  
//   function printAnimals(i) {
//       this.print = function() {
//         console.log('#' + i + ' ' + this.species
//                     + ': ' + this.name);
//       }
//       this.print();
//     }
  