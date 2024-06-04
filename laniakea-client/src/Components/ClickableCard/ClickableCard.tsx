import React from 'react';

import './ClickableCard.css';
interface ClickableCardProps {
    imageUrl: string;
    text: string;
    redirectUrl: string;
}

const ClickableCard: React.FC<ClickableCardProps> = ({ imageUrl, text, redirectUrl }) => {
    const handleClick = () => {
        window.location.href = redirectUrl;
    };

    return (
        <div className="clickable-card-container" onClick={handleClick}>
            <img src={imageUrl} className="clickable-card-image" />
            <p className="clickable-card-text">{text}</p>
        </div>
    );
};

export default ClickableCard;