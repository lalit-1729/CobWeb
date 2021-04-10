import React from "react";
import FacultyCard from "./Facility/Facility";
import FacilitiesHeader from "./FacilitiesHeader/FacilitiesHeader";

function Facilities(){

    const divStyler = {
        height:550
    }

    const FacilitiesArray = [
        {
            "SerialNo": "1",
            "NameOfLab": "Communication Research Lab",
            "PresentFacilities": "MXG Vector signal generator 100kHz-3GHz",
            "YearOfEstablishment": "12-08-11",
            "CostOfAsset": "7,98,000/- | Annual plan grant",
            "UsageCharges": "200/- per hour"
        },
        {
            "SerialNo": "2",
            "NameOfLab": "Communication Research Lab",
            "PresentFacilities": "Cognitive Wireless communication Software Defined radio Lab SDR04",
            "YearOfEstablishment": "14/05/2014",
            "CostOfAsset": "13,65.000/- | Annual plan grant",
            "UsageCharges": "400/- per hour"
        },
        {
            "SerialNo": "3",
            "NameOfLab": "Communication Research Lab",
            "PresentFacilities": "RF signal generator 9KHz to 3.0 GHz",
            "YearOfEstablishment": "17/11/2014",
            "CostOfAsset": "11,97,730/- | Annual plan grant",
            "UsageCharges": "250/- per hour"
        },
        {
            "SerialNo": "4",
            "NameOfLab": "Communication Research Lab",
            "PresentFacilities": "Frequency range 9KHz to 3.0GHz CXA signal analyzer",
            "YearOfEstablishment": "17/11/2014",
            "CostOfAsset": "11,97,730/- | Annual plan grant",
            "UsageCharges": "250/- per hour"
        },
        {
            "SerialNo": "5",
            "NameOfLab": "Communication Research Lab",
            "PresentFacilities": "Wireless Measurement studio(Field fox VNA)",
            "YearOfEstablishment": "18/04/2014 ,TEQUIP II",
            "CostOfAsset": "15,25,730.85/-",
            "UsageCharges": "500/- per hour"
        },
        {
            "SerialNo": "6",
            "NameOfLab": "Communication Research Lab",
            "PresentFacilities": "N5172B EXG X-Series RF vector signal generator",
            "YearOfEstablishment": "06-04-18",
            "CostOfAsset": "27,86,885/- | PROJECT ISRO CODE:4/229",
            "UsageCharges": "1000/- per hour"
        },
        {
            "SerialNo": "7",
            "NameOfLab": "Communication Research Lab",
            "PresentFacilities": "ARAMIS GPS L1, IRNSS L5, IRNSS S Software Receiver( GNSS Multi Frequency FEM/MFR Device)",
            "YearOfEstablishment": "24/09/2019",
            "CostOfAsset": "$20810 | PROJECT ISRO CODE:4/220",
            "UsageCharges": "1000/- per hour"
        },
        {
            "SerialNo": "8",
            "NameOfLab": "Communication Research Lab",
            "PresentFacilities": "EXG X-Series RF vector signal generator",
            "YearOfEstablishment": "03-08-18",
            "CostOfAsset": "27,86,885/-",
            "UsageCharges": "1000/- per hour"
        },
        {
            "SerialNo": "9",
            "NameOfLab": "Basic Communication Lab",
            "PresentFacilities": "Mixed Domain Oscilloscope, 2 channel, 2.5 Gs/s, 100MHz MDO3012",
            "YearOfEstablishment": "30/03/2015 | Annual plan grant",
            "CostOfAsset": "28,72,800/-",
            "UsageCharges": "1000/- per hour"
        },
        {
            "SerialNo": "10",
            "NameOfLab": "Electronics System Design Lab",
            "PresentFacilities": "Mixed domain oscilloscope",
            "YearOfEstablishment": "02-04-15",
            "CostOfAsset": "4,78,800/- | Annual plan grant",
            "UsageCharges": "1000/- per hour"
        },
        {
            "SerialNo": "11",
            "NameOfLab": "Electronics System Design Lab",
            "PresentFacilities": "1) Smart Camera,2)Lab view,Core Software",
            "YearOfEstablishment": "29/03/11",
            "CostOfAsset": "5,91,744/- | Annual plan grant",
            "UsageCharges": "1000/- per hour"
        },
        {
            "SerialNo": "12",
            "NameOfLab": "Electronics System Design Lab",
            "PresentFacilities": "PCB Proto type Machine",
            "YearOfEstablishment": "14/04/13",
            "CostOfAsset": "12,98,850/- | TEQUIP",
            "UsageCharges": "2000/-"
        },
        {
            "SerialNo": "13",
            "NameOfLab": "Embedded System Lab",
            "PresentFacilities": "NetFPGA SUME Board (1 Nos.)",
            "YearOfEstablishment": "09-08-16",
            "CostOfAsset": "6,96,300/-",
            "UsageCharges": "6,96,300/-"
        },
        {
            "SerialNo": "14",
            "NameOfLab": "Microwave and Optical Communication lab",
            "PresentFacilities": "RF vector Analyzer",
            "YearOfEstablishment": "13/03/2014",
            "CostOfAsset": "9,97,875.00",
            "UsageCharges": "500/- per sample"
        },
        {
            "SerialNo": "15",
            "NameOfLab": "Microwave and Optical Communication laboratory",
            "PresentFacilities": "CAD FEKO (6.0) Software",
            "YearOfEstablishment": "23/02/2011",
            "CostOfAsset": "12,60,000/-",
            "UsageCharges": "300/- per hours"
        },
        {
            "SerialNo": "16",
            "NameOfLab": "Microwave and Optical Communication laboratory",
            "PresentFacilities": "Empire Excel v5.01-A 3D Modeling software (full package)for RF & Microwave Application",
            "YearOfEstablishment": "17/07/2007",
            "CostOfAsset": "5,19,376/- | TEQIP",
            "UsageCharges": "300/- per hours"
        },
        {
            "SerialNo": "17",
            "NameOfLab": "Microwave and Optical Communication laboratory",
            "PresentFacilities": "a) Microwave Integrated Circuit Trainer Kit (1 set),b) Microwave Signal Source,c) VSWR Meter,d) Accessories",
            "YearOfEstablishment": "17/01/2006",
            "CostOfAsset": "7,12,770/- | TEQIP",
            "UsageCharges": "300/- per hours"
        },
        {
            "SerialNo": "18",
            "NameOfLab": "Sensor Research Lab",
            "PresentFacilities": "a) Omricon lab model-Bode 100,b) B-wit100 wideband injection transformer",
            "YearOfEstablishment": "11-10-16",
            "CostOfAsset": "7,19,775/-",
            "UsageCharges": "500/- per sample"
        },
        {
            "SerialNo": "19",
            "NameOfLab": "Sensor Research Lab",
            "PresentFacilities": "Laser Spectrum Analyzer Type: LSA with 1550nm Wide band Light Source",
            "YearOfEstablishment": "23/04/2015",
            "CostOfAsset": "24,60,863/-",
            "UsageCharges": "500/- per sample"
        },
        {
            "SerialNo": "20",
            "NameOfLab": "Sensor Research Lab",
            "PresentFacilities": "Smart Scope 4,Optical Channels,Upto 16FGBS (DST Project Grant)",
            "YearOfEstablishment": "19/10/2013",
            "CostOfAsset": "16,54,405/-",
            "UsageCharges": "1000/- per sample"
        },
        {
            "SerialNo": "21",
            "NameOfLab": "Sensor Research Lab",
            "PresentFacilities": "Field Optical Spectrum Analyzer & Broad Band Optical Source Sled (1550NM) with OSA cable",
            "YearOfEstablishment": "30/03/2012",
            "CostOfAsset": "15,75,000/-",
            "UsageCharges": "1000/- per sample"
        },
        {
            "SerialNo": "22",
            "NameOfLab": "Sensor Research Lab",
            "PresentFacilities": "High Resolution Spectrometer with Light Source, Probes and Accessories (DRDO Project Grant)",
            "YearOfEstablishment": "12-02-11",
            "CostOfAsset": "12,07,103/-",
            "UsageCharges": "1000/- per sample"
        },
        {
            "SerialNo": "23",
            "NameOfLab": "Sensor Research Lab",
            "PresentFacilities": "High resolution Spectrometer with, a) light sourceb) detector, c) laptop and other Accessories.",
            "YearOfEstablishment": "27/06/2011",
            "CostOfAsset": "6,74,782/-",
            "UsageCharges": "1000/- per sample"
        },
        {
            "SerialNo": "24",
            "NameOfLab": "Sensor Research Lab",
            "PresentFacilities": "Optisuite,  OptiFDTDOpti System. OptiSpice&Opti BPM,  OptiGratting (DRDO LAB)",
            "YearOfEstablishment": "12-02-2014",
            "CostOfAsset": "19,85,025/-",
            "UsageCharges": "300/- per hours"
        },
        {
            "SerialNo": "25",
            "NameOfLab": "Sensor Research Lab",
            "PresentFacilities": "RSoftDiffect MOD add-on & FEMSIM add-on v2014.09 S/W",
            "YearOfEstablishment": "FOS/IN/1413 01-12-14",
            "CostOfAsset": "6,98,250/-",
            "UsageCharges": "300/- per hours"
        },
        {
            "SerialNo": "26",
            "NameOfLab": "Sensor Research Lab",
            "PresentFacilities": "COMSOL Multiphysics, RF Modules, Wave Optics Module (VLSI LAB)",
            "YearOfEstablishment": "18-11-2014",
            "CostOfAsset": "6,09,368/-",
            "UsageCharges": "300/- per hours"
        },
        {
            "SerialNo": "27",
            "NameOfLab": "Sensor Research Lab",
            "PresentFacilities": "RSoft CAD GUI v2013.12 Software with add-on full wave single User Node Locked Academic License for Window 7/8",
            "YearOfEstablishment": "FOS/IN/1410 23-06-2014",
            "CostOfAsset": "8,29,500/-",
            "UsageCharges": "300/- per hours"
        },
        {
            "SerialNo": "28",
            "NameOfLab": "Sensor Research Lab",
            "PresentFacilities": "Opti System (PROJECT LAB)",
            "YearOfEstablishment": "GSI/11.12/10 20-01-2012",
            "CostOfAsset": "8,68,613/-",
            "UsageCharges": "300/- per hours"
        },
        {
            "SerialNo": "29",
            "NameOfLab": "TCAD Lab",
            "PresentFacilities": "SCS Parameter Analyzer System",
            "YearOfEstablishment": "16/01/2017",
            "CostOfAsset": "21,21,000/-",
            "UsageCharges": "1000/- Per Sample"
        },
        {
            "SerialNo": "30",
            "NameOfLab": "TCAD Lab",
            "PresentFacilities": "Advance (3D) Synopsys TCAD University Bundle",
            "YearOfEstablishment": "19/01/2016",
            "CostOfAsset": "5,01,960/-",
            "UsageCharges": "300/- per hours (only academic purpose)"
        },
        {
            "SerialNo": "31",
            "NameOfLab": "VLSI Lab",
            "PresentFacilities": "Logic Analyzer (34 Channel)",
            "YearOfEstablishment": "12-11-2013",
            "CostOfAsset": "11,39,250/-",
            "UsageCharges": "Rs 1000/hour"
        },
        {
            "SerialNo": "32",
            "NameOfLab": "VLSI Lab",
            "PresentFacilities": "● Synopsys (5 licenses) *,● Xilinx SDSoC (25 licenses)*,● Mentor (20 licenses) *● Cadence (10 licenses) *,● Xilinx Vivardo Design Suite 2015 (25 licenses)*",
            "YearOfEstablishment": "",
            "CostOfAsset": "",
            "UsageCharges": "Rs. 300/- per hours  (only academic purpose)"
        }
    ]

    return(
        <div>
            <FacilitiesHeader/>
            <div className="scroll-hide overflow-y-scroll  mt-4 bg-gray-100" style={divStyler}>
                {FacilitiesArray.map((facility) => (
                    <FacultyCard 
                    facility={facility} 
                    key={facility.SerialNo}{...facility}
                    />
                ))}
            </div>
        </div>
    );
}

export default Facilities;