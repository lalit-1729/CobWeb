import React from "react";

function FacultyHeader(){
    return(
        <div className="bg-gray-200 p-5 mb-3">
                {/* Heading */}
                <div className="col-span-1 flex justify-center mt-3 ">
                    <span className="text-center">
                        <h6 className="uppercase text-gray-700 text-lg font-bold">Current Head Of Department</h6>
                        <h6 className="uppercase text-gray-600 text-xl">Dr. PIYUSH N. PATEL</h6>
                    </span>
                </div>
        </div>
    )
}

export default FacultyHeader;

