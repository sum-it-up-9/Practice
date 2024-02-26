import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Blog from "./Components/Blog";
import { ThemeProvider } from "./Context/ThemeContext";
// import { createContext } from "react";

// // // Creating a context with a default value
// // const ThemeContext=createContext();
// // console.log('ThemeContext',ThemeContext);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about"  element={<About/>}  />
          <Route path="/blog" elemnt={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
