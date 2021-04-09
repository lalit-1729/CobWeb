import React from "react";

function Footer(){
    return(
        <div className="bg-gray-200  mt-1">
            <div  className="px-5"  >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex flex-row" >
                    
                    <div className="md:col-span-1 flex justify-between mt-3 md:mb-0">
                        {/* Sub Heading */}
                        <span className="">
                            <h6 className="uppercase text-gray-600 font-bold text-md">Electronics Department</h6>
                            <h6 className="uppercase text-gray-600 text-xs"> National institute of Technology, SURAT </h6>
                        </span>

                        {/* SVNIT logo */}
                        <div className="mr-32 flex h-12 w-12 text-center md:justify-end md:mr-32">
                            <img className="" src="images/NIT_Surat_Logo.svg.png"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 pt-1 pb-3">
                <h1 className="flex justify-center text-xl">Follow us on: </h1>
                    <div className="flex justify-center px-2 pb-2 pt-1">
                        <a><span className="flex items-center text-gray-600 font-semibold p-1 md:p-3"><img className="w-10" src="images/Footer-icons/Facebook-icon.svg"/>&nbsp;<p className="hidden md:block">Facebook</p></span></a>
                        {/* <span className="flex items-center text-gray-600 font-semibold uppercase p-3"><img className="w-10" src="images/Footer-icons/YouTube-icon.svg"/>&nbsp;<a>Youtube</a></span> */}
                        <a><span className="flex items-center text-gray-600 font-semibold p-1 md:p-3"><img className="w-10" src="images/Footer-icons/Instagram-icon.svg"/>&nbsp;<p className="hidden md:block">Instagram</p></span></a>
                        <a><span className="flex items-center text-gray-600 font-semibold p-1 md:p-3"><img className="w-10" src="images/Footer-icons/LinkedIn-icon.svg"/>&nbsp;<p className="hidden md:block">LinkedIn</p></span></a>
                        <a><span className="flex items-center text-gray-600 font-semibold p-1 md:p-3"><img className="w-10" src="images/Footer-icons/Twitter-icon.svg"/>&nbsp;<p className="hidden md:block">Twitter</p></span></a>
                    </div>
            </div>
            <div className="bg-gray-800">
                <span className="py-3 px-5 text-xs md:text-l text-gray-200 flex justify-center">&copy; 2021 Electronics Department , all rights reserved &#64; National institute of Technology, SURAT </span>
            </div>
        </div>
    );
};

export default Footer;