import PropTypes from "prop-types";
import CollapsibleList from "../Collapsible/index.jsx";

//Dropdown list of equipment
const DropdownEquipments = ({ options = [] }) => {
  return (
    <CollapsibleList title="Équipements">
      {Array.isArray(options) && options.length > 0 ? (
        options.map((option, index) => (
          <li key={index} className="dropdown-item">
            {option}
          </li>
        ))
      ) : (
        <li className="dropdown-item">No options available</li>
      )}
    </CollapsibleList>
  );
 };
 // Define prop types
DropdownEquipments.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default DropdownEquipments;


