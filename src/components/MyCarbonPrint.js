import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DestinationCard from './DestinationCard'
import { stations } from './firebase'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getLoginState } from './firebase'

const NeedACarpool = () => {
  
    const [data, setData] = useState([]);
    const loginState = getLoginState()  
    const dataValue = Math.random() * 1000
    // if(!loginState.state)
    //     window.location.href = "/login"

    const uid = localStorage.getItem("city-tranit"); 

    useEffect(() => {
        const loadData = async () => {
        const res = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}mycarbonFP/${uid}`
          );
          console.log(res.data);
          setData(res.data); 
        }
        loadData()
    }, [])
    
    console.log(data);    

    return (
        <div>

<div className="max-vw-100 min-vh-100 bg-custom d-flex justify-content-center align-items-center">
        <Link className="btn btn-info position-absolute top-0 end-0 m-5 text-white fw-bold" to='/'>Home</Link>        
      <div className="row justify-content-center w-100 mt-5">
        <div className="col-md-6 col-lg-4 justify-content-center align-items-center d-flex">
            <div className="c-box bg-white z-200 p-5" style={{ transform: "none", background: "url('/assets/img/confeti.png')"}}>
                <h4 className="c-title bg-white text-black fw-bold">{dataValue}</h4>            
                <p className='bg-white'>By using public transit, you have reduced 👆 gram of CO2 emission. Congratz!!</p>
          </div>
        </div>
        </div>
        </div></div>
    )
}

export default NeedACarpool
