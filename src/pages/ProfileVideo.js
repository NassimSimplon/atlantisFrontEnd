import React from 'react'
 

import jwtDecode from "jwt-decode";
import Comments from '../components/Comments';
const ProfileVideo = () => {
    const [token, setToken] = React.useState();
    const [theId, setTheID] = React.useState();
  
    React.useEffect(() => {
      const result = localStorage.getItem("token");
 if(result){
  const x = jwtDecode(result);
  setToken(x);
 }
      const pId =localStorage.getItem("vId")
      setTheID(pId)
    }, []);
  return (  
    <div>
            {token?.cours.map(el => (

                <div className="container mt-4" key={el._id}>
                    {el.playlist.filter(x => x._id === theId).map(i => (
                        <div key={i._id} className="text-center">  <br />
                            <h1 className='video-title mt-5 text-center'>{i.title}</h1>
                            <br />
                            <div className="row mt-5 one-video-section"  >
                                <video controls poster={i.image} className='one-video' style={{width: '10rem !important', height: '10rem !important'}}>
                                    <source src={i.video} type='video/mp4'  style={{width: '10rem !important', height: '10rem !important'}} />
                                </video>
                            </div>
                        </div>
                    ))}
                    <br />
           {token?.cours.map(el=>(
            <div className="container mt-4" key={el._id}>
             <>{el.playlist.filter((x)=>x._id === localStorage.getItem('chapId')).map(i=>(
               <>{i.chapiter.map(z=>(
              <div>

              <h1 className='video-title mt-5 text-center'>{z.title}</h1>
                <div className="row mt-5 one-video-section"  >
                                <video controls poster={z.image} className='one-video' style={{width: '10rem !important', height: '10rem !important'}}>
                                    <source src={z.video} type='video/mp4'  style={{width: '10rem !important', height: '10rem !important'}} />
                                </video>
                                <p style={{color:"#66615b",width:"80%"}}>{z.description}    <br/><br/>     </p>
                               </div>
                         
              </div>
               ))}</>
             ))}</>
             </div> ))}
          
            </div>
            ))}
    
    
            <br />
           <br />
          <br />
        </div>
  )
}

export default ProfileVideo