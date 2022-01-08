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
import FindNearMe from './components/FindNearMe'
import RequestAssistance from './components/RequestAssistance';
import BookATicket from './components/BookATicket'
import MapComponent from './components/MapComponent';
const App = () => {  

  useEffect(() => {    
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();    
  }, []);

  return( 
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/planmyjourney" element={<PlanMyJourney />} />
        <Route path="/findnearme" element={<FindNearMe />} />
        <Route path="/planacarpool/needaride" element={<NeedACarpool/>} />
        <Route path="/planacarpool/havearide" element={<HaveACarpool/>} />
        <Route path="/planacarpool" element={<PlanACarpool />} />
        <Route path="/findmytransit" element={<FindMyTransit />} />
        <Route path="/bookaticket" element={<BookATicket />} />
        <Route path="/map" element={<MapComponent />} />
        <Route path="/requestassistance" element={<RequestAssistance />} />
        <Route path="/" element={<Homepage />} />
      </Routes>      
    </div>
    );
};

export default App;