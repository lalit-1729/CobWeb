import React, {useEffect} from "react";
import toggler from "./toggler"

function Navbar(){
    const myStyle = {
        width:20
    }

    useEffect(() => {
        toggler();
    }, [])

    return(
        <div className="rounded md:col-span-1 m-3 bg-gray-800">
            <nav >
                <div className="">
                    <div className="mx-4 border-b border-gray-100 flex justify-between  md:flex md:justify-center items-center">
                        <h1 className="text-l font-bold  uppercase p-4">
                            <a className="text-gray-300 cursor-pointer text-xl hover:text-gray-100">Electronics Department</a>
                        </h1>

                        <div className="px-4 cursor-pointer md:hidden" id="menuButton">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                    </div>
                </div>

                <ul className="text-left hidden md:block" id="menu">
                    <li className="flex flex-row text-gray-400 text-xl p-6 ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg> <a href="./" className="hover:text-gray-100">&nbsp;Home</a>
                    </li>
                    <li className="flex flex-row text-gray-400 text-xl px-6 pb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg><a className="hover:text-gray-100">&nbsp;About</a>
                    </li>

                    <li className="flex flex-row text-gray-400 text-xl px-6 pb-6">
                        <img src="images/svgs/People.svg" style={myStyle}/><a href="FacultiesPage" className="hover:text-gray-100">&nbsp;Faculties</a>
                    </li>

                    <li className="flex flex-row text-gray-400 text-xl px-6 pb-6">
                        <img src="images/svgs/Research.svg" style={myStyle}/><a className="hover:text-gray-100" href="ResearchPage">&nbsp;Projects</a>
                    </li>

                    <li className="flex flex-row text-gray-400 text-xl px-6 pb-6">
                        <img className="w-6" src="images/svgs/Facilities.svg"/><a href="ResearchFacilities" className="hover:text-gray-100">&nbsp;Facilities</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;