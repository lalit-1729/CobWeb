import React from "react";
import Footer from "../src/Components/Footer/Footer";
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
        <Footer/>
        {/*<Home/>*/}
        </div>
    );
};

export default Page;