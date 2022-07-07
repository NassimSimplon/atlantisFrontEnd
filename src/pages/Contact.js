import React, { useState } from 'react'
import { addContact } from '../redux/Contact/Action'
import { useDispatch } from 'react-redux'
const Contact = () => {
  const [contact, setContact] = useState({
    nom: '',
    email: '',
    telephone: ''
  })
 

 
  const [showCheck, setShowCheck] = useState(false)
  const dispatch = useDispatch()
  const addOne = () => {
    dispatch(addContact(contact))
    setTimeout(()=>{
      setShowCheck(true)
     
    },500)
 
console.log(showCheck)
  }
 




  return (
    <div id='signinsec'>
{showCheck?

<div className='d-flex align-items-center justify-content-center' style={{borderRadius:"8px", width:'25%', height:'15%', zIndex:"99999", top:'50%',left:"37.7%", position:"absolute",background:'black',backgroundColor:'#f5593d'}}>

<p> !! سوف نتصل بك قريبا  </p>

</div>
:""
}
      <div className="login-box mt-3" id='contactus'>
        <h2 className='signin-title mt-3'>للتواصل
        </h2>
        <br />
        <form onSubmit={addOne}>
          <div className="user-box mt-5">
            <input type="text" name="" required onChange={(e) => setContact({ ...contact, nom: e.target.value })} />
            <label className='text-right' id='contact-name-label'>  الاسم و اللقب</label>
          </div>
          <div className="user-box mt-5">
            <input type="text" name="" required onChange={(e) => setContact({ ...contact, email: e.target.value })} />
            <label id='contact-label'> البريد الإلكتروني</label>
          </div>
          <div className="user-box mt-5">
            <input type="text" name="" required onChange={(e) => setContact({ ...contact, telephone: e.target.value })} />
            <label id='contact-all-label' > رقم الهاتف</label>
          </div>

          <a className='submit mt-5'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <input type='submit' value='إرسال' id='fasakh' />
          </a>
        </form>
        
      </div>
      <div style={{height:'5rem'}}>
      

      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Contact
