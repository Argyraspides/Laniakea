import { useState } from 'react';
import axios from 'axios';

type PlanetInfoResult = {
    data: {
        token: string;
    }
};

const usePlanetInfo = (): [boolean, string, (name: string) => Promise<void>] => {

    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const getPlanetInfo = async (name: string): Promise<void> => {
       
        try {

            const response = await axios.post(import.meta.env.VITE_PLANET_INFO_API, {
                name: name,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data: PlanetInfoResult = response;
            console.log(data)
            setMessage(data.data.token);
            setSuccess(true);

        } catch (error: any) {
            console.error('Error during login:', error);
            setSuccess(false);
            setMessage(error.response.data);
        }

    };


    return [success, message, getPlanetInfo] as [boolean, string, (planetName: string) => Promise<void>];
};

export default usePlanetInfo;
