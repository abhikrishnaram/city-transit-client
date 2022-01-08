import React, { useState, useEffect } from 'react';
import Homepage from './components/Homepage';
import PlanMyJourney from './components/PlanMyJourney';
import PlanACarpool from './components/PlanACarpool'
import FindMyTransit from './components/FindMyTransit'
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import Login from './components/Login';
import Register from './components/Register';
import NeedACarpool from './components/NeedACarpool'
import HaveACarpool from './components/HaveACarpool'
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {  

  const [authUser,setAuthUser] = useState(null);

  useEffect(() => {    
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  const authState = async () => {
    await onAuthStateChanged(
      (authUser) => {
        console.log(authUser);        
        if(authUser) {
          setAuthUser(authUser);
        } else {
          setAuthUser(null);
        }
      })
  }

  return( 
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/planmyjourney" element={<PlanMyJourney />} />
        <Route path="/planacarpool/needaride" element={<NeedACarpool/>} />
        <Route path="/planacarpool/havearide" element={<HaveACarpool/>} />
        <Route path="/planacarpool" element={<PlanACarpool />} />
        <Route path="/findmytransit" element={<FindMyTransit />} />
        <Route path="/" element={<Homepage />} />
      </Routes>      
    </div>
    );
};

export default App;