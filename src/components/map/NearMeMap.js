import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapComponent = (data) => {
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

    map.on('load', () => {
        // Add an image to use as a custom marker
        map.loadImage('https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
            (error, image) => {
                if (error) throw error;
                map.addImage('custom-marker', image);
                
                // Add a GeoJSON source with 2 points
                map.addSource('points', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {                            
                                'type': 'Feature',
                                'geometry': {
                                   'type': 'Point',
                                    'coordinates': [51.404389,-0.241418]
                                },
                                'properties': {'title': 'Mapbox DC'}
                            },
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [51.382967,0.110374]
                                },
                                'properties': {'title': 'Mapbox SF'}
                            }
                        ]
                    }
                });

                // Add a symbol layer
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'points',
                    'layout': {
                        'icon-image': 'custom-marker',                        
                        'text-field': ['get', 'title'],
                        'text-font': ['Open Sans Semibold','Arial Unicode MS Bold'],
                        'text-offset': [0, 1.25],
                        'text-anchor': 'top'
                    }
                });
            })
    })

    // map.on('load', () => {
    //     map.addSource('searchresults', {
    //         'type': 'geojson',        
    //         'data': JSON.stringify(data)
    //     });
         
    //     map.addLayer({
    //         'id': 'searchresults-layer',
    //         'type': 'circle',
    //         'source': 'searchresults',
    //         'paint': {
    //         'circle-radius': 20,
    //         'circle-stroke-width': 2,
    //         'circle-color': 'red',
    //         'circle-stroke-color': 'white'
    //         }
    //     });    
    // })

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