import React, { useRef, useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature, ZoomControl, ScaleControl, Marker, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const MapComponent = ({route1,start1,end1}) => {
  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
      
  });
  // const mapContainerRef = useRef(null);   

  //   const map = new mapboxgl.Map({
  //     container: mapContainerRef.current,
  //     style: 'mapbox://styles/abhikrishnaram/cky4i50i41g3314muv2h32rzx',      
  //     center: [-0.169000, 51.467895],
  //     zoom: 9.5,
  //   });

  //   map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

  return( 
    <div>
      <Map
        style='mapbox://styles/abhikrishnaram/cky4i50i41g3314muv2h32rzx'
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
        center={[-0.169000, 51.467895]}
        zoom={[9.5]}
      >
          <ZoomControl position="bottom-right"/>          
          <Layer type="symbol" id="marker" layout={{ "icon-image": "harbor-15" }}>
            <Feature coordinates={[-0.169000, 51.467895]} />
          </Layer>
          <Popup
            coordinates={[-0.169000, 51.467895]}
            offset={{
              'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
            }}
            className='d-none'>            
            <h1>Popup</h1>
          </Popup>
          {/* <Marker
            coordinates={[-0.2416815, 51.5285582]}
            anchor="bottom">
            <img src={"https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-08-512.png"}/>
          </Marker> */}
      </Map>;
    </div>
    );
};

export default MapComponent;