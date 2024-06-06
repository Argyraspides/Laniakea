import './ClickableCard.css';
import { useNavigate } from 'react-router-dom';
interface ClickableCardProps {
    imageUrl: string;
    imageSize: number;
    text: string;
    redirectUrl: string;
}

const ClickableCard: React.FC<ClickableCardProps> = ({ imageUrl, imageSize, text, redirectUrl }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(redirectUrl);
    };

    return (
        <div className="clickable-card-container" onClick={handleClick}>
            {/* <img src={imageUrl} className="clickable-card-image" style={{ transform: `scale(${imageSize})` }} /> */}
            <img src={imageUrl} className="clickable-card-image" style={{ transform: `scale(${imageSize})` }} />
            <p className="clickable-card-text">{text}</p>
        </div>
    );
};

export default ClickableCard;