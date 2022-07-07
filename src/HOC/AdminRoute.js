import React from 'react'
import {Route,Redirect} from 'react-router-dom'
 
export const AdminRoute = ({component:Component,...rest}) => {
 
    return (
        <div>
           <Route {...rest} component={(props)=>{
                const result = localStorage.getItem("token");
 
               
               if(result){
                   return <Component {...props} />
               }else {
                 return  <Redirect to={`/salia/gate/atlantis/hanafi/AdminSignIn`} />
               }
           }} /> 
        </div>
    )
}

 
