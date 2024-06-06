import React, { useEffect, useState } from 'react';
import "./PlanetInfoPage.css"
import { useParams } from 'react-router-dom';
import PlanetInfoBar from '../../PlanetInfo/PlanetInfoBar';
import { assetLinksFrontPage } from '../../../assetLinks';
import usePlanetInfo from '../../../Hooks/PlanetInfoHook';
import Button from '../../Button/Button';
interface PlanetInfoPageProps {

}

const getPlanetImage = (planetName: string) => {
    switch (planetName) {
        case "earth":
            return assetLinksFrontPage.EARTH_FRONTPAGE;
        case "moon":
            return assetLinksFrontPage.MOON_FRONTPAGE;
        case "mercury":
            return assetLinksFrontPage.MERCURY_FRONTPAGE;
        case "venus":
            return assetLinksFrontPage.VENUS_FRONTPAGE;
        case "mars":
            return assetLinksFrontPage.MARS_FRONTPAGE;
        case "jupiter":
            return assetLinksFrontPage.JUPITER_FRONTPAGE;
        case "saturn":
            return assetLinksFrontPage.SATURN_FRONTPAGE;
        default:
            return "";
    }
}

const PlanetInfoPage: React.FC<PlanetInfoPageProps> = () => {

    const [success, message, getPlanetInfo] = usePlanetInfo();
    const { planetName } = useParams<{ planetName: string }>();
    const [ planetImage, setPlanetImage] = useState<string>("");

    useEffect(() => {
        setPlanetImage(getPlanetImage(planetName as string));
        getPlanetInfo(planetName as string);
    }, [planetName]);


    useEffect(() => {
    }, [message]);



    return (
        <div className="planet-info-page-container">
            <PlanetInfoBar {...message}></PlanetInfoBar>
            <div className="planet-info-page-image">
                <img src={planetImage} alt="planet" />
            </div>
        </div>
    );
};

export default PlanetInfoPage;