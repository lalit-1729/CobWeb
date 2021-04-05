import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "../Home/Home";

function PageLayout(){
    return(
        <div className="grid md:grid-cols-4">
            <Navbar/>
            <div className="md:col-span-3 p-3">
                <Home/>
            </div>
        </div>
    );
};

export default PageLayout;