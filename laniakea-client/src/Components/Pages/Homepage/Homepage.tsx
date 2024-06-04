import React from 'react';
import WelcomeBar from '../../WelcomeBar/WelcomeBar';
import ClickableCard from '../../ClickableCard/ClickableCard';
import './Homepage.css';
import ClickableCardGrid from '../../ClickableCardGrid/ClickableCardGrid';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router-dom';

interface Props {
    // Define your component props here
}

const Homepage: React.FC<Props> = () => {

    const navigate = useNavigate();


    const cards = [
        <ClickableCard
            imageUrl='https://i.imgur.com/QabizYe.gif'
            text='A Walk Through Terra'
            redirectUrl='/terra'
        />
    ]

    const handleLoginClick = () => {
        navigate('/login')
    }

    const handleSignUpClick = () => {
        navigate('/signup')
    }

    return (
        <div className='homepage-container'>
            <div className='homepage-content'>


                    <WelcomeBar text="Welcome to Laniakea!" />

                    <div className='homepage-login-signup-buttons'>
                        <Button label='Login' onClick={handleLoginClick}/>
                        <Button label='Sign Up' onClick={handleSignUpClick} />
                    </div>


                <ClickableCardGrid elements={cards}></ClickableCardGrid>
            </div>
        </div>
    );
};

export default Homepage;