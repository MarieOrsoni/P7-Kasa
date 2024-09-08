//Accommodation data
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect} from "react";
import Properties from '../../components/data/Properties.json';
import { useParams } from 'react-router-dom';

function AccommodationDetails() {
    const { id } = useParams();
    
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/Properties.json');
                const result = await response.json();
                const foundProperty = result.find((item) => item.id === id);
                setProperty(foundProperty);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        if (Properties && Array.isArray(Properties)) {
            const foundProperty = Properties.find((item) => item.id === id);
            setProperty(foundProperty);
        } else {
            fetchData();
        }
    }, [id]);

    if (!property) {
        return <div>Loading...</div>;
    }

    return (
              
                <div>
                    <img src={property.cover} alt={property.title} />
                    <h1>{property.title}</h1>
                    <p>{property.description}</p>
                    <p>{property.host.name}</p>
                    <img src={property.host.picture} alt="Hote" />
                    <p>{property.location}</p>
                    
                </div>
            );

    

}
export default AccommodationDetails;