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
        <Snackbar
          open={open}
          onClose={()=>setOpen(false)}          
        >
        <Alert severity="success" sx={{ width: '100%' }}>
            <b>Booking Successfull 🎉</b>
        </Alert>
      </Snackbar>
      <div className="row justify-content-start w-100">
        <div className="col-md-6 col-lg-4 justify-content-center align-items-center d-flex">
          <div className="c-box" style={{ transform: "none" }}>
            <div className="c-icon" style={{ background: "#fceef3" }}>
              <i className="bi bi-briefcase" style={{ color: "#ff689b" }}></i>
            </div>
            <h4 className="c-title text-black-50">Book a Ticket</h4>
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

              <button className="btn btn-custom">Book</button>
            </form>
          </div>
        </div>
        <div className="col-md-6 col-lg-8 justify-content-center align-items-end d-flex">
          <div className="ticket text-black">
            <div className="left"></div>
            <div className="right"></div>
            <div className="ticket-content-wrapper p-4 d-flex justify-content-center align-items-center">
              <div className="col-6 text-center">
                <b>
                  <span className="text-custom fw-bold h4">{val1.b}</span>{" "}
                  <br /> to <br />{" "}
                  <span className="text-custom fw-bold h4">{val2.b}</span>{" "}
                </b>
                <br />
                <br />
                <span className="fw-bold h5">&#8364; {totCost}</span>
              </div>
              <div className="col-4">
                <img src="/assets/img/qrcode.png" height={200} width={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
