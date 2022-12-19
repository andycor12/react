import React from 'react';
import { Contact }from '../models/contact.class';
import ContactState from './contactState';





const ContactList = () => {
  const newContact=new Contact ('Andres','Conrado','andres@gmail.com',false)
  return (
    <div>
      <ContactState contact={newContact}></ContactState>
    </div>
  );
};



export default ContactList;


