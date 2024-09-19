import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CollapsibleList from '../Collapsible/index.jsx';

//Dropdown description

const DropdownDescription = () => {
    const { id } = useParams();
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/Properties1.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const property = data.find(item => item.id === id);
                if (property && property.description) {
                    
                    setDescription(property.description);
                } else {
                    console.warn('No description found for the property with id:', id);
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
        <CollapsibleList title = 'Description'>
                {description ? (
                        <p className='dropdown-item'>{description}</p>
                    ) : (
                        <p className='dropdown-item'>No description available</p>
                    )}  
        
             {error && <p>Error: {error.message}</p>}
        </CollapsibleList>
    );
}

export default DropdownDescription;