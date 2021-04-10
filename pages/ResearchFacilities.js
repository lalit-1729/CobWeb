import React from "react";
import Footer from "../src/Components/Footer/Footer";
import Header from  "../src/Components/Header/Header";
import Facilities from "../src/Components/Faclities/Facilities";
import PageLayout from "../src/Components/PageLayout/PageLayout";

function ResearchFacilities(){
    return(
        <div>
            <Header/>
                <PageLayout>
                    <Facilities/>
                </PageLayout>
            <Footer/>
        </div>
    );
};

export default ResearchFacilities;