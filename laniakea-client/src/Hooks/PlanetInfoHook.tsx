import { useState } from 'react';
import axios from 'axios';
import { PlanetInfo } from '../Interfaces/APIInterfaces/api-ninja';

// This hook currently calls an API to get planet information
// The API is defined in the ASP.NET backend server, and is a proxy to the api-ninja API

// Modelled after:
// https://api-ninjas.com/api/planets



const usePlanetInfo = (): [boolean, PlanetInfo, (name: string) => Promise<void>] => {

    const [success, setSuccess] = useState(false);
    const [planetInfo, setPlanetInfo] = useState({});

    const getPlanetInfo = async (name: string): Promise<void> => {

        try {

            const response = await axios.post(import.meta.env.VITE_PLANET_INFO_API, {
                name: name,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data: PlanetInfo = response.data[0];
            setPlanetInfo(data);
            setSuccess(true);

        } catch (error: any) {
            console.error('Error during login:', error);
            setSuccess(false);
            setPlanetInfo(error.response.data);
        }

    };


    return [success, planetInfo, getPlanetInfo] as [boolean, PlanetInfo, (planetName: string) => Promise<void>];
};

export default usePlanetInfo;
