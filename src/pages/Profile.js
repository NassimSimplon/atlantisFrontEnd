import React from "react";
import jwtDecode from "jwt-decode";
import { login } from '../redux/SignIn/Action'

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
const Profile = () => {
  const [token, setToken] = React.useState();
  const dispatch = useDispatch()

  React.useEffect(() => {
    const result = localStorage.getItem("token");
if(result){    const x = jwtDecode(result);
  setToken(x);
 console.log(x,'dsd')}
  }, []);
  const saveId = (id) => {
    window.localStorage.setItem("listID", id);
  };
  const [list, setList] = React.useState({
    fullName:token?.fullName,
    image:'',
    email:token?.email,
    cours:token?.cours
  });
  

const handelImage=(e)=>{
  e.preventDefault(); 
setList({
  fullName:token?.fullName,
  image:e.target.files[0],
  email:token?.email,
  cours:token.cours
  
})
 
}
 const test=()=>{
  const data = new FormData();
  data.append("fullName",'nass');
  data.append("image", list.image);
  data.append("email", token.email);
 
  axios.put(`https://atlantis-back.herokuapp.com/Atlantis/user/update/${token?._id}`, data 
   
  ).then(res => {
  console.log(res.data);
    var user ={
email:token?.email,
password:localStorage.getItem('testUser')
    }
    dispatch(login(user))
  }
)
 }

const [showIt,setShowIt]=React.useState(true)
 
  return (
    <div className="container-fluid" id="profile-section">
 
      <div className="row text-center">
     

          {" "}
     <div  style={{width:'100%',height:'16rem', border: "1px solid #f5593d",background:'#f5593d'}}>
   
   <div className='mt-2'   >
   {/* <div style={{position:'absolute',background:"red",display:`${showIt?'block':'none'}`}}>
 <input  type="File" name="fileToUpload" id="fileToUpload" style={{display:`${showIt?'block':'none'}`}}  onChange={(e)=>handelImage(e)} />
 
<button style={{display:`${showIt?'block':'none'}`}} onClick={()=>test()} >sadas</button>
    
 </div> */}
    <label  >
  <div class="profile-pic" style={{backgroundImage: `url(${token?.image})`}}  >
      <span class="glyphicon glyphicon-camera"></span>
      <span>Change Image</span>
  </div>
  </label>
 
</div>
 
          <h1 className="profile-name text-white">{token?.fullName}</h1>
          <h6  className="text-white" >{token?.email}</h6>
     </div>
        
        
          <h1 className="profile-name" id="profile-cour-head"> <br/>الكورسات الخاص بك   </h1>
          
        </div>
    
   
      
     
      <div className="row" id="profile-row">
      {  token?.cours.map((el) => (
          <div className="container-fluid " key={el._id}>
            <div className="row  cour-card" key={el._id}>
              <div className="col-md-7  col-sm-12   col-xl-9 col-lg-8  col-xxl-9">
                <div className="cour-card-content p-3">
                  <h1 className="cour-card-title  "> {el.introTitle}</h1>
                  <br />
                  <p className="cour-card-paragraphe ">
                    {el.introParagraphe}{" "}
                  </p>{" "}
                  <br />
                  <Link to={`/profile/OnePlayList`}>
                    <button
                      className="cour-btn "
                      href="#one-tit"
                      onClick={() => saveId(el._id)}
                    >
                      تفاصيل{" "}
                    </button>{" "}
                  </Link>
                </div>{" "}
                <br />
              </div>
              <div
                className="col-md-5  col-sm-12   col-lg-4  col-xl-3  col-xxl-3"
                id="test-card"
                sty={{padding:"0",margin:'0'}}
              >
                <img
                  className="profile-card-img p-3"
                  src={el.introImg}
                  alt="cour"
                />
              </div>
            </div>
            <hr />
          </div>
        ))} 
        
      </div>
    </div>
  );
};

export default Profile;
