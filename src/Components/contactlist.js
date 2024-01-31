import React from 'react'
import './contact.css';
import DeleteIcon from '@mui/icons-material/Delete';

export default function contactlist(props) {
  const {contactl , removecontact} = props
  const contactlist = contactl.map((val) => {
    return (
      <div className= " container mt-2">
      <div className='row'>
        <div className="col" >{val.data.name}</div>
        <div className= 'col'>{val.data.email}</div>
        <span className='col-2' onClick={()=>removecontact(val.id)}><DeleteIcon/></span>
      </div>
      </div>
    )
  });

  return (
    <div>
      {contactlist}
    </div>
  )
}
