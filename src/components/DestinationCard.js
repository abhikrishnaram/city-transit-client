import React, {useState, useEffect} from "react";
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const base_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"

const DestinationCard = () => {

  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [val1, setVal1] = useState("")
  const [val2, setVal2] = useState("")
  const [suggestion1, setSuggestion1] = useState([])
  const [suggestion2, setSuggestion2] = useState([])

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get(`${base_url}${input1}.json?bbox=-0.563049,51.259337,0.288391,51.6734077&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`);
      console.log(response.data.features)
      setSuggestion1(response.data.features)
    }
    loadUsers()
  }, [input1])

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get(`${base_url}${input2}.json?bbox=-0.563049,51.259337,0.288391,51.6734077&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`);
      console.log(response.data.features)
      setSuggestion2(response.data.features)
    }
    loadUsers()
  }, [input2])
  
  return (
    <div className="card bg-white z-200 position-relative col-lg-3 col-md-5 col-10 mx-auto mt-3 ms-md-3">      
      <div className="card-body m-3">
        <div className="h3 mb-4">Plan my journey</div>
        <form>
        <div class="input-group mb-3">
          <Autocomplete
            disablePortal
            onInputChange={(event, value) => setInput1(value)}
            id="combo-box-demo" 
            onChange={(event,value)=> setVal1(value)}
            options={suggestion1}
            getOptionLabel={option => option.place_name}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="From" />}
          />
        </div>
        <div class="input-group mb-3">
          <Autocomplete
            disablePortal
            onInputChange={(event, value) => setInput2(value)}
            id="combo-box-demo2"
            options={suggestion2}
            onChange={(event,value)=> setVal2(value)}
            getOptionLabel={option => option.place_name}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="To" />}
          />
        </div>
        <div className="btn btn-success">Find</div>
        </form>
      </div>
    </div>
  );
};

export default DestinationCard;
