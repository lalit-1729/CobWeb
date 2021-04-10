import React, {useState} from "react";
import Research from "./Research/Research";
import Data2017_18 from "./Data/Data2017_18";
import Data2018_19 from "./Data/Data2019_20";
import Data2019_20 from "./Data/Data2018_19";
import ResearchHeader from "./ResearchHeader/ResearchHeader";

function Researches(){

    const divStyler = {
        height:600
    }

    const [data, setData] = useState(Data2017_18);
    const [title, setTitle] = useState("Projects 2017-18")

    const changesHandler = (event) => {
        if(event.target.value === "1"){
            setData(Data2017_18);
            setTitle("Projects 2017-18");
        }
        else if(event.target.value === "2"){
            setData(Data2018_19);
            setTitle("Projects 2018-19");
        }
        else{
            setData(Data2019_20);
            setTitle("Projects 2019-20");
        }
    };
    
    return(
        <div className="">

            <ResearchHeader title={title}/>


            <div className="md:grid md:grid-cols-3">
                <label className="md:grid-col-1 inline-flex items-center p-3">
                    <input type="radio" name="radio1" className="form-radio h-4 w-4" value="1" onChange={(e) => changesHandler(e)}/>
                    <span className="">&nbsp;Projects from 2017-18</span>
                </label>
                <label className="md:grid-col-1 inline-flex items-center p-3">
                    <input type="radio" name="radio1" className="form-radio h-4 w-4" value="2" onChange={(e) => changesHandler(e)}/>
                    <span className="">&nbsp;Projects from 2018-19</span>
                </label>
                <label className="md:grid-col-1 inline-flex items-center p-3">
                    <input type="radio" name="radio1" className="form-radio h-4 w-4" value="3" onChange={(e) => changesHandler(e)}/>
                    <span className="">&nbsp;Projects from 2019-20</span>
                </label>
            </div>

            <div className="scroll-hide w-full overflow-auto p-2" style={divStyler}>
                <table>
                    <tr className="bg-gray-400 p-3 rounded ">
                        <th className="p-1 w-8">SrNo</th>
                        <th className="p-1">ProjectTitle</th>
                        <th className="p-1">RollNo</th>
                        <th className="p-1">StudentName</th>
                        <th className="p-1">ProjectGuide</th>
                    </tr>
                    {data.map((research) => (
                        <Research
                        research={research} 
                        key={research.StudentName}{...research}
                        />
                    ))}
                </table>
            </div>
        </div>
    );
};

export default Researches;