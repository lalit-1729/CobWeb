import React from "react";

function HomeHeader(){
    return(
        <div className="bg-gray-300 p-8 mx-4 mt-4 rounded">
                {/* Heading */}
                <div className="col-span-1 flex justify-center">
                    <span className="text-center">
                        <h6 className="uppercase text-gray-600 text-2xl font-bold">Department Virtual Tour</h6>
                    </span>
                </div>
        </div>
    );
};

export default HomeHeader;