import React,{useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';
import { BaseButton } from '../styledComponents';

export default function ThemeChangerButton() {

    const {setThemeName}=useContext(ThemeContext);

    return <BaseButton
    
    onClick={()=>setThemeName(prev=>prev==='light'?'dark':'light')}>Change Theme
    </BaseButton> 
}
