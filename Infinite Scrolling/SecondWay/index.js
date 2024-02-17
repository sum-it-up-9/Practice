const postContainer = document.querySelector(".post-container");
const loader = document.querySelector(".loader");

let isLoading=false;
let startIndex=0;
let endIndex=startIndex+14;

const url = `https://jsonplaceholder.typicode.com/posts?_start=${startIndex}&_end=${endIndex}`;


function renderData(posts){
    //console.log(posts);
    posts.forEach(post => {
        const div=document.createElement('div');
        div.append(post.title);
       // console.log(div.innerHTML);
        postContainer.append(div);
    });
}


async function FetchData(){
   
    try{
        const res=await fetch(url);
        const data=await res.json();
        renderData(data);
        startIndex = endIndex;
      endIndex = startIndex + 14;
    }catch(e){
        console.log(e);
    }finally{
        isLoading=false;
        loader.style.display='none';
    }
   
}

FetchData();

window.addEventListener('scroll',function(){
  //  console.log(this.window.scrollY);
    if (isLoading) {
        return;
    }
    if(window.scrollY +window.innerHeight >= document.body.scrollHeight){
        isLoading=true;
        loader.style.display='block';
        setTimeout(()=>{
            FetchData();
        },2000);
        
    }
});