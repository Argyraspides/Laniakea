import React from 'react';
import './PlanetInfo.css';
interface PlanetInfoProps {
    name: string; // name of the planet
    // mass: number;
    // radius: number;
    // period: number;
    // semi_major_axis: number;
    // temperature: number;
    // distance_light_year: number;
    // host_star_mass: number;
    // host_star_temperature: number;
}

const PlanetInfo: React.FC<PlanetInfoProps> = ({ name }) => {

    


    return (
        <div className="planet-info-container">
            <div className="planet-info-box">
                <h1>Planet Information</h1>
                <p>Planet Name: {name}</p>
               
            </div>
        </div>
    );
};

export default PlanetInfo;