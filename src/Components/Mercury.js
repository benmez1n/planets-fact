import { useState } from "react";

const Mercury = () => {
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
        <div className="mercury">
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
                        {isOverview && <img src="images/planet-mercury.svg" alt="mercury" />}
                        {isStructure && <img src="images/planet-mercury-internal.svg" alt="mercury" />}
                        {isGeology && <div>
                            <img src="images/planet-mercury.svg" alt="mercury" />
                            <img src="images/geology-mercury.png" alt="geology" />
                        </div>}
                        
                    </div>
                    <div className="definitions">
                        <h1>MERCURY</h1>
                        <p>
                            {isOverview && `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.
                        Mercury is one of four terrestrial planets in the Solar System,
                        and is a rocky body like Earth.`}
                            {isStructure && `Mercury appears to have a solid silicate crust and mantle overlying a solid,
                             iron sulfide outer core layer, a deeper liquid core layer,
                              and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 ,
                               only slightly less than Earth's density.`
                            }
                            {isGeology && `Mercury's surface is similar in appearance to that of the Moon,
                             showing extensive mare-like plains and heavy cratering,
                              indicating that it has been geologically inactive for billions of years.
                             It is more heterogeneous than either Mars's or the Moon’s.`
                            }
                        </p>
                        <div className="src">
                            <span>source : </span>
                            <a href="https://en.wikipedia.org/wiki/Mercury_(planet)" target="_blank" rel="noreferrer">
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
 
export default Mercury;