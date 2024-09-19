import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CollapsibleList from '../Collapsible/index.jsx';

//Dropdown list of equipment

const DropdownEquipments = () => {
    const { id } = useParams();
    const [options, setOptions] = useState([]);
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

      if (error) {
        return <div>Error loading data: {error.message}</div>;
    }

    return (
        <CollapsibleList title='Équipements'>
     
            {Array.isArray(options) && options.length > 0 ? ( options.map((option, index)=> (
                        <li key={index} className='dropdown-item'>
                        {option}
                    </li>
                    ))
                ) : (
                    <li className='dropdown-item'>No options available</li>
                )}
                </CollapsibleList>
              
            )}
    

export default DropdownEquipments;

