import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'
import { getPlaylists } from '../redux/cours/action'
import { useSelector, useDispatch } from 'react-redux'
import Comments from '../components/Comments'
import jwtDecode from "jwt-decode";

const ProfilePlaylist = () => {
  
    const [token, setToken] = React.useState();

    React.useEffect(() => {
      const result = localStorage.getItem("token");
   if(result){    const x = jwtDecode(result);
    setToken(x);
   console.log(x,'dsd')}
 
    },[] );
 
const nom=token?.fullName;
const image=token?.image;
    const [comment, setComment] = useState('')

 //create function to add comment

    const result = (e) => {
      e.preventDefault();
        axios.post('https://atlantis-back.herokuapp.com/Atlantis/Comment/add',{
          image: `${image}`,
          fullName: `${nom}`,
          videoID:localStorage.getItem('listID'),
          comment: comment
      }).then(res => {
            console.log(res.data);

        })
      console.log(comment,'commentcomment');
      }

      const chapId=(id)=>{
        localStorage.setItem('chapId',id);
      }
    return (
        <div className="mt-5">

 
            <div className=" ">
                <h1 className="cour-title" id='one-tit'> عناوين البرنامج
                </h1>

                <div>
                <br/><br/><br/>   <br/> 
                </div>


                {token?.cours?.filter((x) => x._id === localStorage.getItem('listID')).map(el => (

<div className="container-fluid mt-5 text-center"  >
<div clasName='introVideoSection  ' style={{display:'flex',justifyContent:'center'}}>
<video controls autoPlay id="introVideo"  >
<source src={`${el?.introVideo}.mp4`} width='50' type='video/mp4' />

</video>



</div> <p className='introP'>
!نحن روح نُزِّلت لكي ترتقي

<br/> ,<span className='gra'><b>(ADN)</b></span> نحن نَحمل موروث من أم و أب <br/>
,نحن نُولد صفحة بيضاء و تُكتب عليها برامج بالضبط مثل الكومبيوتر او الهاتف الذكي الذي يُحمَّل ببرنامج او تطبيقات<br/>.و بديهي ان النتائج نابعة من هذه البرامج و التطبيقات</p>  <p className='secondIntrop'> . صديقي،  صديقتي، اسمحوا لي أن أوضح لكم شيء مهم تنوَّر في داخلي و أريد من كل قلبي أن تتنوروا به</p><br/><br/><br/>
    {el.playlist.map(i => (

      <>{ 
        <div className="row  cour-card"   >
            <div className="col-lg-9  col-md-12 col-sm-12   " >
                <div className='cour-card-content p-3'>
                    <h1 className='cour-card-title  '> {i.chapiter[0]?.title}
                    </h1>
                    <br />
                    <p className="cour-card-paragraphe ">{i.chapiter[0]?.description}   </p>    <br />
                    <Link to='/profile/Cour/Video' style={{textDecoretion:"none"}}>     <button  className='btn-top' id="top-contact" onClick={()=>chapId(i._id)}>  مشاهدة </button></Link>
     </div>  
                    </div>
            <div className="col-lg-3 col-md-12 col-sm-12" id='test-card' >
                <img className="cour-card-img p-3" src={i.chapiter[0].image} alt='' />
            </div>



        </div>
      } </>
      
      ))}

</div>
))}
           

{localStorage.getItem("token")? null :<>
                <div className='container mt-5'  style={{border: '2px solid #f5593d' ,padding: '25px'}}>

                <h1 style={{float:'right'}}>ماذا تتوقّع من البرنامج؟ 
 ( مع التطبيق)



</h1>
<br/>
<br/>
<br/>

<h3 style={{float:'right'  }}>
.أن تعرف و تفهم جذورمشاعرك السلبية <span style={{color:'#f5593d'  }}>*</span>
</h3>
<br/>
<br/>
<h3 style={{float:'right'  }}>
.أن تعيش بأكثر توازن وتنقص الأمور التي تستفزك <span style={{color:'#f5593d'  }}>*</span>
</h3>

<br/>
<br/>
<h3 style={{float:'right'  }}>
.أن تحسن التعامل مع تحديات حياتك <span style={{color:'#f5593d'  }}>*</span>
</h3>

<br/>
<br/>
<h3 style={{float:'right'  }}>
.أن تفهم عوامل جذبك الحالي وتغيرها نحو ما تريد <span style={{color:'#f5593d'  }}>*</span>
</h3>

<br/>
<br/>
<h3 style={{float:'right'  }}>
.أن تفهم حياتك العاطفية و تحدياتها <span style={{color:'#f5593d'  }}>*</span>
</h3>
<br/>
<br/>
<h3 style={{float:'right'  }}>
.أن ترسم خطة خاصة بك لتنتقل إلى نسخة جديدة منك <span style={{color:'#f5593d'  }}>*</span>
</h3>

 
 


                </div>
<div className='container mt-5 text-center'  style={{border: '2px solid #f5593d' , background:'#f5593d',padding: '25px'}}>
<h1  style={{color:'white'}}>
الاستثمار للبرنامج
</h1>


</div>

<div className='container d-flex justify-content-center text-center'>
<h3 style={{width:'50%',marginTop:'35px'}}>قناعة مني أن هذا البرنامج ضروري لمعظم الناس اخترت أن يكون سعره مناسب للجميع. 
الطاقة التي وضعتها في هذا العمل كانت بكل حب و شغف
<br/>
<br/> . و أملي أن تستفيد منه كما أتوقع

<br/> 
قيمة الاستثمار:<span style={{color:'#f5593d'}}> 60 د
</span>
</h3>

</div>
</>
  }

<br/><br/>
<hr/>
<div className="container-fluid mt-5">
<div className="row">
<div className="col-2"></div>
<div className="col-8  d-flex justify-content-center">
 
<div className="addComment d-flex align-items-center mt-5">
<form onSubmit={(e)=>result(e)}>
<input className='comInput' placeholder='تعليقات'  dir="rtl" onChange={(e)=>setComment(e.target.value)} type='text' style={{position:'relative'}} />
<input type='submit' value='تسجيل' className='btn-top' id="top-contact" />
</form>
  
</div>
 
</div>
</div>
 
</div>
<br/>

<Comments />

                <br /><br />
            </div>

        </div>
    )
}

export default ProfilePlaylist
