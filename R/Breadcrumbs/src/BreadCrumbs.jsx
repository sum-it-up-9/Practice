import { Link, useLocation } from "react-router-dom"

const  BreadCrumbs=()=>{

    const {pathname}=useLocation();
   
    const pathnameArr=pathname.split('/');
    pathnameArr.shift(); //pathnameAr..filter(x=>x); //removes empty string as empty string is falsy
  //  console.log(pathnameArr,'s');
    let path='/';

    return(
        <div className="container">
        <Link to="/">Home</Link>
        {pathnameArr.map((BreadCrumb,index)=>{
            path+=`${BreadCrumb}/`;
            const lastIndex = index===pathnameArr.length-1;
            return lastIndex ? <span key={index}> / {BreadCrumb}</span> : <Link key={index} to={`${path}`}> / {BreadCrumb}</Link>
        })}

        </div>
    )
}

export default BreadCrumbs;