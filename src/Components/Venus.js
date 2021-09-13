import { useState } from "react";
const Venus = () => {
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
        <div className="venus">
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
                        {isOverview && <img src="images/planet-venus.svg" alt="venus" />}
                        {isStructure && <img src="images/planet-venus-internal.svg" alt="venus" />}
                        {isGeology && <div>
                            <img src="images/planet-venus.svg" alt="venus" />
                            <img src="images/geology-venus.png" alt="geology" />
                        </div>}
                        
                    </div>
                    <div className="definitions">
                        <h1>VENUS</h1>
                        <p>
                            {isOverview && `Venus is the second planet from the Sun.
                             It is named after the Roman goddess of love and beauty.
                              As the brightest natural object in Earth's night sky after the Moon,
                               Venus can cast shadows and can be,
                             on rare occasions, visible to the naked eye in broad daylight.`}
                            {isStructure && `The similarity in size and density between Venus and Earth suggests they
                             share a similar internal structure:
                              a core, mantle, and crust. Like that of Earth,
                               Venusian core is most likely at least partially liquid because 
                               the two planets have been cooling at about the same rate.`
                            }
                            {isGeology && `Much of the Venusian surface appears to have been shaped by volcanic activity.
                             Venus has several times as many volcanoes as Earth,
                              and it has 167 large volcanoes that are over 100 km (60 mi) across.
                             The only volcanic complex of this size on Earth is the Big Island of Hawaii.`
                            }
                        </p>
                        <div className="src">
                            <span>source : </span>
                            <a href="https://en.wikipedia.org/wiki/VENUS_(planet)" target="_blank" rel="noreferrer">
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
                        243 DAYS
                    </div>
                    <div className="infoContent">
                        <span>revolution time</span>
                        224.7 DAYS
                    </div>
                    <div className="infoContent">
                        <span>radius</span>   
                        6,051.8 KM
                    </div>
                    <div className="infoContent">
                        <span>average temperature</span>
                        471°C
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Venus;