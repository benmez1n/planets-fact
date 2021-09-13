import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    const menuHandler = () => {
        document.getElementById("menu").classList.toggle("menuActive")
    }
    const activeHandler = (id) => {
        const navList = Array.from(document.querySelectorAll("li"))
        navList.forEach(element => {
            element.classList.remove("navAct");
        });
        navList[id].classList.add("navAct")
    }
    return ( 
        <div className="navbar">
            <div className="container">
                <div className="header">
                    <h2>the planets</h2>
                    <img src = "images/icon-hamburger.svg" alt="menu" 
                        className="hamburger" onClick={menuHandler}/>
                </div>
                <ul id="menu">
                    <li  className="navAct" >
                    <Link to="/" onClick={()=>activeHandler(0)}>
                        mercury
                    </Link>
                    </li>
                    <li  >
                        <Link to="/venus" onClick={()=>activeHandler(1)}>
                            venus
                        </Link>
                    </li>
                    <li>
                        <Link to="/earth"  onClick={()=>activeHandler(2)}>
                            earth
                        </Link>
                    </li>
                    <li  >
                        <Link to="/mars" onClick={()=>activeHandler(3)}>
                            mars
                        </Link>
                    </li>
                    <li> 
                        <Link to="/jupiter"  onClick={()=>activeHandler(4)}>
                        jupiter
                    </Link></li>
                    <li>
                        <Link to="/saturn"  onClick={()=>activeHandler(5)}>
                        saturn
                    </Link></li>
                    <li>
                        <Link to="/uranus"  onClick={()=>activeHandler(6)}>
                        uranus
                    </Link></li>
                    <li>
                        <Link to="/neptune"  onClick={()=>activeHandler(7)}>
                        neptune
                    </Link></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;