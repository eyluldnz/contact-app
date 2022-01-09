import React from 'react';
import { useSelector } from 'react-redux';
import { contactSelectors } from '../../redux/slices/contactSlice'
import ContactItem from './ContactItem';

export default function ListContacts() {

    const contacts = useSelector(contactSelectors.selectAll);
    console.log(contacts);
    return (
        <div>
            {
                contacts.map((contact,index) => (<ContactItem key={index} item={contact}/>))
            }

        </div>
    )
}
