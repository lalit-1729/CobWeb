import React from "react";

function FacilitiesHeader(){
    return(
        <div className="bg-gray-300 p-10 rounded">
                {/* Heading */}
                <div className="col-span-1 flex justify-center">
                    <span className="text-center">
                        <h6 className="uppercase text-gray-600 text-3xl font-bold">Research Facilities</h6>
                    </span>
                </div>
        </div>
    );
};

export default FacilitiesHeader;