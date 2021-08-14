import axios from 'axios';
import { useState, useEffect } from 'react';

export const useGoogleAddress = address => {
    const [map, setMap] = useState({});

    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBJ3DDDFFrzs5CpqcOHvNNI787t-THCM8k`;

    useEffect(async () => {
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location);
    }, []);
    return map;
}