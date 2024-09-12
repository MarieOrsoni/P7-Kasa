import arrow_left from "../../assets/arrow_left.png";
import arrow_right from "../../assets/arrow_right.png";
import properties from "../data/Properties.json";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./index.scss"

//Carousel Back up Gallery code!

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pictures = properties[0].pictures;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % properties[0].pictures.length );
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex -1 + properties[0].pictures.length) % properties[0].pictures.length);
    };


    return (
        <div className="carousel">
            {pictures.length > 1 && (
        <img className="arrow arrow_left" src={arrow_left} alt="arrow left" onClick={prevSlide} />
    )}
        <div className="carousel_content">
            <img className="pictures" src={properties[0].pictures[currentIndex]} alt={`Slide ${currentIndex +1}`} />
            <div className="page_numbers">
                {currentIndex + 1} / {properties[0].pictures.length}
            </div>
        </div>
        {pictures.length > 1 && (
        <img className="arrow arrow_right" src={arrow_right} alt="arrow right" onClick={nextSlide} />       
    )}
        </div>
    );
}
export default Gallery;