import axios from 'axios';
import React from 'react'
import {Modal} from 'react-bootstrap'

const AppPlaylist = ({test}) => {

    const [courses,setCourses]=React.useState([]);
    const getCourses = () => {
        axios.get("https://atlantis-back.herokuapp.com/Atlantis/Playlists/getAll").then((res) => {
            setCourses(res.data);
            
        }
        );
    }
    React.useEffect(()=>{
        getCourses();
        
    },[]);
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [courN,setCourN]=React.useState('')
    var j = [courN - 1] 

    const addPlayList =()=>
     
    { axios.put(`https://atlantis-back.herokuapp.com/Atlantis/user/update/${test?._id}`,{
        fullName:test.fullName,
        image:test.image,
        email:test.email,
        cours:[courses[j]]
    }).then(res=>
    
    console.log(res.data) 
    )

}
  
  return (
   <>
        <button className="btnCard" onClick={handleShow} style={{paddingBottom:"8px"}}>
        اضافة برنامج
  </button>
    
  <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
    
    </Modal.Header>
    <Modal.Body className='text-center'>
   <h1 style={{textAlign:"center",color:'#f5593d',fontSize:"19px"}}> ضع رقم البرنامج</h1>
 
 <input type='text' style={{marginTop:"10px"}} placeholder='هنا'  onChange={(e)=>setCourN(e.target.value)}  dir="rtl"/>
    </Modal.Body>
    <Modal.Footer>
      <button className='btn-top' id="register-btn" onClick={handleClose}>
      اغلاق
      </button>
 <button onClick={()=>addPlayList()} >ok</button>
    </Modal.Footer>
  </Modal>
   </>
  )
}

export default AppPlaylist