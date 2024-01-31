import React, { useEffect, useState } from 'react';
import Header from './Components/head';
import Contactadd from './Components/addcontact';
import ContactList from './Components/contactlist';
import uuid4 from 'uuid4';
function App() {
  const localStorageKey = "contact"
  const[contactl , setContactl] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))
   || [] })

  useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(contactl))
  },[contactl])

  const contact = (data)=>{
    setContactl([...contactl ,{id: uuid4(), data} ])
  }

  const removecontact = (id)=>{
    const updateList = contactl.filter((val)=>{
      return val.id  != id;
      })
      setContactl(updateList)
    }
  return (
    <div>
      <Header/>
      <Contactadd contact = {contact} />
      <ContactList contactl = {contactl}  removecontact={removecontact} />
    </div>
    
  );
}

export default App;
