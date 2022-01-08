import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { stations } from "./firebase";
import "../style/ticket.css";
import { Alert, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import { getLoginState } from './firebase'

const DestinationCard = () => {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [data, setData] = useState([]);
  const [totCost, setTotCost] = useState(0);
  const [open, setOpen] = useState(false)
  const loginState = getLoginState()  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.tfl.gov.uk/Journey/JourneyResults/${val1.a}/to/${val2.a}`
    );
    console.log(res.data);
    setData(res.data.journeys);
    setTotCost(data[0]?.fare?.totalCost || Math.floor(Math.random() * 1000));
    setOpen(true)
  };

  if(!loginState.state)
    window.location.href = "/login"

  return (
    <div className="max-vw-100 min-vh-100 bg-custom d-flex justify-content-center align-items-center">
        <Link className="btn btn-info position-absolute top-0 end-0 m-5 text-white fw-bold" to='/'>Home</Link>        
      <div className="row justify-content-start w-100 mt-5">
        <div className="col-md-6 col-lg-4 justify-content-center align-items-center d-flex">
          <div className="c-box" style={{ transform: "none" }}>
            <div className="c-icon" style={{ background: "#fceef3" }}>
              <i className="bi bi-briefcase" style={{ color: "#ff689b" }}></i>
            </div>
            <h4 className="c-title text-black-50">Plan my Journey</h4>
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

              <button className="btn btn-custom">Plan</button>
            </form>
          </div>
        </div>                          
        <div className="col-md-6 col-lg-7 c-box" style={{ transform: "none" }}>
            {data.length>0 && data.map((journey,i) => (
              <div className="border-2 border-info py-3">
                <div className="h4 fw-bold">Journey Plan {i+1}</div>
                <div>
                {journey.legs[0].departurePoint.commonName}
                {journey.legs.map(leg => (
                    <div>{leg.arrivalPoint.commonName}</div>
                ))}
                </div>
              </div>
            ))}
        </div>               
      </div>
    </div>
  );
};

export default DestinationCard;

  // const [input1, setInput1] = useState("")
  // const [input2, setInput2] = useState("")
  // const [val1, setVal1] = useState("")
  // const [val2, setVal2] = useState("")
  // const [data, setData] = useState([])
  // const [suggestion1, setSuggestion1] = useState([])
  // const [suggestion2, setSuggestion2] = useState([])

  // // useEffect(() => {
  // //   const loadUsers = async () => {
  // //     const response = await axios.get(`${base_url}${input1}.json?bbox=-0.563049,51.259337,0.288391,51.6734077&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`);
  // //     console.log(response.data.features)
  // //     setSuggestion1(response.data.features)
  // //   }
  // //   loadUsers()
  // // }, [input1])

  // // useEffect(() => {
  // //   const loadUsers = async () => {
  // //     const response = await axios.get(`${base_url}${input2}.json?bbox=-0.563049,51.259337,0.288391,51.6734077&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`);
  // //     console.log(response.data.features)
  // //     setSuggestion2(response.data.features)
  // //   }
  // //   loadUsers()
  // // }, [input2])