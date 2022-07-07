
import React, { useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { AddModal } from '../components/AddModal';
import CardContact from '../components/CardContact';
import Navbar from '../shared/Navbar';
import Loader from '../components/Loader';
import Message from '../components/Message';

import List from './ListUser.css';
import { isEmpty } from "lodash";
import { getContact } from "../redux/Contact/Action";

const ListContact = () => {
  const listContact = useSelector((state) => state.listContact);
  const { loading, error, contact } = listContact; 
  const contactDeleted = useSelector((state) => state.contactDeleted);
  const { loading:loadingDelete, error:errorDelete, success:successDelete } = contactDeleted;
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!isEmpty(contact)) 
   
    setProductList(contact);
  }, [contact]);
  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);
  useEffect(() => {

   

    dispatch(getContact())
  

 




}, [successDelete]);

  return (
    <div style={{height:'70vh'}} >
 
    <div  className ="mt-5 " style={{maxWidth:'100vw',display:'flex',justifyContent:'center'}}>
    <h1 className="styleh1" style={{fontSize:'30px' ,color:"#f5593d"}} >   قائمة متواصلون  </h1>
  
    </div>
    <div >
   
    
  
    </div>
    {loadingDelete &&<Loader/>}
      {errorDelete &&<Message variant='danger'>{errorDelete}</Message>}
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant="danger">{error}</Message>

    ) : ( 
      <>
     

    
      {contact.length>0 ? ( 
 
    <div className="row mt-5" >
    {contact.map((item,key)=>(

     <CardContact  item={item} />
 
     ))}
     </div>
      ):(
        <div className="row mt-5" >
        <Message variant='danger'>لا يوجد متواصلون  </Message>
      

         </div>
    )}
  
      </>
   
  )}
  
    </div>
  )
}

export default ListContact;
