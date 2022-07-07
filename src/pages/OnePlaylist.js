import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'
import { getPlaylists } from '../redux/cours/action'
import { useSelector, useDispatch } from 'react-redux'
import Comments from '../components/Comments'
const OnePlaylist = () => {
    const cour = useSelector((state) => state.playListStore.playlist)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlaylists())
 
    }, [cour, dispatch])
    const saveIt = (id,commentId) => { window.localStorage.setItem('vId', id) 
    localStorage.setItem("vidId",)
}

var parentId =localStorage.getItem('listID')

    return (
        <div className="mt-5">

 
            <div className=" ">
                <h1 className="cour-title" id='one-tit'> عناوين البرنامج
                </h1>

                <div>
                <br/><br/><br/>   <br/> 
                </div>
                {cour.filter(x => x._id === localStorage.getItem('listID')).map(el => (

                    <div className="container-fluid mt-5 text-center"  >
 <div clasName='introVideoSection  ' style={{display:'flex',justifyContent:'center'}}>
 <video controls autoPlay id="introVideo"  >
                    <source src={`${el?.introVideo}.mp4`} width='50' type='video/mp4' />
    
</video>

 
 
 </div> <p className='introP'>
 !نحن روح نُزِّلت لكي ترتقي

 <br/> ,<span className='gra'><b>(ADN)</b></span> نحن نَحمل موروث من أم و أب <br/>
,نحن نُولد صفحة بيضاء و تُكتب عليها برامج بالضبط مثل الكومبيوتر او الهاتف الذكي الذي يُحمَّل ببرنامج او تطبيقات<br/>.و بديهي ان النتائج نابعة من هذه البرامج و التطبيقات</p>  <p className='secondIntrop'> . صديقي،  صديقتي، اسمحوا لي أن أوضح لكم شيء مهم تنوَّر في داخلي و أريد من كل قلبي أن تتنوروا به</p><br/><br/><br/>
<p style={{color:'black',float:'right',paddingRight:"4rem"}}>على الكمبيوتر، بأزرار أنت تتعرف على البرنامج المُحَمَّلْ الذى يحرِّكه، هل أنت قادر على معرفة البرنامج الذي يحرِّك حياتك او جانب من جوانب حياتك؟</p>
<br/>
<p style={{color:'black',float:'right',paddingRight:"4rem"}}>:أحضرت لك بكل حب برنامج "قيودك اللاواعية" لتجيب على هذه الأسئلة المهمة</p>
<br/><br/><br/><br/>
<p style={{color:'black',float:'right',paddingRight:"4rem"}}>مالذي يقود حياتك بدون وعي منك؟</p>
<br/> <br/> <br/> 
<p style={{color:'black',float:'right',paddingRight:"4rem"}}>لماذا انت حصلت على النتائج الحالية؟</p>
<br/> <br/> <br/> 
<p style={{color:'black',float:'right',paddingRight:"4rem"}}>و كيف تتعامل مع  نفسك و مع احداث حياتك لتغير النتائج التي لا تريدها؟</p>
<br/> <br/> <br/> 
<p style={{color:'black',float:'right',paddingRight:"4rem"}}>  : من فضلك تابع فيديو المقدمه بتركيز، سيعطيك فكره على ميكانيكا ظهور الأحداث في حياتك. بالمتابعة يكون عندك وعي بالنقاط التالية </p>
           
<p style={{color:'black',float:'right',paddingRight:"4rem"}}>ا1.انت ممكن تكون مقيد بقيود انت لا تعرفها لانها مخزنه ومخبئه في اللاوعي، هي مخزنه وتشتغل في الخفاء ولا تتركك تتمتع بالتوازن في حياتك او جانب من جوانبي حياتك.
 </p>
 <br/>
 <p style={{color:'black',float:'right',paddingRight:"6rem"}}>  .ا2.التحديات الناتجة على هذا المخزون تدفع الشخص المستعد للتطور والارتقاء وفهم العلاقه بين هذا المخزون ونوعيه جذبه الحاليا
 </p>
 <p style={{color:'black',float:'right',paddingRight:"6rem"}}>  .ا2.التحديات الناتجة على هذا المخزون تدفع الشخص المستعد للتطور والارتقاء وفهم العلاقه بين هذا المخزون ونوعيه جذبه الحاليا
 </p>
 <br/><br/> <br/><br/> <br/><br/>

                <br/><br/><br/> <br/><br/>        
                        {el.playlist.map(i => (

                          <>{i.chapiter.map(z=>(
                            <div className="row  cour-card"   >
                                <div className="col-lg-9  col-md-12 col-sm-12   " >
                                    <div className='cour-card-content p-3'>
                                        <h1 className='cour-card-title  '> {z.title}
                                        </h1>
                                        <br />
                                        <p className="cour-card-paragraphe ">{z.description}   </p>    <br />
                                        </div> <br /></div>
                                <div className="col-lg-3 col-md-12 col-sm-12" id='test-card' >
                                    <img className="cour-card-img p-3" src={z.image} alt='' />
                                </div>



                            </div>
                          ))} </>
                          
                          ))}

                    </div>
                ))}

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
<br/><br/>
<Comments />

                <br /><br />
            </div>

        </div>
    )
}

export default OnePlaylist
