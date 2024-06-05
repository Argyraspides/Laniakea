import React from 'react';

import './ClickableCard.css';
import { useNavigate } from 'react-router-dom';
interface ClickableCardProps {
    imageUrl: string;
    text: string;
    redirectUrl: string;
}

const ClickableCard: React.FC<ClickableCardProps> = ({ imageUrl, text, redirectUrl }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(redirectUrl);
    };

    return (
        <div className="clickable-card-container" onClick={handleClick}>
            <img src={imageUrl} className="clickable-card-image" />
            <p className="clickable-card-text">{text}</p>
        </div>
    );
};

export default ClickableCard;