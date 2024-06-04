import React from 'react';
import './WelcomeBar.css';

interface WelcomeBarProps {
    text: string;
}

const WelcomeBar: React.FC<WelcomeBarProps> = ({ text }) => {
    return (
        <div className='titlebar-background'>
            
            <h1 className='titlebar-h1'>{text}</h1>
        </div>
    );
}

export default WelcomeBar;
