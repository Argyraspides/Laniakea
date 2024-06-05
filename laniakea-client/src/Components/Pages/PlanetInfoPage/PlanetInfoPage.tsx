import React, { useEffect, useReducer, useState } from 'react';
import "./PlanetInfoPage.css"
import { useParams } from 'react-router-dom';
import PlanetInfo from '../../PlanetInfo/PlanetInfo';

interface PlanetInfoPageProps {

}

const getPlanetImage = (planetName: string) => {
    switch (planetName) {
        case "earth":
            return "https://i.imgur.com/GtZC05Z.png";
        case "moon":
            return "https://i.imgur.com/yYB3SbD.png";
        default:
            return "https://i.imgur.com/GtZC05Z.png";
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