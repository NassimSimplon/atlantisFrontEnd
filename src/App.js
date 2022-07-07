import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import './App.css';

import Home from './pages/Home';
import Test from './shared/Test'
import OnePlaylist from './pages/OnePlaylist'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CoursPage from './pages/CoursPage';
import Video from './pages/Video';
import SignIn from './pages/SignIn';
import Footer from './shared/Footer';
import Contact from './pages/Contact';
import { PrivetRoute } from './HOC/PrivetRoute';
import { AdminRoute } from './HOC/AdminRoute';
import Profile from './pages/Profile';
import { isUserLoggedIn } from './redux/SignIn/Action'
import ProfilePlaylist from "./pages/ProfilePlaylist";
import ProfileVideo from "./pages/ProfileVideo";
import PrivetSession from "./pages/PrivetSession";
import Dashboard from './dashboard'
import AdminSignIn from "./pages/adminSign";
import ListUser from './pages/ListUser'
import ListContact from './pages/ListContact'
import AddVideos from "./components/AddVideos";


function App() {

  const auth = useSelector((state) => state.signInStore);
  const dispatch = useDispatch()
  useEffect(() => {
    if (auth.authenticate) {
      dispatch(isUserLoggedIn());
    }

 
   }, [auth.authenticate, dispatch]);
 
  return (
    <div className="App"  >
      <BrowserRouter>
        <div>
     
          <Test />
        
          <Switch>
       
          <Route exact path='/salia/gate/atlantis/hanafi/dashboard/allUsers' component={ListUser} />

          <Route exact path='/salia/gate/atlantis/hanafi/dashboard/ListContact' component={ListContact} />
          <Route exact path='/salia/gate/atlantis/hanafi/dashboard/AddVideos' component={AddVideos} />

       
            <Route exact path='/' component={Home} />
            <Route path='/Cours' component={CoursPage} />
            <Route path='/Playlist' component={OnePlaylist} />
            <Route path='/Video' component={Video} />
            <Route path='/SignIn' component={SignIn} />
            <Route path='/Contact' component={Contact} />
            <Route exact path="/PrivetSession" component={PrivetSession} />    
    <AdminRoute exact path='/salia/gate/atlantis/hanafi/dashboard' component={Dashboard} />  
    <Route path='/salia/gate/atlantis/hanafi/AdminSignIn' component={AdminSignIn} /> 
 
            <PrivetRoute exact path="/profile" component={Profile} />
            <Route exact path="/profile/OnePlayList" component={ProfilePlaylist} />
            <Route exact path="/profile/Cour/Video" component={ProfileVideo} />    

            
          </Switch>
          <Footer className='mt-5' />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
