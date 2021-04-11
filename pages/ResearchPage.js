import React, {useState, useEffect} from "react";
import Footer from "../src/Components/Footer/Footer";
import Header from  "../src/Components/Header/Header";
import Researches from "../src/Components/Researches/Researches";
import PageLayout from "../src/Components/PageLayout/PageLayout";
import Loader  from "../src/Components/Loader/Loader";

function ResearchFacilities(){

    const REQUEST_STATUS = {
        LOADLING:"Loading",
        SUCCESS:"SUCCESS",
        ERROR:"Error"
    }

    const [status, setStatus] = useState(REQUEST_STATUS.LOADLING);

    useEffect(() => {
        setTimeout(() => setStatus(REQUEST_STATUS.SUCCESS), 2000);
    }, [])

    const success = status === REQUEST_STATUS.SUCCESS;
    const isLoading = status === REQUEST_STATUS.LOADLING;

    return(
        <div>
            {isLoading && <Loader/>}
            { success && 
                <div>
                    <Header/>
                        <PageLayout>
                            <Researches/>
                        </PageLayout>
                    <Footer/>
                </div>
            }
        </div>
    );
};

export default ResearchFacilities;