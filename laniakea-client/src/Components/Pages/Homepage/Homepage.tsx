import React, { useEffect } from 'react';
import WelcomeBar from '../../WelcomeBar/WelcomeBar';
import ClickableCard from '../../ClickableCard/ClickableCard';
import './Homepage.css';
import ClickableCardGrid from '../../ClickableCardGrid/ClickableCardGrid';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router-dom';

interface Props {
}

const Homepage: React.FC<Props> = () => {

    const navigate = useNavigate();
    const [hasToken, setHasToken] = React.useState<boolean>(false);
    const [username, setUsername] = React.useState<string>('');

    const cards = [
        <ClickableCard
            imageUrl='https://i.imgur.com/GtZC05Z.png'
            text='A Walk Through Terra'
            redirectUrl='/terra'
        />,
        <ClickableCard
            imageUrl='https://i.imgur.com/yYB3SbD.png'
            text='A Stroll Through Luna'
            redirectUrl='/luna'
        />
    ]

    const handleLoginClick = () => {
        navigate('/login')
    }

    const handleSignUpClick = () => {
        navigate('/signup')
    }

    useEffect(() => {
        const token = localStorage.getItem('laniakea_site_token');
        if (token) {
            setHasToken(true);
            setUsername(localStorage.getItem('laniakea_site_username') || '');
        }
    }, []);


    return (
        <div className='homepage-container'>
            <div className='homepage-content'>


                {!hasToken && <WelcomeBar text="Welcome to Laniakea!" />}
                {hasToken && <WelcomeBar text={`Welcome back to Laniakea, ${username}!`} />}



                {
                    !hasToken &&
                    <div className='homepage-login-signup-buttons'>
                        <Button label='Login' onClick={handleLoginClick} />
                        <Button label='Sign Up' onClick={handleSignUpClick} />
                    </div>
                }

                {/* TODO: If the user is logged in, show a profile dropdown where the login buttons used to be */}
                {
                    hasToken &&
                    <div></div>
                }

                <ClickableCardGrid elements={cards}></ClickableCardGrid>
            </div>
        </div>
    );
};

export default Homepage;