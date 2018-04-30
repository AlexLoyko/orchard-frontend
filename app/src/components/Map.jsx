import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"
import thaiMarker from '../assets/thai_marker.png';
import mapStyle from '../assets/map_style.json';


const orchardOfficeLocation = {
    lat: 40.727754,
    lng: -73.992703
};

const mapOptions = {
    styles: mapStyle,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false
};

const initialZoomLevel = 15;

export default withScriptjs(
  withGoogleMap((props) => {
    const markers = [];
    props.places.forEach( ({latitude, longitude}) => {
      markers.push(
        <Marker key={`place-${latitude}`} icon={thaiMarker} position={{ lat: latitude, lng: longitude }} />
      );
    })

    return (
      <GoogleMap
        defaultZoom={initialZoomLevel}
        defaultCenter={orchardOfficeLocation}
        defaultOptions={mapOptions}
      >
        {markers}
      </GoogleMap>
    );
  }
));
