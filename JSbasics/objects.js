const person={
    Firstname:"raj",
    LastName:"bandra",
    age:28,
    occupation:'IT',
};

console.log(person);

//2 types of accessing values in objects
console.log('firstname is :',person.Firstname);
console.log('fname: ',person["Firstname"]);

const year={
    1999:'good',
    2000:'bad',
}

let a=2;
const birthYear= a!==undefined ? 1999:2000;

console.log('firstname thru variable:',year[birthYear]);

console.log(person.key);


const obj={
    name:'jhon',
    age:22,
    bio:`you can't see me!`,
}

for(let key in obj){
    console.log(`key ${key} and value ${obj[key]}`);
}

console.log(Object.keys(obj),'keys');
console.log(Object.values(obj),'values');
console.log(Object.entries(obj),'entries');

Object.entries(obj).forEach(item=>console.log(`key: ${item[0]} and value:${item[1]}`));

//Object.keys(person)

//Object.values(person)

Object.entries(person).forEach( ([key,value]) => console.log(`key is ${key} value: ${value}`));


const scores={
    math:88,
    english:90,
    science:90
}


console.log( Object.values(scores).reduce( (total,score)=>score+total) );


const property='lname';
//add dyanmic property

const data2={
    name:'jc',
    [property]:'cena',
    "hello":true,
    a:100,
    b:200,
    c:300,
}

console.log(data2.hello);
console.log(data2["hello"]);


//how to iterate over objects
//use for in loop

for(key in data2){
    console.log(data2[key]);
}

//create a fucntion that multiplies all numeric property values of an object by 2

function multiplyByTwo(obj){
    for(let key in obj){
        if(typeof obj[key]==='number'){
            obj[key]*=2;
        }
    }
}

multiplyByTwo(data2);
console.log(data2);


//if object has 2 properties with the same name the last value of property name will overwrite the value
const sameName={
    a:100,
    b:200,
    a:200,
}
console.log(sameName); // {a:200,b:200}

//we can declare obj as a key using [] sq bracket but 
//check on console.log it just gives as "object object" as key
const obj1={
    [{}]:'c', // [object object]:'c' //this is how it stores
};

const aa={};
const b={key:'b'};
const c={key:'c'};

aa[b]=123;
aa[c]=456;
console.log(aa[b]); //outputs to 456


//JSON.stringifyconverts a JavaScript object or value to a JSON string. it can be used to sgtore it localstorage
//read carefully it converts it into json string not normal string...json string follows the rule of json structure while normal string is just the sequence of characters
const string=JSON.stringify(data2);
console.log(string);


//This method parses a JSON string and returns a JavaScript object or value.
console.log(JSON.parse(string));

const sett={
    name:'abc',
    age:18,
    job:'Business',

}
let jsonString=JSON.stringify(sett,["name","age"]);//only stringyfies name and age 
console.log(jsonString);
localStorage.setItem('jsonString',jsonString);//key value pair
console.log(localStorage.getItem('jsonString'));//getItem by Key

//Object destructuring
let user={
    name:'prac de',
    age:'32',
    fullName:{
        fname:'zareen',
        lname:'karoke',
    }
};
/* error
var name;
const {name}=user; cant user same name (syntaxError)
*/

//if hello key not present assign deafult value of 23 to it & age has been renamed to renamedAge
const {name,hello=23,age:renamedAge}=user;
console.log(hello);
console.log(renamedAge);


//how to destructure nested objects
const {fullName:{fname,lname}}=user;

//console.log(fullName); not defined error
console.log(fname);
console.log(lname);

//error - rest operator should be used at last
// function getItems(param1,...args,param2){

// }


// getItems(["ban",'dan'],'san','man');


function getItems(param1,...rest){
    //rest combines all into arr
    console.log(rest);
}

getItems(1,2,3,4,5,6);


console.log({a:1}==={a:1}); //false
//primitive pass by value;
let abc=10;
let xy=abc;
abc=15;
console.log(xy) //10

//when we check if two arrays or objects are equal we are checking their reference & not values

const obj12={name:'zareen'}; //strutural data types pass by refernces
const newob=obj12;

obj12[name]='kriti';
console.log(obj12); //same reference


let khar={
    name:'kriti',
    lanme:'kharbanda'
};

const newarr=[khar];
//khar=null; //reassignment so wont affect in newarr
console.log(newarr); 

khar.name='50L'; //now we modifying so it will affect newarr
console.log(newarr);



function ref(p){
    p.age=23;
    p={ //reassigning so wont affect p1
        name:'jc',
        age:50,
    };
    return p;
}

const p1={
    name:'a',
    age:30
}

const pobj2=ref(p1); //function structural type so pass by refernce
 console.log(p1);// {name:'a',age:23};
 console.log(pobj2); //{name:'jc',age:50}