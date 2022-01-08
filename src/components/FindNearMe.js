import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MapNearMe from './map/NearMeMap'

const base_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

const FindNearMe = () => {
  const [input1, setInput1] = useState("");
  const [val1, setVal1] = useState("");
  const [suggestion1, setSuggestion1] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState({})

  console.log(val1);

  const setLocation = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
    });
  };


    const loadData = async () => {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?country=gb&proximity=${val1.geometry.coordinates[0]}%2C${val1.geometry.coordinates[1]}&types=poi&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
      );
      console.log(JSON.stringify(response.data));
      setData(response.data)
    };    

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get(
        `${base_url}${input1}.json?bbox=-0.563049,51.259337,0.288391,51.6734077&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
      );
      console.log(response.data.features);
      setSuggestion1(response.data.features);
    };
    loadUsers();
  }, [input1]);

  const handleSubmit = (e) => {
    e.preventDefault()
    loadData();
  }

  return (
    <div className="max-vw-100 min-vh-100 bg-custom d-flex justify-content-center align-items-start">
      <div className="row justify-content-start w-100 position-absolute  mt-md-5 ms-md-5">
        <div className="col-lg-4 z-200 col-md-6 wow bounceInUp" data-aos="zoom-in" data-aos-delay="100">
          <div className="c-box justify-content-center align-items-center d-flex flex-column">
            <div className="c-icon" style={{ background: "#fceef3" }}>
              <i className="bi bi-briefcase" style={{ color: "#ff689b" }}></i>
            </div>
            <h3>Find near me</h3>
            <form onSubmit={handleSubmit}>
              <div class="input-group mb-3">
                <Autocomplete
                  disablePortal
                  onInputChange={(event, value) => setInput1(value)}
                  id="combo-box-demo"
                  onChange={(event, value) => setVal1(value)}
                  options={suggestion1}
                  getOptionLabel={(option) => option.place_name}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Enter your location" />
                  )}
                />
              </div>
              <button className="btn btn-primary d-none" onClick={(e) => setLocation}>
                Locate me
              </button>
              <div class="input-group mb-3">
                <TextField
                  onChange={(e) => setSearch(e.target.value)}
                  label="What do you want to find?"
                  sx={{ width: 300 }}
                />
              </div>
              <button type="submit" className="btn btn-custom">
                Find
              </button>
            </form>
          </div>
        </div>
      </div>
        <MapNearMe data={data}/>
    </div>
  );
};

export default FindNearMe;
