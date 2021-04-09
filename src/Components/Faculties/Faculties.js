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
            "teachingField":"Telematics \nRF & Microwave Engineering",
            "areaOfResearch":"RF & Microwave Engineering \nImage Processing"
        },
        {
            "imageSrc":"images/faculties/NBKanirkar.jpg",
            "name":"Prof. Naresh B. Kanirkar",
            "qualification":"M.Tech.",
            "designation":"Associate Professor",
            "email":"nbk@eced.svnit.ac.in",
            "teachingField":"Basic of Electronics Engineering \nElectronic Devices & Circuits \nSolid State Devices",
            "areaOfResearch":"CDMA \nMobile Communication"
        },
        {
            "imageSrc":"images/faculties/prashant.jpg",
            "name":"Dr. Prashant K. Shah",
            "qualification":"M.E.",
            "designation":"Associate Professor",
            "email":"pks@eced.svnit.ac.in",
            "teachingField":"Basics of Electronics Engineering \nDigital Circuits \nMicroprocessor \nDigital Signal Processing",
            "areaOfResearch":"LMI Based Improved Stability Criteria (DSP based)"
        },
        {
            "imageSrc":"images/faculties/Abhishek.jpg",
            "name":"Dr. Abhishek Acharya",
            "qualification":"PhD (Microelectronics & VLSI), IIT Roorkee",
            "designation":"Assistant Professor",
            "email":"abhishek@eced.svnit.ac.in",
            "teachingField":"Electronic Devices\nElectronic Circuits\nLinear Integrated Circuits\nVLSI Design",
            "areaOfResearch":"Physics & Modeling of Nano-Scale Devices\nDevice-Circuit Interactions in Nano-Scale Transistors\nWide Bandgap Semiconductors and \n2D Materials for Devices & Circuits"
        },
        {
            "imageSrc":"images/faculties/UpenaDalal.jpg",
            "name":"Dr.(Mrs) Upena D. Dalal",
            "qualification":"Ph.D",
            "designation":"Professor",
            "email":"udd@eced.svnit.ac.in",
            "teachingField":"Digital communication\nAdhoc Networks\nWideband communication\nMobile computing",
            "areaOfResearch":"Wireless Communication techniques\n5G technology\nWireless systems \nOptical wireless\nSignal processing"
        },
        {
            "imageSrc":"images/faculties/Rasika.jpg",
            "name":"Dr. (Mrs.) Rasika N. Dhavse",
            "qualification":"Ph. D.",
            "designation":"Associate Professor",
            "email":"rsk@eced.svnit.ac.in",
            "teachingField":"VLSI Design\nVLSI Technology\nElectronic Circuits",
            "areaOfResearch":"VLSI Design"
        },
        {
            "imageSrc":"images/faculties/Jignesh.jpg",
            "name":"Dr. Jignesh N. Sarvaiya",
            "qualification":"Ph. D.",
            "designation":"Associate Professor",
            "email":"jns@eced.svnit.ac.in",
            "teachingField":"Electronic System Design\nDigital Image Processing\n Information Theory & Coding\nAnalog Integrated Circuits",
            "areaOfResearch":"Image Processing\nMedical Instrumentation"
        },
        {
            "imageSrc":"images/faculties/darjiSir.jpg",
            "name":"Dr. Anand D. Darji",
            "qualification":"Ph.D. (Microelectronics), IIT Bombay",
            "designation":"Associate Professor",
            "email":"add@eced.svnit.ac.in",
            "teachingField":"VLSI Design\nElectronics Instrumentation\nDigital Integrated Circuits\nDigital VLSI Design (PG)\nVLSI System Design ( PG-Elective)",
            "areaOfResearch":"VLSI Design\nFPGA-based systems design\nDevice modelling\nVLSI DSP architecture\nEmbedded System Design\nElectronics Instrumentation\nSignal Processing\bBio-medical Signal/image processing"
        },
        {
            "imageSrc":"images/faculties/piyushPatel.png",
            "name":"Dr. PIYUSH N. PATEL",
            "qualification":"Ph. D.",
            "designation":"Associate Professor",
            "email":"pnp@eced.svnit.ac.in",
            "teachingField":"Optical Communication Systems\nOptical Networks\nAnalog and Digital Communication Systems\nSensors and Transducers\nElectronic Devices and Circuits",
            "areaOfResearch":"Optical Communications and Networks\nPhotonics Devices & Sensors\nMicrowave Antenna and Wavegudes\nMetamaterial based Sensors\nOptical, RF, Metamaterial based Sensors & Biosensors"
        },
        {
            "imageSrc":"images/faculties/Zuber.jpg",
            "name":"Dr. Zuber M. Patel",
            "qualification":"Ph. D.",
            "designation":"Associate Professor",
            "email":"zuber_patel@eced.svnit.ac.in",
            "teachingField":"Digital Logic design\nEmbedded Systems\nMicroelectronics and VLSI\nMicrocontrollers and Interfacing",
            "areaOfResearch":"HDL/FPGA based design\nVLSI Design of RISC Microprocessors\nFPGA/ASIC Design of wireless transceiver hardware\nEmbedded Systems"
        },
        {
            "imageSrc":"images/faculties/Pinal.jpg",
            "name":"Dr. Pinalkumar J. Engineer",
            "qualification":"Ph. D.",
            "designation":"Assistant Professor",
            "email":"pje@eced.svnit.ac.in",
            "teachingField":"Advanced Processor Architecture\nDSP Structures for VLSI\nEmbedded Systems\nReal Time Systems",
            "areaOfResearch":"FPGA based system design\nVLSI architecture for real-time signal/image processing\nHigh performance embedded computing\nEmbedded and real-time systems"
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
