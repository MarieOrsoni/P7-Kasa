import PropTypes from "prop-types";
import CollapsibleList from "../Collapsible/index.jsx";

//Dropdown description

const DropdownDescription = ({ description }) => {
  return (
    <CollapsibleList title="Description">
      {description ? (
        <p className="dropdown-item">{description}</p>
      ) : (
        <p className="dropdown-item">No description available</p>
      )}
    </CollapsibleList>
  );
};
// Define prop types
DropdownDescription.propTypes = {
  description: PropTypes.string.isRequired,
}
export default DropdownDescription;

