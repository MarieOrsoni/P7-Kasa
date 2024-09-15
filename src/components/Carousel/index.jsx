import arrow_left from "../../assets/arrow_left.png";
import arrow_right from "../../assets/arrow_right.png";
import { useEffect, useState } from "react";
import "./carousel.scss"

//Carousel

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [pictures, setPictures] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/Properties1.json');
                const result = await response.json();
                setPictures(result[0].pictures);
            } catch (error) {
                console.log('Error fetching properties1:', error);
            }
        };
        fetchData();
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length );
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex -1 + pictures.length) % pictures.length);
    };


    return (
        <div className="carousel">
            {pictures.length > 1 && (
        <img className="arrow arrow_left" src={arrow_left} alt="arrow left" onClick={prevSlide} />
    )}
        <div className="carousel_content">
            <img className="pictures" src={pictures[currentIndex]} alt={`Slide ${currentIndex +1}`} />
            <div className="page_numbers">
                {currentIndex + 1} / {pictures.length}
            </div>
        </div>
        {pictures.length > 1 && (
        <img className="arrow arrow_right" src={arrow_right} alt="arrow right" onClick={nextSlide} />       
    )}
        </div>
    );
}
export default Carousel;