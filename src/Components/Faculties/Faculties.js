import React, {useState} from "react";
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
            "email":"ahl@eced.svnit.ac.in",
            "teachingField":"",
            "areaOfResearch":"Telematics \n RF & Microwave Engineering"
        },
        {
            "imageSrc":"images/faculties/NBKanirkar.jpg",
            "name":"Prof. Naresh B. Kanirkar",
            "qualification":"M.Tech.",
            "designation":"Associate Professor",
            "email":"nbk@eced.svnit.ac.in",
            "teachingField":"",
            "areaOfResearch":""
        },
        {
            "imageSrc":"images/faculties/prashant.jpg",
            "name":"Dr. Prashant K. Shah",
            "qualification":"M.E.",
            "designation":"Associate Professor",
            "email":"pks@eced.svnit.ac.in",
            "teachingField":"",
            "areaOfResearch":""
        },
        {
            "imageSrc":"images/faculties/Abhishek.jpg",
            "name":"Dr. Abhishek Acharya",
            "qualification":"PhD (Microelectronics & VLSI), IIT Roorkee",
            "designation":"Assistant Professor",
            "email":"abhishek@eced.svnit.ac.in",
            "teachingField":"",
            "areaOfResearch":""
        },
        {
            "imageSrc":"images/faculties/UpenaDalal.jpg",
            "name":"Dr.(Mrs) Upena D. Dalal",
            "qualification":"Ph.D",
            "designation":"Professor",
            "email":"udd@eced.svnit.ac.in",
            "teachingField":"",
            "areaOfResearch":""
        },
        {
            "imageSrc":"images/faculties/Rasika.jpg",
            "name":"Dr. (Mrs.) Rasika N. Dhavse",
            "qualification":"Ph. D.",
            "designation":"Associate Professor",
            "email":"rsk@eced.svnit.ac.in",
            "teachingField":"",
            "areaOfResearch":""
        },
        {
            "imageSrc":"images/faculties/Jignesh.jpg",
            "name":"Dr. Jignesh N. Sarvaiya",
            "qualification":"Ph. D.",
            "designation":"Associate Professor",
            "email":"jns@eced.svnit.ac.in",
            "teachingField":"",
            "areaOfResearch":""
        },
        {
            "imageSrc":"images/faculties/darjiSir.jpg",
            "name":"Dr. Anand D. Darji",
            "qualification":"Ph.D. (Microelectronics), IIT Bombay",
            "designation":"Associate Professor",
            "email":"add@eced.svnit.ac.in",
            "teachingField":"",
            "areaOfResearch":""
        },
        {
            "imageSrc":"images/faculties/piyushPatel.png",
            "name":"Dr. PIYUSH N. PATEL",
            "qualification":"Ph. D.",
            "designation":"Associate Professor",
            "email":"pnp@eced.svnit.ac.in",
            "teachingField":"",
            "areaOfResearch":""
        },
        {
            "imageSrc":"images/faculties/Zuber.jpg",
            "name":"Dr. Zuber M. Patel",
            "qualification":"Ph. D.",
            "designation":"Associate Professor",
            "email":"zuber_patel@eced.svnit.ac.in",
            "teachingField":"",
            "areaOfResearch":""
        },
        {
            "imageSrc":"images/faculties/Pinal.jpg",
            "name":"Dr. Pinalkumar J. Engineer",
            "qualification":"Ph. D.",
            "designation":"Assistant Professor",
            "email":"pje@eced.svnit.ac.in",
            "teachingField":"",
            "areaOfResearch":""
        }
    ]

    const [searchQuery, setSearchQuery] = useState("");
    const [faculties, setFaculties] = useState(facultiesArray);

    return(
        <div>
            <FacultyHeader/>

            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

            <div className="scroll-hide overflow-y-scroll h-450px mt-3">
                <div className="grid md:grid-cols-3 sm:grid-cols-2">

                    {facultiesArray.filter((record) => {
                        const targetString = record.name.toLowerCase();
                        return setSearchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
                    }).map((faculty) => (
                        <FacultyCard 
                        faculty={faculty} 
                        key={faculty.name}{...faculty}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Faculties;
