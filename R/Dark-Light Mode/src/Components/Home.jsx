import { useTheme } from "../Context/ThemeContext"

const Home = () => {
    const {isDark,setTheme}=useTheme();
    //console.log(data,'data');
  return (
    <div>
      <button onClick={()=>{setTheme()}}>Change Theme</button>
    </div>
  )
}

export default Home
