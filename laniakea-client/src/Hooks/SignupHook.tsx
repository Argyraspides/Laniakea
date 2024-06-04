import { useState } from 'react';
import axios from 'axios';

type signupResult = {
    data: string;
};

const useSignup = (): [boolean, string, (username: string, email: string, password: string, confirmPassword: string) => Promise<void>] => {
    const [success, setSuccess] = useState(true);
    const [message, setMessage] = useState('');

    const signup = async (username: string, email: string, password: string, confirmPassword: string): Promise<void> => {

        console.log(email, username, password, confirmPassword);

        if(password !== confirmPassword) { 
            setSuccess(false);
            setMessage('Passwords do not match.');
            return;
        }
        
        try {

            const response = await axios.post(import.meta.env.VITE_SIGNUP_API, {
                username: username,
                email: email,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data: signupResult = response.data;

            setMessage(data.data);
            setSuccess(true);
        } catch (error: any) {
            console.error('Error during signup:', error);
            setSuccess(false);
            setMessage(error.response.data);
        }

    };

    return [success, message, signup] as [boolean, string, (username: string, email: string, password: string, confirmPassword: string) => Promise<void>];
};

export default useSignup;
