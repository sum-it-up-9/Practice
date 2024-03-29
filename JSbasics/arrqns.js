//== in JavaScript is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing two variables, but this operator also checks datatype and compares two values.


const calls = [
    {name: 'jamie', numberOfCalls: 7},
    {name: 'john', numberOfCalls: 5},
    {name: 'alice', numberOfCalls: 10},
    {name: 'bob', numberOfCalls: 3},
    {name: 'emma', numberOfCalls: 8},
    {name: 'david', numberOfCalls: 6},
    {name: 'sara', numberOfCalls: 12},
    {name: 'peter', numberOfCalls: 4},
    {name: 'lisa', numberOfCalls: 9},
    {name: 'michael', numberOfCalls: 11}
];

//display in decending order and combine the duplicate records

//combine duplicate records into one;

// display in this format: jamie: 7

const singleObj=calls.reduce((acc,item)=>{
    
    if(acc[item.name]){
        acc[item.name]+=item.numberOfCalls;
    }
    else{
      acc[item.name]=item.numberOfCalls
      
    }
    return acc;
},{});

console.log(singleObj);  

//now sort in descending order

const arr=[];

for(let key in singleObj){
    arr.push({name:[key],numberOfCalls:singleObj[key]});
}

console.log(arr);

arr.sort((a,b)=>{
    //console.log(b);
    return b.numberOfCalls - a.numberOfCalls;
});

console.log('sorted arr:',arr);


/*react

const [searchTerm,setSearchTerm]=usetate(');

const searchedvalue=arr.filter(item=> item.name.toLowerCase().includes(searchTerm.toLowerCase()));

<input type="text" value="" onChange={((e)=>setSearchTerm(e.target.value))}>

*/
