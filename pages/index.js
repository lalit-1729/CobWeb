import React from "react";
import Header from  "../src/Components/Header/Header";
import Home from "../src/Components/Home/Home";
import PageLayout from "../src/Components/PageLayout/PageLayout";

function Page(){
    return(
        <div>
        <Header/>
        <PageLayout>
            <Home/>
        </PageLayout>
        {/*<Home/>*/}
        </div>
    );
};

export default Page;