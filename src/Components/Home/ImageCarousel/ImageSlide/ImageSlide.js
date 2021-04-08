import React from "react";

function ImageSlide({imageSrc}){
    return(
        <div className="slide-container mySlides fade">
            <img className="slide-image" src={imageSrc} />
            <div className="text"></div>
        </div>
    );
};

export default ImageSlide;