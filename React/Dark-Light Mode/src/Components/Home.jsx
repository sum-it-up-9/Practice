import { useReducer } from "react";
import { useTheme } from "../Context/ThemeContext"

const Home = () => {
    const {isDark,setTheme}=useTheme();
    const obj=useTheme();
    console.log(obj);
    //console.log(data,'data');

    
  return (
    <div>
        <button onClick={()=>{setTheme()}}>Change Theme</button>
    </div>
  )
}

export default Home
