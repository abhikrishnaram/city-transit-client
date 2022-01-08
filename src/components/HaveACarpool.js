import React, { useState } from "react";
import DestinationCard from "./DestinationCard";
import { getLoginState, stations } from "./firebase";
import axios from "axios";
import { Link } from "react-router-dom";

const HaveACarpool = () => {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [data, setData] = useState([]);
  const loginState = getLoginState()  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.tfl.gov.uk/Journey/JourneyResults/${val1.a}/to/${val2.a}`
    );
    console.log(res.data);
    setData(res.data.journeys);
  };

  if(!loginState.state)
    window.location.href = "/login"

  return (
    <div>
      <div className="max-vw-100 min-vh-100 bg-custom d-flex justify-content-center align-items-center">
        <Link
          className="btn btn-info position-absolute top-0 end-0 m-5 text-white fw-bold"
          to="/"
        >
          Home
        </Link>
        <div className="row justify-content-center w-100 mt-5">
          <div className="col-md-6 col-lg-4 justify-content-center align-items-center d-flex">
            <div className="c-box z-200" style={{ transform: "none" }}>
              <div className="fw-bold my-3 mb-5 mx-3">
                Join me in car-pooling
              </div>
              <ul class="list-group">
                <li class="list-group-item px-3 py-4 d-flex justify-content-between align-items-center">
                  <div class="d-flex flex-column w-100 justify-content-start text-start">
                    <h5 class="mb-1">List group item heading</h5>
                    <small>a@a.com</small>                    
                  </div>                  
                  <button class="btn btn-custom ms-3">Accept</button>
                </li>
                <li class="list-group-item px-3 py-4 d-flex justify-content-between align-items-center">
                  <div class="d-flex flex-column w-100 justify-content-start text-start">
                    <h5 class="mb-1">List group item heading</h5>
                    <small>a@a.com</small>                    
                  </div>                  
                  <button class="btn btn-custom ms-3">Accept</button>
                </li>
                <li class="list-group-item px-3 py-4 d-flex justify-content-between align-items-center">
                  <div class="d-flex flex-column w-100 justify-content-start text-start">
                    <h5 class="mb-1">List group item heading</h5>
                    <small>a@a.com</small>                    
                  </div>                  
                  <button class="btn btn-custom ms-3">Accept</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaveACarpool;
