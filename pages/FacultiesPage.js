import React, {useState, useEffect} from "react";
import Faculties from "../src/Components/Faculties/Faculties";
import Header from "../src/Components/Header/Header";
import PageLayout from "../src/Components/PageLayout/PageLayout";
import Footer from "../src/Components/Footer/Footer";
import Loader from "../src/Components/Loader/Loader";

function FacultiesPage(){

    const REQUEST_STATUS = {
        LOADLING:"Loading",
        SUCCESS:"SUCCESS",
        ERROR:"Error"
    }

    const [status, setStatus] = useState(REQUEST_STATUS.LOADLING);

    useEffect(() => {
        setTimeout(() => setStatus(REQUEST_STATUS.SUCCESS), 4000);
    }, [])

    const success = status === REQUEST_STATUS.SUCCESS;
    const isLoading = status === REQUEST_STATUS.LOADLING;

    return(
        <div>

            {isLoading && <Loader/>}


            {success &&
                <div>
                    <Header/>
                        <PageLayout>
                            <Faculties/>
                        </PageLayout>
                    <Footer/>
                </div>
            }
        </div>
    );
};

export default FacultiesPage;