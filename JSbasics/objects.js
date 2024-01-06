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


