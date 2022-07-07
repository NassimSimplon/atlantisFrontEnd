import React, { useEffect, useState } from 'react'
import { getPlaylists } from '../redux/cours/action'
import { useSelector, useDispatch } from 'react-redux'
import Comments from '../components/Comments'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
const Video = () => {
    const list = useSelector((state) => state.playListStore.playlist)

    const dispatch = useDispatch()
    const idVideo = window.localStorage.getItem('vidId')
    const token = window.localStorage.getItem('token')
    const final = jwtDecode(token, { header: true })
    const [comment, setComment] = useState({
        image: final.image,
        fullName: final.fullName,
        videoID: idVideo,
        comment: ""
    })
    const result = () => {

        axios.post('https://atlantis-back.herokuapp.com/Atlantis/Comments/add', { ...comment }).then(res => {
            console.log(res.data);


        })
    }

    useEffect(() => {
        dispatch(getPlaylists())


    }, [dispatch])

    return (
        <div>
            {list.filter(x => x._id === localStorage.getItem('listID')).map(el => (

                <div className="container mt-4" key={el._id}>
                    {el.playlist.filter(x => x._id == window.localStorage.getItem('vidId')).map(i => (
                        <div key={i._id}>  <br />
                            <h1 className='video-title mt-5'>{i.title}</h1>
                            <br />
                            <div className="row mt-5 one-video-section"  >
                                <video controls poster={i.image} className='one-video' style={{width: '10rem !important', height: '10rem !important'}}>
                                    <source src={i.video} type='video/mp4'  style={{width: '10rem !important', height: '10rem !important'}} />
                                </video>
                            </div>
                        </div>
                    ))}
                    <br />
           
          
            </div>
            ))}
      <div className="container">
          <div className='row'>
          <div className='col-1'></div>
              <div className='col-10 text-center '>    
                <form className='form-comment' onSubmit={result} >
                <input id='input-Comment' type="text" placeholder="تعليق" onChange={(e) => setComment({ ...comment, comment: e.target.value })} />
                <input id='submit' value='تسجيل' type="submit" />
                
            </form>
            <Comments /></div>
            <div className='col-1'></div>
          </div>
      </div>
            <br />
           <br />
          <br />
        </div>
    )
}

export default Video
