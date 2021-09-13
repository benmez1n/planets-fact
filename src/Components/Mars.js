import { useState } from "react";

const Mars = () => {
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
        <div className="mars">
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
                        {isOverview && <img src="images/planet-mars.svg" alt="mars" />}
                        {isStructure && <img src="images/planet-mars-internal.svg" alt="mars" />}
                        {isGeology && <div>
                            <img src="images/planet-mars.svg" alt="mars" />
                            <img src="images/geology-mars.png" alt="geology" />
                        </div>}
                        
                    </div>
                    <div className="definitions">
                        <h1>mars</h1>
                        <p>
                            {isOverview && `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`}
                            {isStructure && `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`}
                            {isGeology && `Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.`}
                        </p>
                        <div className="src">
                            <span>source : </span>
                            <a href="https://en.wikipedia.org/wiki/mars_(planet)" target="_blank" rel="noreferrer">
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
 
export default Mars;