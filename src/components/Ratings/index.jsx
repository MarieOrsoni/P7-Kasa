import PropTypes from "prop-types";
import "./rating.scss";

const Rating = ({ rating }) => {
  const stars = Number(rating);

  return (
    <div className="rating-container">
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`fa fa-star ${i < stars ? "red-star" : "grey-star"}`}
          ></i>
        ))}
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Rating;
