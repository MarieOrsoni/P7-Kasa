import { useState } from "react";
import PropTypes from "prop-types";
import arrow_left from "../../assets/arrow_left.png";
import arrow_right from "../../assets/arrow_right.png";
import "./carousel.scss";

//Carousel

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!pictures || pictures.length === 0) {
    return <div>No pictures available</div>;
  }
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <img
          className="arrow arrow_left"
          src={arrow_left}
          alt="arrow left"
          onClick={prevSlide}
        />
      )}
      <div className="carousel_content">
        <img
          className="pictures"
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
        {pictures.length > 1 && (
          <div className="page_numbers">
            {currentIndex + 1} / {pictures.length}
          </div>
        )}
      </div>
      {pictures.length > 1 && (
        <img
          className="arrow arrow_right"
          src={arrow_right}
          alt="arrow right"
          onClick={nextSlide}
        />
      )}
    </div>
  );
};

// Define PropTypes
Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
