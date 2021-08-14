import React from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const Map = ({ data }) => {
    const mapStyles ={
        height: "400px",
        width: "100%"
    }

    const defaultCenter = {
        lat: data.lat, lng: data.lng
    }

    return (
        <LoadScript googleMapsApiKey='AIzaSyBJ3DDDFFrzs5CpqcOHvNNI787t-THCM8k'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={17}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
}
