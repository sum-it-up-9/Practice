import { createContext, useContext, useEffect, useState } from "react";

// Creating a context with a default value The createContext function from React returns two properties/compoennts: a Provider and a Consumer. These components are used to set up and access the context values.
const ThemeContext=createContext();
//console.log('ThemeContext');

// Custom hook to use the theme context
export const useTheme=()=>{
   return useContext(ThemeContext);
}

//we need to wrap whole app using ThemeContext.Provider so return a react component and wrap using ThemeContext.Provider component in jsx
export const ThemeProvider = ({children}) =>{

    const [isDark,setDark]=useState(false);

    const setTheme=()=>{
        setDark(prevState=>!prevState);
    }

    let curentTheme= isDark ? "dark": "light";
    useEffect(()=>{
        // const body=document.querySelector('body');
        // if(isDark){
        //     body.classList.add('black');        
        //     body.classList.remove('white');
        // }
        // else{
        //     body.classList.remove('black');        
        //     body.classList.add('white');
        // }
        document.documentElement.setAttribute('data-theme',curentTheme);
    },[isDark])

    return (
        <ThemeContext.Provider value={{isDark,setTheme,'custom':'customvalue'}}>
            {children}
        </ThemeContext.Provider>
    )
}


