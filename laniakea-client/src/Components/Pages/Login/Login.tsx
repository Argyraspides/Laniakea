import React, { useState } from 'react';
import './Login.css';
import Button from '../../Button/Button';
import useLogin from '../../../Hooks/LoginHook';
const Login: React.FC = () => {


    const [success, message, login] = useLogin();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        login(username, password);
    };

    return (
        <div className='login-page-container'>
            <div className='login-container'>
                <h1>Welcome Back!</h1>
                <br></br>
                <form className='login-form'>
                    <div className="pixel-input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            className='pixel-input'
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="pixel-input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            className='pixel-input'
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Button label='Log In' onClick={handleSubmit} />
                    {!success && <p style={{color: 'red'}}className="error-text pixel-text">Whoops! Wrong username or password!</p>}
                    {success && <p className="success-text pixel-text">&nbsp;</p>}
                </form>


            </div>
        </div>
    );
};

export default Login;