import React from "react";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import HomeHeader from "./HomeHeader/HomeHeader"

function Home(){
    return(
        
        <div className="rounded bg-gray-200 grid grid-cols-1">
            
            <HomeHeader/>

            <ImageCarousel/>

            {/* Department Mission */}
            <div className="p-6 m-4 bg-gray-300 rounded">
                <h6 className="text-2xl text-gray-600 text-bold text-center">Department Mission</h6>
                <p className="text-muted text-center text-l">The mission of the Electronics Engineering Department is to contribute to society and industry through excellence in education, research, innovations and ethics by stakeholders.</p>
            </div>

            {/* Department Mission */}
            <div className="bg-gray-300 p-6 mx-4 mb-4 rounded">
                <h6 className="text-2xl text-gray-600 text-bold text-center">Department Vision</h6>
                <p className="text-muted text-center text-l">The vision of the Electronics Engineering Department is to Aim to achieve quality in education and research to create leading Electronics engineers, researchers and entrepreneurs.</p>  
            </div>

        </div>
    );
};

export default Home;