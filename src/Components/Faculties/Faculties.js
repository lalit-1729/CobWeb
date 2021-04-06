import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import FacultyCard from "./FacultyCard/FacultyCard";
import FacultyHeader from "./FacultyHeader/FacultyHeader"

function Faculties(){

    const facultiesArray = [
        {   
            "imageSrc":"images/faculties/lalluWadia.png",
            "name":"Prof. A. H. Lalluwadia",
            "qualification":"M. Tech.",
            "designation":"Associate Professor",
            "email":"ahl@eced.svnit.ac.in"
        },
        {
            "imageSrc":"images/faculties/UpenaDalal.jpg",
            "name":"Dr.(Mrs) Upena D. Dalal",
            "qualification":"Ph.D",
            "designation":"Professor",
            "email":"udd@eced.svnit.ac.in"
        },
        {
            "imageSrc":"images/faculties/NBKanirkar.jpg",
            "name":"Prof. Naresh B. Kanirkar",
            "qualification":"M.Tech.",
            "designation":"Associate Professor",
            "email":"nbk@eced.svnit.ac.in"
        },
        {
            "imageSrc":"images/faculties/prashant.png",
            "name":"Dr. Prashant K. Shah",
            "qualification":"M.E.",
            "designation":"Associate Professor",
            "email":"pks@eced.svnit.ac.in"
        },
        {
            "imageSrc":"images/faculties/Abhishek.jpg",
            "name":"Dr. Abhishek Acharya",
            "qualification":"PhD (Microelectronics & VLSI), IIT Roorkee",
            "designation":"Assistant Professor",
            "email":"abhishek@eced.svnit.ac.in"
        }

    ]

    return(
        <div>
            <FacultyHeader/>
            <SearchBar/>

            <div className="md:grid md:grid-cols-3">
                {facultiesArray.map((faculty) => (
                    <FacultyCard 
                    faculty={faculty} 
                    key={faculty.name}{...faculty}
                    />
                ))}
            </div>
        </div>
    );
};

export default Faculties;
