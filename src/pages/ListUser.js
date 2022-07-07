
import React, { useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { AddModal } from '../components/AddModal';
import CardUser from '../components/CardUser';
 
import Loader from '../components/Loader';
import Message from '../components/Message';

 
import { isEmpty } from "lodash";
import { getUsers, createUsers} from "../redux/User/Action";

const ListUser = () => {
  const listUsers = useSelector((state) => state.listUsers);
  const { loading, error, users } = listUsers; 
  const deleteUser = useSelector((state) => state.deleteUser);
  const { loading:loadingDelete, error:errorDelete, success:successDelete } = deleteUser;
  const [productList, setProductList] = useState([]);
  const createUser = useSelector((state) => state.createUser);

  const { loading:loadingAdduser, error:errorAdduser, success:successAdduser } = createUser;
  
  const dispatch = useDispatch();
   const [modal_list, setmodal_list] = useState(false);
    function tog_list() {
      setmodal_list(!modal_list);
    }
  useEffect(() => {
    if (!isEmpty(users)) 
   
    setProductList(users);
  }, [users]);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  useEffect(() => {
   dispatch(getUsers())
  console.log(listUsers.users,'listUserslillstUsers')
}, [successDelete,successAdduser]);
/* Add User */
const registre =async (form) =>{ 
  
  dispatch(createUsers(form));
   };
  return (
 <div style={{height:"50vw"}} >
 
    <div  className ="" style={{maxWidth:'100vw',display:'flex',justifyContent:'center'}}>
    <h1 className="styleh1" style={{fontSize:'30px' ,color:"#f5593d"}}>   قائمة المشتركين  </h1>
  
    </div>
    <div style={{width:"100%"}} >
    <button style={{width:'11 rem',height:"3rem",borderRadius:"4px",color:"white",float:'right',marginRight:'3rem',backgroundColor:'#f5593d' ,border:'solid 1px #f5593d'}} className="
    " 
    
    onClick={() => tog_list()}
    >اضاف مشترك</button>
  
    </div>
    
  
    {loadingDelete &&<Loader/>}
      {errorDelete &&<Message variant='danger'>{errorDelete}</Message>}
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant="danger">{error}</Message>

    ) : ( 
      <>
     

    
      {listUsers.users.length>0 ? ( 
 
    <div className="row mt-5" >
    {listUsers.users.map((item,key)=>(

     <CardUser  item={item} />
 
     ))}
     </div>):(
      
        <div className="row mt-5" >
        <Message variant='danger' >لا يوجد  مشتركين   </Message>

         </div>
      )}    
     
  
      </>
   
  )}
    <AddModal
     isOpen={modal_list}
     toggle={() => {
        tog_list();
     }}
     registre={registre}
      onClose={() => {
       setmodal_list(false);
     }}
   />
    </div>
  )
}

export default ListUser;
