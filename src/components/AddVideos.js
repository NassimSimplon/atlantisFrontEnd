import React from 'react'
import axios from 'axios'
const AddVideos = () => {  const [cour,setCour] = React.useState({
 
    video:''

  })
  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
 
    
    data.append("video", cour.video);
axios.post(`https://atlantis-back.herokuapp.com/Atlantis/video/add`,data).then(res=>{
  console.log(res.data)
})
  };  
  return (
    <div className="App mt-5" style={{height:'64.1vh'}}>
    <h1 style={{textAlign: 'center',color:"#f5593d",marginTop:'50px'}}>اضافة فيديوهات</h1>
 <form onSubmit={(e)=>handlePicture(e)}  style={{width:'100%',marginTop:'50px', display: 'flex',justifyContent: 'center'}}>
 
<div style={{backgroundColor:'#a1a1a1' ,width:'30%',height:'6rem',borderRadius:'6px', display: 'flex',justifyContent: 'center',alignItems: 'center'}}>      
 <input style={{border:'#f5593d solid 1px' ,color:'white'}}
        type="file"
        id="file"
        name="file"
        placeholder='all videos'
        onChange={(e) => setCour({...cour,video:e.target.files[0]})}
        multiple="multiple"
      />
      <input type='submit'  className='btn-top' id="register-btn" /></div>
 </form>
    </div>
  );
}

export default AddVideos