import React from "react";
import Faculties from "../src/Components/Faculties/Faculties";
import Header from "../src/Components/Header/Header";
import PageLayout from "../src/Components/PageLayout/PageLayout";
import Footer from "../src/Components/Footer/Footer";

function FacultiesPage(){
    return(
        <div>
            <Header/>
                <PageLayout>
                    <Faculties/>
                </PageLayout>
            <Footer/>
        </div>
    );
};

export default FacultiesPage;