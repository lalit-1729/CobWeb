import React from "react";
import Footer from "../src/Components/Footer/Footer";
import Header from  "../src/Components/Header/Header";
import Researches from "../src/Components/Researches/Researches";
import PageLayout from "../src/Components/PageLayout/PageLayout";

function ResearchFacilities(){
    return(
        <div>
            <Header/>
                <PageLayout>
                    <Researches/>
                </PageLayout>
            <Footer/>
        </div>
    );
};

export default ResearchFacilities;