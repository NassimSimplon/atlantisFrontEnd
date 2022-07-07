/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";

import axios from "axios";
const Comments = () => {
  const [comment, setComment] = useState([]);
  const result = () => {
    axios.get("https://atlantis-back.herokuapp.com/Atlantis/Comments/getAll").then((res) => {
    

      setComment(res.data);
    });
  };
 
  useEffect(() => {
    result();
  }, [comment ]);
  return (
    <div className="container-fluid" id="all-theComment-section">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 text-center">
          <div className="comment-Section">
            <br />
            {comment
              .filter((x) => x.videoID === localStorage.getItem('listID') )
              .map((z) => (
                <div className="comment-block" key={z._id}>
                  <div className="comment">
                    <img
                      className="comment-image"
                      src={z.image}
                      alt="user-image"
                      height="70px"
                      width="80px"
                    />
                    <div className="comment-content">
                      <h1 className="comment-name"> {z.fullName}</h1>
                      <p className="comment-text">{z.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
    
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default Comments;
