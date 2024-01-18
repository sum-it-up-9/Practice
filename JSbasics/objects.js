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

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

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
//check on conosle.log it just gives as "object object" as key
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