import React, { useState } from 'react';
import './Signup.css';
import Button from '../../Button/Button';
import useSignup from '../../../Hooks/SignupHook';


const Signup: React.FC = () => {


    const [success, message, signup] = useSignup();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        signup(username, email, password, confirmPassword);
    };

    return (
        <div className='signup-page-container'>
            <div className='signup-container'>
                <h1>Welcome Aboard!</h1>
                <br></br>
                <form className='signup-form'>
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
                        <label htmlFor="email">Email</label>
                        <input
                            className='pixel-input'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <div className="pixel-input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            className='pixel-input'
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <Button label='Log In' onClick={handleSubmit} />
                    {!success && <p style={{color: 'red'}}className="error-text pixel-text">Whoops! {message}</p>}
                    {success && <p className="success-text pixel-text">&nbsp;</p>}
                </form>


            </div>
        </div>
    );
};

export default Signup;