
console.log(this);

function sum(){
    console.log(this);
}

//window.sum()
sum();


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


//this is arrow function and arrow does not have their own this context, so it will go its lexical enclosed context which is window in this case and windows doesnt not have fname and lname so undefined will be printed on console.
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
