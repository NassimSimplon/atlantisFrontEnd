import axios from "axios";
 export const getPlaylists = () =>async(dispatch) =>{
    try{
        const res = await axios.get('https://atlantis-back.herokuapp.com/Atlantis/Playlists/getAll');
       return dispatch({type:"SUCCED",payload:res.data})
    }catch(err) {
        console.log(err)

    }
}
