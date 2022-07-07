import React from "react";
import { Spinner } from "reactstrap";
import loader from "./Loader.css"
export const Loader = () => {
  return (
   <div className="d-flex justify-content-center">
       <div 
       className="spinner-border text-success"
       role="status"
       style={{ width:"50px",height:"50px"}}
       >
            <span className="sr-only">

                loading....
            </span>
       </div>

   </div>
  );
};

export default Loader