import { useState } from "react";

const Jupiter = () => {
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
        <div className="jupiter">
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
                        {isOverview && <img src="images/planet-jupiter.svg" alt="jupiter" />}
                        {isStructure && <img src="images/planet-jupiter-internal.svg" alt="jupiter" />}
                        {isGeology && <div>
                            <img src="images/planet-jupiter.svg" alt="jupiter" />
                            <img src="images/geology-jupiter.png" alt="geology" />
                        </div>}
                        
                    </div>
                    <div className="definitions">
                        <h1>JUPITER</h1>
                        <p>
                            {isOverview && `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`}
                            {isStructure && `When the Juno arrived in 2016, 
                            it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`
                            }
                            {isGeology && `The best known feature of Jupiter is the Great Red Spot, 
                            a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.`
                            }
                        </p>
                        <div className="src">
                            <span>source : </span>
                            <a href="https://en.wikipedia.org/wiki/jupiter_(planet)" target="_blank" rel="noreferrer">
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
 
export default Jupiter;