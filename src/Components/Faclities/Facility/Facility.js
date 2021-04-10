


import React from "react";

function Facility({SerialNo, NameOfLab, PresentFacilities, YearOfEstablishment, CostOfAsset, UsageCharges}){
        
    return(
        <div className="mx-3 bg-gray-200 hover:bg-gray-300 block justify-center rounded overflow-hidden shadow-xl px-5 py-4 my-4">
        
            <div className="mb-2">
                <p className="block text-gray-800 font-bold text-lg">{SerialNo}. </p>

                <div className="md:col-span-1 flex justify-start">
                    <h1 className="font-bold  text-gray-500">Name of Lab : {NameOfLab}</h1> 
                    <p className="text-gray-500"></p>
                </div>

                <div className="md:col-span-1">
                    <h1 className="font-bold flex text-gray-500">Lab-Facilities : &nbsp;{PresentFacilities}
                    <p className="text-gray-500"></p></h1>
                    
                </div>
            </div>
            
            <div className="grid md:grid-cols-2 my-1 flex justify-between">
                <div className="md:col-span-1 flex justify-start">
                    <h1 className="font-bold  text-gray-500">Year Of Establishment :&nbsp;</h1> 
                    <p className="text-gray-500">{YearOfEstablishment}</p>
                </div>

                <div className="md:col-span-1 flex justify-start">
                    <h1 className="font-bold  text-gray-500">Cost of Asset :&nbsp;</h1>
                    <p className="text-gray-500">{CostOfAsset}</p>
                </div>
            </div>

            <div className="flex">
                <span className="flex text-gray-600 font-bold">Usage Charges :</span> 
                <h1 className="text-gray-500">&nbsp;{UsageCharges}</h1>
            </div>
        </div>
    );
}

export default Facility;