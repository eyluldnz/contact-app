import logo from './logo.svg';
import './App.css';
import Contacts from './components/contacts/Contacts';
import ThemeChangerButton from './components/themeChanger/ThemeChangerButton';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ThemeChangerButton />
        <Contacts />
      </ThemeContextProvider>

    </div>
  );
}

export default App;
