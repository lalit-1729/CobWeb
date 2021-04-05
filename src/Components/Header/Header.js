import React from "react";

function Header(){
    const imageStyle = {
        width:90,
        heigth:90
    }

    return(
        <div className="bg-gray-200 p-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex flex-row" >
                {/* Heading */}
                <div className="col-span-1 flex justify-center mt-3 md:mb-0">
                    <span className="">
                    <h6 className="uppercase text-gray-600 font-bold text-xl">Electronics Department</h6>
                    <h6 className="uppercase text-gray-600"> National institute of Technology, SURAT </h6>
                    </span>
                </div>

                {/* LOGO */}
                <div className="col-span-2">
                    <div className="flex justify-center text-center md:justify-end">
                        <img src="images/NIT_Surat_Logo.svg.png" style={imageStyle}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;