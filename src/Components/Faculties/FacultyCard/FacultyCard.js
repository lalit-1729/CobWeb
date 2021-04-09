import React from "react";
import KnowMorePopUp from "./KnowMorePopUp/KnowMorePopUp";

function FacultyCard({imageSrc, name, qualification, designation, email, teachingField, areaOfResearch}){

    const myStyle = {
        width:300,
        height:300
    }
        
    return(
        <div className="mx-3 bg-gray-200 hover:bg-gray-300 block justify-center rounded overflow-hidden shadow-2xl px-5 py-4 my-4">
        
            <div className="mb-3">
                <p className="block rounded text-gray-800 font-bold text-lg">{name} </p>
                <p className="block text-md text-gray-600">{qualification}</p>
                <p className="block flex justify-between items-center text-gray-600">{designation}<KnowMorePopUp teachingField={teachingField} areaOfResearch={areaOfResearch}/></p>
            </div>
            
            <div className="mb-3 flex justify-around  px-3">
                <div className="image-container m-1">
                    <img className="card-image" src={imageSrc} key={name} />
                </div>
            </div>

            <div>
                <span className="flex text-gray-600 font-bold">email: <h1 className="font-semibold">&nbsp;{email}</h1></span>
            </div>
        </div>
    );
}

export default FacultyCard;