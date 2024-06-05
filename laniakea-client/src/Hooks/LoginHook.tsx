import { useContext, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import axios from 'axios';

type LoginResult = {
    data: {
        token: string;
    }
};

const useLogin = (): [boolean, string, (username: string, password: string, token: string) => Promise<void>] => {
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const { dispatch } = useContext(AuthContext);

    const login = async (username: string, password: string, token: string): Promise<void> => {


        // First try logging in with token
        // If that fails, try logging in with username and password
        try {

            const response = await axios.post(import.meta.env.VITE_LOGIN_TOKEN_API, {
                token: token,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data: LoginResult = response;
            console.log(data)
            setMessage(data.data.token);
            setSuccess(true);

            return;

        } catch (error: any) {
            console.error('Error during login:', error);
            setSuccess(false);
            setMessage(error.response.data);
        }

        try {

            const response = await axios.post(import.meta.env.VITE_LOGIN_API, {
                username: username,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data: LoginResult = response;
            console.log(data)
            setMessage(data.data.token);
            setSuccess(true);

            // Store the token if login is successful
            if (data.data) {
                localStorage.setItem('laniakea_site_token', data.data.token);
                localStorage.setItem('laniakea_site_username', username);
            }

            dispatch({ type: 'LOGIN', token: data.data.token, username: username });

        } catch (error: any) {
            console.error('Error during login:', error);
            setSuccess(false);
            setMessage(error.response.data);
        }

    };


    return [success, message, login] as [boolean, string, (username: string, password: string, token: string) => Promise<void>];
};

export default useLogin;
