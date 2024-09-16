import PropTypes from 'prop-types';
import { useCollapse } from 'react-collapsed';
import "./collapsible.scss";


function CollapsibleList({ title, children }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className={`collapsible-list ${isExpanded ? 'collapsible-list--active' : ''}`}>
      <button {...getToggleProps()} className={`collapsible__header ${isExpanded ? 'collapsible__header--active' : ''}`}>
        {title} <i className={`fas fa-chevron-up ${isExpanded ? 'rotate' : ''}`}></i>
      </button>
      <div {...getCollapseProps()} className="collapsible__content">
        {children}
      </div>
    </div>
  );
 }
 CollapsibleList.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default CollapsibleList;




