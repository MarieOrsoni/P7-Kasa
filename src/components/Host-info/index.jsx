import PropTypes from 'prop-types';
import './hostinfo.scss';

const HostInfo = ({ fullName, picture }) => {
  const name = fullName ? fullName.split(' ') : [' '];

  return (
    <div className="host-info">
      <div className="names">
        <p>{name[0]}</p>
        <p>{name[1]}</p>
      </div>
      <img className="host-photo" src={picture} alt="Photo de l'hôte" />
    </div>
  );
};

HostInfo.propTypes = {
  fullName: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default HostInfo;
