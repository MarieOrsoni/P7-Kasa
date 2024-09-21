import PropTypes from "prop-types";
import "./banner.scss";

function Banner({ imageSrc, altText, children }) {
  return (
    <div className="banner">
      <img className="bannerimg" src={imageSrc} alt={altText} />
      {children}
    </div>
  );
}

Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Banner;
