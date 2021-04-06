import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "../Home/Home";

function PageLayout({children}){
    return(
        <div className="grid md:grid-cols-4">
            <Navbar/>
            <div className="md:col-span-3 p-3">
                {children}
            </div>
        </div>
    );
};

export default PageLayout;