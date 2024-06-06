import React from 'react';
import './PlanetInfoBar.css';
import { PlanetInfo as PlanetInfoAPIInterface } from '../../Interfaces/APIInterfaces/api-ninja';

const PlanetInfoBar: React.FC<PlanetInfoAPIInterface> = (info: PlanetInfoAPIInterface) => {

    return (
        <div className="planet-info-bar-container">
            <div className="planet-info-box">
                <h1>Planet Information</h1>
                <div className="planet-info-tag">
                    <p>Mass:</p>
                    <p>{info.mass}</p>
                </div>
                <div className="planet-info-tag">
                    <p>Radius:</p>
                    <p>{info.radius}</p>

                </div>
                <div className="planet-info-tag">
                    <p>Orbital Period:</p>
                    <p>{info.period}</p>
                </div>
                <div className="planet-info-tag">
                    <p>Semi Major Axis:</p>
                    <p>{info.semi_major_axis}</p>

                </div>
                <div className="planet-info-tag">
                    <p>Average Surface Temperature</p>
                    <p>{info.temperature}</p>

                </div>
                <div className="planet-info-tag">
                    <p>Distance (LY):</p>
                    <p>{info.distance_light_year}</p>

                </div>
                <div className="planet-info-tag">
                    <p>Mass of Host Star:</p>
                    <p>{info.host_star_mass}</p>

                </div>

                <div className="planet-info-tag">
                    <p>Temperature of Host Star:</p>
                    <p>{info.host_star_temperature}</p>
                </div>
            </div>
        </div>
    );
};

export default PlanetInfoBar;