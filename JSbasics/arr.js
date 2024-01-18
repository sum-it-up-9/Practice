let arr=[];

let mixedArr=[1,2,3,'ui',true,false];
console.log(mixedArr);
console.log(mixedArr.length);

console.log(mixedArr[3][1]); //we can use str[i] so mixedArr[3] will give 'ui' and hence on string we can use str[i] 

//modify arr values
mixedArr[0]='hey';
console.log(mixedArr);


//add any index in arr;
mixedArr[10]='red';
console.log(mixedArr);


//push and pop are same as stack -- add & removes from the end of an arr
mixedArr.push(12);
mixedArr.push(24,'yellow');
console.log(mixedArr);

mixedArr.pop();
mixedArr.pop();
console.log(mixedArr);

//shift and unshift 
const qFront=mixedArr.shift(); //shift removes first element from the arr while unshift inserts element at 0th index
console.log(qFront);
console.log(mixedArr);

mixedArr.unshift('insertATFront',12,23);
console.log(mixedArr);


let arr1=[1,2,4];
let arr2=[5,6,7];

//concat -- returns new arr, doesn't modify original array
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2,66,77,88));


//includes
console.log(arr1.includes(2));

//indexOf
console.log(arr1.indexOf(2));
console.log(arr1.indexOf(2,-5)); //check mdn docs for -ve index rules
arr1.reverse() ;//reverses the orginal array
console.log(arr1);



//slice  creates a shallow copy -- 
const arr3=arr1.slice(0,1);
console.log(arr3);

let temp=arr1.slice();
console.log(temp)



//splice updates or deltes or insert elements in arr (in place - original arr)
const arr4=[1,2,3,4,5,6];
arr4.splice(3,0,44,55);
console.log(arr4);

arr4.splice(4,2);
console.log(arr4);


arr4.splice();
console.log('arr4',arr4);


let tmep2=[1,2,3];
let temp3=[1,2,3];

console.log(tmep2===temp3); //false becoz its refrence 

let temp4=temp3;
console.log(temp4===temp3); //true bcoz temp4 is pointing at temp reference


const evarr=[2,4,6];
let ans=evarr.every((x)=>{ return x%2==0});
console.log(ans);

let some=temp3.some(x=> x%2==0);

let ans2=evarr.find(x=> x>2);
console.log(ans2);

let ans3=evarr.findIndex(x=> x>2);
console.log(ans3);

let ans4=evarr.map(x=> x==2?[2,2]:1).flat();
console.log(ans4);


//flat - flattens the arr if arr is present inside arr, 2nd agrument is depth- deafult is 1
let flatarr=[1,2,[3,[4,5]]] 
console.log(flatarr.flat())// 1,2,3,[4,5]
console.log(flatarr.flat(2))//1 2,3,4,5


//forEach() always returns undefined and is not chainable & it does not modify original array , forEach is used to just perform some logic on arr elements.
evarr.forEach(x=>console.log(x*2));

let c1=[1,2,3];
let c2=[3,4];
console.log(c1.concat(c2));

let s1="hey";
let s2="yh";
console.log(s1.concat(s2));

//reduce -- 2nd argument is intial value like sum=0 --- if accumulator not passed , 0th index element will become acc and loop starts from 1st idx
let redans=c1.reduce((accumulator,x)=>x+accumulator);
console.log(redans);

let rans=c1.reduce((a,x)=>a+x,10);
console.log(rans);


//filter- shallow copy
let fans=c1.filter(x=>x%2==0);
console.log(fans);

let mapans=c1.map(x=>x*2);
console.log(mapans);

for(let num of c1){
    console.log(num);
}

