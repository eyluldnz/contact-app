import { createContext, useState,useEffect} from "react";

const ThemeContext = createContext();

const themes = {
    light: {
        backgroundColor:"bg-light"
    },
    dark: {
       
        backgroundColor:"bg-dark"
    }
}


function ThemeContextProvider({ children }) {

    const [themeName, setThemeName] = useState('light');

    useEffect(() => {
        document.body.className=themeName==='light'?themes.light.backgroundColor:themes.dark.backgroundColor
        
    }, [themeName])

    return (
    <ThemeContext.Provider value={
        {
            theme: themeName === 'light' ? themes.light : themes.dark,
            setThemeName
        }
    }
    >
        {children}
    </ThemeContext.Provider>)
}

export { ThemeContext, ThemeContextProvider }