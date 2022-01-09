import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact,addContacts} from '../../redux/slices/contactSlice';


export default function Form() {

    const [name,setName]=useState('');

    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name){
            return;
        }
        if(name.split(',').length>1){
            dispatch(addContacts(name.split(',').map(person=>({id:nanoid(),name:person}))))
        }
        else{
            dispatch(addContact({id:nanoid(),name}));
        }
       
        setName('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e)=>setName(e.target.value)} />
               
            </form>
        </div>
    )
}
