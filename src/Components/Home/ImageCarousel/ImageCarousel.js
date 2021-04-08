import React, {useEffect} from "react";
import ImageSlide from "./ImageSlide/ImageSlide";

function ImageCarousel(){

    const imagesArray = [
        {
            "imageSrc":"images/ecedImages/eced-1.jpg",
            "key":"1"
        },
        {
            "imageSrc":"images/ecedImages/eced-2.jpg",
            "key":"2"
        },
        {
            "imageSrc":"images/ecedImages/eced-3.jpg",
            "key":"3"
        },
        {
            "imageSrc":"images/ecedImages/eced-4.jpg",
            "key":"4"
        },
        {
            "imageSrc":"images/ecedImages/eced-5.jpg",
            "key":"5"
        },
        {
            "imageSrc":"images/ecedImages/eced-6.jpg",
            "key":"6"
        },
        {
            "imageSrc":"images/ecedImages/eced-7.jpg",
            "key":"7"
        }
    ]

    var slideIndex = 0;

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 5000);
    }

    useEffect(() => {
        showSlides();
    }, [slideIndex])
    return(
        <div className="mt-4 mx-4 rounded overflow-hidden md:mx-0"> 
            <div className="slideshow-container md:h-96">

                {imagesArray.map((image) => (
                    <ImageSlide key={image.id}{...image}/>    
                ))}
            
            </div> 
                    <br/>

            <div className="flex justify-center" style={{textAlignment:"center"}}>
                <span className="dot"></span> 
                <span className="dot"></span> 
                <span className="dot"></span> 
                <span className="dot"></span> 
                <span className="dot"></span> 
                <span className="dot"></span> 
                <span className="dot"></span> 
            </div>
        </div>




        
    );
}

export default ImageCarousel;



<div className="mt-4 mx-4 rounded overflow-hidden md:mx-0"> 
            <div className="slideshow-container h-96 ">

                <div className="slide-container mySlides fade">
                    <div className=" numbertext">1 / 3</div>
                        <img className="slide-image" src="images/ecedImages/3.jpg" />
                    <div className="text">Caption Text</div>
                </div>

                <div className="slide-container mySlides fade">
                    <div className=" numbertext">2 / 3</div>
                    <img className="slide-image" src="images/ecedImages/4.jpg"/>
                    <div className="text">Caption Two</div>
                </div>

                <div className="slide-container mySlides fade">
                    <div className=" numbertext">3 / 3</div>
                    <img className="slide-image" src="images/ecedImages/5.jpg"/>
                    <div className="text">Caption Three</div>
                </div>

            </div>
                    <br/>

            <div className="flex justify-center" style={{textAlignment:"center"}}>
                <span className="dot"></span> 
                <span className="dot"></span> 
                <span className="dot"></span> 
            </div>
        </div>

