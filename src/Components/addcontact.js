import React, { useState } from 'react'

export default function Addcontact({contact}) {

  const[contactData, setContactData] = useState({name:"",email:""});

  const handlechange = (e)=>{
    if(e.target.name === "name"){
    setContactData({...contactData, name: e.target.value} )
    }
    else
    {
      setContactData({...contactData, email: e.target.value} )    
    }
  } 

  const submitcontact = ()=>{
    if(contactData.name === "" || contactData.email === "")
    {
      alert("fill the form");
    }
    contact(contactData)
    setContactData({name : "" , email :""});
  }

  return (

         <div className='container'>
      <form className='mt-2'>
        <div class="mb-3">
          <label for="text" class="form-label">Name</label>
          <input type="text" class="form-control" onChange={handlechange} aria-label="Username"  name='name' value={contactData.name}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Email</label>
          <input type="email" class="form-control" onChange={handlechange} aria-describedby="emailHelp"  name='email' value={contactData.email}/>
        </div>
      
        <button type="button" class="btn btn-primary" onClick={submitcontact}  >Add Contact</button>
      </form>
    </div>
  )
}
