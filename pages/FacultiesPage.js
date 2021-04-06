import React from "react";
import Faculties from "../src/Components/Faculties/Faculties";
import Header from "../src/Components/Header/Header";
import PageLayout from "../src/Components/PageLayout/PageLayout";

function FacultiesPage(){
    return(
        <div>
            <Header/>

            <PageLayout>
                <Faculties/>
            </PageLayout>
            
        </div>
    );
};

export default FacultiesPage;