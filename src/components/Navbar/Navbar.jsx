import React from 'react';
import Logo from "../../assets/Logo.jpg"; 
const Navbar =() =>{
    return(
        <div>
            {/*Uper Navbar */}
        <div>
            <div>
                <div> 
                    <a href="#">
                        <img src={Logo}
                        alt="Logo"/>
                    </a>
                </div>
                {/* Search bar and order button */}
            </div>
            <div>
                <div className="group"> 
                    <input type="text"
                    placeholder="search"
                    className="w-[200x] sm:w-[200px]group-hover:w-[300px] transition-all
                    duration-300 rounded-full border border-gray-300 px-2 py-1 
                    focus:outline-none focus:border-1 focus:border-primary-orange-400"/>
                </div>
            </div>
        </div>
        {/* Lower Navbar */}
        <div></div>
        </div>
    )
}
export default Navbar;