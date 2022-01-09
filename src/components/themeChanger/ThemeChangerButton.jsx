import React,{useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';

export default function ThemeChangerButton() {

    const {setThemeName}=useContext(ThemeContext);

    return <button 
    className='btn btn-primary'
    onClick={()=>setThemeName(prev=>prev==='light'?'dark':'light')}>Change Theme
    </button>
}
