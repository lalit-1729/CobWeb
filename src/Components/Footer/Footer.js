import React from "react";

function Footer(){
    return(
        <div className="bg-gray-200 p-5 mt-4">
            <div    >
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

            <div>
                <h1>Follow us on: </h1>
                <div className="flex justify-center">
                    <span className="flex items-center uppercase p-3"><img className="w-10" src="images/Footer-icons/Facebook-icon.svg"/>&nbsp;<a>Facebook</a></span>
                    <span className="flex items-center uppercase p-3"><img className="w-10" src="images/Footer-icons/YouTube-icon.svg"/>Youtube</span>
                    <span className="flex items-center uppercase p-3"><img className="w-10" src="images/Footer-icons/Instagram-icon.svg"/>Instagram</span>
                    <span className="flex items-center uppercase p-3"><img className="w-10" src="images/Footer-icons/LinkedIn-icon.svg"/>LinkedIn</span>
                    <span className="flex items-center uppercase p-3"><img className="w-10" src="images/Footer-icons/Twitter-icon.svg"/>Twitter</span>
                </div>
            </div>

        </div>
    );
};

export default Footer;