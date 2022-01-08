import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapComponent = () => {
  const mapContainerRef = useRef(null); 
  // const start = [-0.169000, 51.467895]
  
  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/driving'
  });  
  
  useEffect(() => {    
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/abhikrishnaram/cky4i50i41g3314muv2h32rzx',      
      center: [-0.169000, 51.467895],
      zoom: 9.5,
      maxBounds: [[-0.563049, 51.259337], [0.288391, 51.6734077]]
    });    

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
      
    map.addControl(directions, 'top-left');

    // clean up on unmount
    return () => map.remove();
  }, []);

  return( 
    <div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
    );
};

export default MapComponent;