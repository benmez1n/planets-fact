import { useState } from "react";

const Earth = () => {
    const [isOverview,setIsOverview] = useState(true)
    const [isStructure,setIsStructure] = useState(false)
    const [isGeology,setIsGeology] = useState(false)
    const overview = () => {
        setIsOverview(true)
        setIsGeology(false)
        setIsStructure(false)
    }
    const structure = () => {
        setIsOverview(false)
        setIsGeology(false)
        setIsStructure(true)
    }
    const geology = () => {
        setIsOverview(false)
        setIsGeology(true)
        setIsStructure(false)
    }
    return ( 
        <div className="earth">
                <div className="btnsSmall">
                    <button onClick={overview} className={isOverview ? "active" : undefined}>
                        overview
                    </button>
                    <button onClick={structure}  className={isStructure ? "active" : undefined}>
                        internal structure
                    </button>
                    <button onClick={geology}  className={isGeology ? "active" : undefined}>
                        surface geology
                    </button>
                </div>
            <div className="planetsContainer">
                <div className="content">
                    <div className="imgContainer">
                        {isOverview && <img src="images/planet-earth.svg" alt="earth" />}
                        {isStructure && <img src="images/planet-earth-internal.svg" alt="earth" />}
                        {isGeology && <div>
                            <img src="images/planet-earth.svg" alt="earth" />
                            <img src="images/geology-earth.png" alt="geology" />
                        </div>}
                        
                    </div>
                    <div className="definitions">
                        <h1>Earth</h1>
                        <p>
                            {isOverview && `Third planet from the Sun and the only known planet to harbor life.
                             About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. 
                             Earth's distance from the Sun,
                             physical properties and geological history have allowed life to evolve and thrive.`}
                            {isStructure && `Earth's interior, like that of the other terrestrial planets,
                             is divided into layers by their chemical or physical (rheological) properties. 
                             The outer layer is a chemically distinct silicate solid crust,
                             which is underlain by a highly viscous solid mantle.`
                            }
                            {isGeology && `The total surface area of Earth is about 510 million km2.
                             The continental crust consists of lower density material such as the igneous rocks granite and andesite.
                              Less common is basalt,
                             a denser volcanic rock that is the primary constituent of the ocean floors.`
                            }
                        </p>
                        <div className="src">
                            <span>source : </span>
                            <a href="https://en.wikipedia.org/wiki/earth_(planet)" target="_blank" rel="noreferrer">
                                wikipedia
                                <img src="images/icon-source.svg" alt="source" />
                            </a>
                        </div>
                        <div className="btnsContainer">
                            <button onClick={overview} className={isOverview ? "active" : undefined}>
                                <span>01</span><span>overview</span>
                            </button>
                            <button onClick={structure}  className={isStructure ? "active" : undefined}>
                                <span>02</span><span>internal structure</span>
                            </button>
                            <button onClick={geology}  className={isGeology ? "active" : undefined}>
                                <span>03</span><span>surface geology</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="infos">
                    <div className="infoContent">
                        <span>rotation time</span>
                        58.6 DAYS
                    </div>
                    <div className="infoContent">
                        <span>revolution time</span>
                        87.97 DAYS
                    </div>
                    <div className="infoContent">
                        <span>radius</span>   
                        2,439.7 KM
                    </div>
                    <div className="infoContent">
                        <span>average temperature</span>
                        430°C
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Earth;