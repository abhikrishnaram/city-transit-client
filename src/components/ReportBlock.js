import { Alert, Autocomplete, Snackbar, TextareaAutosize, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getLoginState, stations } from "./firebase";

const RequestAssistance = () => {
  const loginState = getLoginState();
  if (!loginState.state) window.location.href = "/login";
  console.log(loginState);
  const [val1, setVal1] = useState("");
  const [title, setTitle] = useState("")
  const [vehicleno, setvehicleno] = useState("")
  const [contactno, setcontactno] = useState("")
  const [description, setdescription] = useState("")
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const block = {      
      location: val1.b,
      description: description,
      uid: loginState?.user?.uid || "asdasdasd"
    }

    axios.post(`${process.env.REACT_APP_SERVER_URL}/reportblockage`, block)
    .then(response => {setOpen(true); console.log(response);});
    
    // title
    // location
    // description
    // vehicle_no
    // contact_no
    // date
    // uid   
  };
  return (
    <div className="max-vw-100 min-vh-100 bg-custom d-flex justify-content-center align-items-center">
      <Link className="btn btn-info position-absolute top-0 end-0 m-5 text-white fw-bold" to='/'>Home</Link>
      <Snackbar
          open={open}
          autoHideDuration={60000}
          onClose={()=>setOpen(false)}          
        >
        <Alert severity="success" sx={{ width: '100%' }}>
            <b>Blockage reported. Thank you! </b>
        </Alert>
      </Snackbar>
      <div className="row w-100 justify-content-center">
        <div
          className="col-md-6 col-lg-4 wow bounceInUp"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="c-box" style={{ transform: "none" }}>
            <div className="c-icon" style={{ background: "#fceef3" }}>
              <i className="bi bi-briefcase" style={{ color: "#ff689b" }}></i>
            </div>
            <h4 className="c-title">Report Road Block</h4>
            <form onSubmit={handleSubmit} className="justify-content-start d-flex flex-column">
              <Autocomplete
                disablePortal
                className="my-2"
                id="combo-box-demo"
                onChange={(event, value) => setVal1(value)}
                options={stations}
                getOptionLabel={(option) => option.b}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Block locality" />}
              />
              <TextareaAutosize                
                placeholder="Description of event"
                className="my-2 mb-3"
                onChange={(e)=>setdescription(e.target.value)}
                minRows={3}
              />              
              <button className="btn btn-custom">Report Block</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestAssistance;
