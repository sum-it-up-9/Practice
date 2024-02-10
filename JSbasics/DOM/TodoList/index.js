const btn=document.querySelector('#addBtn');
const todoContainer=document.querySelector('#todo-container');

btn.addEventListener('click',function(e){
    let currenBtn=e.currentTarget;
    const inputValue=currenBtn.previousElementSibling.value;
    //console.log(input);
    let li=document.createElement('li');
    li.innerHTML=` <div class="item">
    <div>${inputValue}</div>
    <div class="btn-container">
        <button onclick="edit(this)"  id="editBtn">Edit</button>
        <button onclick="remove(this)" class="removeBtn">Remove</button>
    </div>
</div>`;
    todoContainer.append(li);
});

todoContainer.addEventListener('click',function(){

})

function remove(currentElement){
    currentElement.parentElement.parentElement.parentElement.remove();
}

function edit(currentElement){

    if(currentElement.innerText !=='done'){
        let div=currentElement.parentElement.previousElementSibling;
        let input=document.createElement('input');
        input.type='text';
        input.value=div.innerText;
        div.replaceWith(input);
    
        currentElement.innerText='done';
       
    }
    else{
       
        let input=currentElement.parentElement.previousElementSibling;
        console.log(input);
        let div=document.createElement('div');
        div.innerText=input.value;
        
        if(input.value.length===0){
            alert('cannot be empty');
            return;
        }
        input.replaceWith(div);
        currentElement.innerText='Edit';
    }

   
}
