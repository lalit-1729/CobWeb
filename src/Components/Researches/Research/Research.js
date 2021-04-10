import React from "react";

function Research({SrNo, ProjectTitle, RollNo, StudentName, ProjectGuide, color}){
    return(
        <tr className={color === "1" ?`bg-gray-200`:`bg-gray-50`}>
            <td className={color === "1" ?`border-r border-gray-50`:`border-r border-gray-200`}s>{SrNo}</td>
            <td className={color === "1" ?`border-r border-gray-50`:`border-r border-gray-200`}>{ProjectTitle}</td>
            <td className={color === "1" ?`border-r border-gray-50`:`border-r border-gray-200`}>{RollNo}</td>
            <td className={color === "1" ?`border-r border-gray-50`:`border-r border-gray-200`}>{StudentName}</td>
            <td className={color === "1" ?`border-r border-gray-50`:`border-r border-gray-200`}>{ProjectGuide}</td>
        </tr>
    );
};

export default Research;