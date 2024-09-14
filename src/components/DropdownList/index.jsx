import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';

//Dropdown list of equipment

const DropdownList = () => {
    const { id } = useParams();
    const [options, setOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/Properties1.json')
            .then(response => {
              //  console.log('Fetch response:', response);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
             //   console.log('Fetched data:', data); // Log the fetched data
                const property = data.find(item => item.id === id);
                if (property && property.equipments) {
                    console.log('Equipments:', property.equipments); // Log the equipments array
                    setOptions(property.equipments);
                } else {
                    console.warn('No equipments found for the property with id:', id);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
            });
    }, [id]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    if (error) {
        return <div>Error loading data: {error.message}</div>;
    }

    return (
        <div className="dropdown">
            <i className="fa-solid fa-chevron-up" onClick={toggleDropdown} id="dropdown-toggle"></i>
            {isOpen && (
                <ul className="dropdown-menu">
                    {Array.isArray(options) && options.length > 0 ? ( options.map((option, index)=> (
                        <li key={index} className='dropdown-item'>
                        {option}
                    </li>
                    ))
                ) : (
                    <li className='dropdown-item'>No options available</li>
                )}
                </ul>
            )}
        </div>
    );
};

export default DropdownList;

