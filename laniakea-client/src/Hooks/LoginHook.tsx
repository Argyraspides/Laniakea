import { useState } from 'react';
import axios from 'axios';

type LoginResult = {
    data: string;
};

const useLogin = (): [boolean, string, (username: string, password: string) => Promise<void>] => {
    const [success, setSuccess] = useState(true);
    const [message, setMessage] = useState('');

    const login = async (username: string, password: string): Promise<void> => {
        try {
            const response = await axios.post(import.meta.env.VITE_LOGIN_API, {
                username: username,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data: LoginResult = response.data;

            setMessage(data.data);
            setSuccess(true);
        } catch (error) {
            console.error('Error during login:', error);
            setSuccess(false);
            setMessage('An error occurred during login.');
        }

    };

    return [success, message, login] as [boolean, string, (username: string, password: string) => Promise<void>];
};

export default useLogin;
