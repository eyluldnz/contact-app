import { useContext } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import ThemeChangerButton from './components/themeChanger/ThemeChangerButton';
import { ThemeContext, ThemeContextProvider } from './contexts/ThemeContext';
import { ThemeProvider } from 'styled-components';
import { styledComponentsTheme  } from './components/styledComponents';

function App() {

  const { themeName }=useContext(ThemeContext);

  return (
    <div className="App">
      
      <ThemeProvider theme={styledComponentsTheme[themeName]}>
        <div>
          <ThemeChangerButton />
          <Contacts />

        </div>

      </ThemeProvider>
   
    </div>
  );
}

export default App;
