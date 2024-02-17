const AllaccordionContainer=document.querySelectorAll('.accordion-container');
const InputCheckedBox=document.querySelector('#checkbox');
console.log(InputCheckedBox.checked);

function closeAll(){
    AllaccordionContainer.forEach(item=>{
        item.classList.remove('toggleClass');
        item.querySelector('.plus').innerHTML='+';
        
    })
}

InputCheckedBox.addEventListener('change',function(){
    if(InputCheckedBox.checked){

    }
    else{
        closeAll();
    }
})


AllaccordionContainer.forEach((item)=>{
    const btn=item.querySelector('.plus');
    const ans=item.querySelector('.ans');

    btn.addEventListener('click',function(){
        const isOpen=item.classList.contains('toggleClass');
       // console.dir(ans,'as');
        const InputCheckedBox=document.querySelector('#checkbox');
        const multipleAllowed=InputCheckedBox.checked;

        if(!multipleAllowed){
            closeAll();
        }
          
        if(isOpen){
            btn.innerHTML='+';
            item.classList.remove('toggleClass');
        }
        else{
            btn.innerHTML='-';
            item.classList.add('toggleClass'); 
        }
       
    });

})