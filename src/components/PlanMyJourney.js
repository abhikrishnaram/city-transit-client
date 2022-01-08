import React, { useState, useEffect } from 'react'
import MapComponent from './MapComponent'
import DestinationCard from './DestinationCard'
import { Link } from '@mui/material'

const PlanMyJourney = () => {   
    return (
        <div>
            <Link className="btn btn-info position-absolute top-0 end-0 m-5 text-white fw-bold" to='/'>Home</Link>        
            <div className='position-absolute w-100'><DestinationCard /></div>                     
        </div>
    )
}

export default PlanMyJourney
