import { Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'
import DestinationCard from './DestinationCard'
import { stations } from './firebase'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getLoginState } from './firebase'

const NeedACarpool = () => {

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
        <Link className="btn btn-info position-absolute top-0 end-0 m-5 text-white fw-bold" to='/'>Home</Link>        
      <div className="row justify-content-center w-100 mt-5">
        <div className="col-md-6 col-lg-4 justify-content-center align-items-center d-flex">
            <div className="c-box z-200" style={{ transform: "none" }}>
            <div className="c-icon" style={{ background: "#fceef3" }}>
              <i className="bi bi-briefcase" style={{ color: "#ff689b" }}></i>
            </div>
            <h4 className="c-title text-black-50">I need a ride</h4>
            <form onSubmit={handleSubmit}>
              <Autocomplete
                disablePortal
                className="my-4"
                id="combo-box-demo"
                onChange={(event, value) => setVal1(value)}
                options={stations}
                getOptionLabel={(option) => option.b}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="From" />}
              />

              <Autocomplete
                disablePortal
                className="my-4"
                options={stations}
                onChange={(event, value) => setVal2(value)}
                getOptionLabel={(option) => option.b}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="To" />}
              />

              <button className="btn btn-custom">Request</button>
            </form>
          </div>
        </div>
        </div>
        </div></div>
    )
}

export default NeedACarpool
