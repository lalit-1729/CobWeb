import React from "react";
import Popup from "reactjs-popup";

function NewLineText({text}) {
    const newText = text.split('\n').map(str => <li className="text-gray-600 pt-0 px-3">{str}</li>);
    return newText;
}

function KnowMorePopUp({teachingField, areaOfResearch}){
    return(
        <Popup nested trigger={<span className="btn mt-2 hover:bg-gray-400 cursor-pointer block rounded-full bg-gray-500 px-3 py-1 w-28 text-gray-100 transform hover:scale-110 transition ease-out duration-300">Know More</span>}>
             <div className="bg-gray-300 rounded border-4 border-gray-50 p-3">
                <h2 className="text-gray-700 font-bold">Teaching Field:</h2>
                <NewLineText text={teachingField}/>
                <h2 className="text-gray-700 font-bold">Area of Research</h2>
                <NewLineText text={areaOfResearch}/>
            </div>
        </Popup>
    )
}

export default KnowMorePopUp;