import React, { useEffect, useState } from 'react';
import "./PlanetInfoPage.css"
import { useParams } from 'react-router-dom';
import PlanetInfo from '../../PlanetInfo/PlanetInfo';
import { assetLinksFrontPage } from '../../../assetLinks';

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

    const { planetName } = useParams<{ planetName: string }>();
    const [planetImage, setPlanetImage] = useState<string>("");

    useEffect(() => {
        setPlanetImage(getPlanetImage(planetName as string));
    }, [planetName]);


    return (
        <div className="planet-info-container">
            <PlanetInfo name={planetName as string}></PlanetInfo>
            <div className="planet-info-image">
                <img src={planetImage} alt="planet" />
            </div>
        </div>
    );
};

export default PlanetInfoPage;