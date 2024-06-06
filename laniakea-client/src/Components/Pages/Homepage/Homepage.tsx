import React, { useEffect } from 'react';
import WelcomeBar from '../../WelcomeBar/WelcomeBar';
import ClickableCard from '../../ClickableCard/ClickableCard';
import './Homepage.css';
import ClickableCardGrid from '../../ClickableCardGrid/ClickableCardGrid';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router-dom'

import { assetLinksFrontPage } from '../../../assetLinks';

interface Props {
}

const Homepage: React.FC<Props> = () => {

    const navigate = useNavigate();
    const [hasToken, setHasToken] = React.useState<boolean>(false);
    const [username, setUsername] = React.useState<string>('');

    const cards = [
        <ClickableCard
            imageUrl={assetLinksFrontPage.MERCURY_FRONTPAGE}
            imageSize={0.5}
            text='Mercury'
            redirectUrl='/planet/mercury'
        />,
        <ClickableCard
            imageUrl={assetLinksFrontPage.VENUS_FRONTPAGE}
            imageSize={0.7}
            text='Venus'
            redirectUrl='/planet/venus'
        />,
        <ClickableCard
            imageUrl={assetLinksFrontPage.EARTH_FRONTPAGE}
            imageSize={0.7}
            text='Earth'
            redirectUrl='/planet/earth'
        />,
        <ClickableCard
            imageUrl={assetLinksFrontPage.MOON_FRONTPAGE}
            imageSize={0.3}
            text='Moon'
            redirectUrl='/planet/moon'
        />,
        <ClickableCard
            imageUrl={assetLinksFrontPage.MARS_FRONTPAGE}
            imageSize={0.6}
            text='Mars'
            redirectUrl='/planet/mars'
        />,
        <ClickableCard
            imageUrl={assetLinksFrontPage.JUPITER_FRONTPAGE}
            imageSize={1.0}
            text='Jupiter'
            redirectUrl='/planet/jupiter'
        />,
        <ClickableCard
            imageUrl={assetLinksFrontPage.SATURN_FRONTPAGE}
            imageSize={2.5}
            text='Saturn'
            redirectUrl='/planet/saturn'
        />,
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

                {/* If the user is logged in, show a profile dropdown where */}
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