const scores={
    math:80,
    eng:80,
    grade:'B',
}

//spread

console.log({...scores,fname:'ronit',lanme:'sharma'});

const arr=[1,2,3];
console.log([...arr,23,45]);


//indices will be 0,1,2 and so on
console.log({...arr});

//rest 
//it combines all into array;  and in function it should always be at the last
function add(a,b,...restAll){
    console.log(restAll);
    console.log(arguments);
}

add(1,2,3,4,5,6,7);


const [gold,silver,bronze]=arr;
const [goold,...restAll]=arr;


const person={
    fname:'jhon',
    lname:'cena',
    ability:'invisible',
    weight:120,
}

//rename lname to lastname
const {fname,weight,lname:lastname}=person;

//if not found use default values

const {died=1988}=person;


function print({age}){
    return age>50;
}

const cena={
    name:'jc',
    age:87,
    body:'ath',
    dress:'fancy',
    tickets:'yes',
}

print(cena);


var fn=function(){
    console.log('dd');
}