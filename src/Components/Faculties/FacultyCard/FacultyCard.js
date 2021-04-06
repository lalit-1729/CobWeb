import React from "react";

function FacultyCard({imageSrc, name, qualification, designation, email}){
    
    return(
        <div className="mx-3 bg-gray-200 rounded overflow-hidden shadow-lg px-5 py-4 my-4">
        
            <div className="mb-4">
                <p className="block rounded text-gray-800 font-bold text-lg">{name} </p>
                <p className="block text-md text-gray-600">{qualification}</p>
                <p className="block text-gray-600">{designation}</p>
            </div>
            
            <div className="mb-3 flex justify-center items-center px-3">
                <img className=""  src={imageSrc} key={name} />
            </div>
            <div>
            <span className="flex text-gray-600 font-bold">email : <h1 className="font-semibold">&nbsp;{email}</h1></span>
            <button className="block">Know More</button>
            </div>
        </div>
    );
}

export default FacultyCard;