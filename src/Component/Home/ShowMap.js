import { useJsApiLoader, GoogleMap,Marker,DirectionsRenderer } from '@react-google-maps/api';
import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import './showmap.css'
function ShowMap(props) {
    const[map,setMap]=useState(/** @type google.maps.Maps */(null));
    const[center,setCenter]=useState({lat:48.8584,lng:2.2945})
    const originref=useRef();
    const destinationref=useRef();
    const[distance,setdistance]=useState(null);
    const[duration,setduration]=useState(null);
    const[directionresponse,setDirectionResponse]=useState(null);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCqL-qAvDQmfHGSxpLuLAFoTetaQiJCU2Y",
      
    });
   async function calculateRoute()
    {
        if(originref.current.value===''|| destinationref.current.value==='')
        {
            return;
        }
        // eslint-disable-next-line no-undef
        const directionService=new google.maps.DirectionsService();
        const result= await directionService.route({
             origin:originref.current.value,
             destination:destinationref.current.value,
             // eslint-disable-next-line no-undef
             travelMode:google.maps.TravelMode.DRIVING
        })
        setdistance(result.routes[0].legs[0].distance.text);
        setduration(result.routes[0].legs[0].duration.text);
        setDirectionResponse(result);
    }
    if (!isLoaded) {
        return <h1>Loading...</h1>;
    }
    const handleMapLoad = (map) => {
        // This will set the map object when it's loaded
        setMap(map);
    };
    console.log(isLoaded);
   const center2={lat:51.3434,lng:29.32232};
    
  
    return (
        <div style={{width:"30vw",height:"50vh"}}>
            <div className='map-input' style={{width:"100%",}}>
                <input type='text' placeholder='Enter origin' ref={originref}/>
                <Button onClick={() => map && map.panTo(center)}>Locate Origin</Button>
                <br/>
                <input type='text' placeholder='enter destination' ref={destinationref}/>
               <Button onClick={() => map && map.panTo(center2)}>Locate Destination</Button>
              
               {/* <Button onClick={calculateRoute}>calculateRoute</Button> */}
               {distance}{duration}
            </div>
          
              <GoogleMap center={center}  zoom={12} mapContainerStyle={{width:"100%", height:"100%"}}
         options={{
            zoomControl:false,
            streetViewControl:false,
            mapTypeControl:false,
            fullscreenControl:false,
            mapTypeControlOptions:true,
         }}
         onLoad={handleMapLoad}
         >
        {map && <Marker position={center}/>}
        {map && <Marker position={center2}/>}
        
           </GoogleMap>   
        </div>
    );
}

export default ShowMap;
