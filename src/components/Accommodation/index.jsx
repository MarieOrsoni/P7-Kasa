//Accommodation data
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect} from "react";
import Properties from '../../components/data/Properties.json';
import Rating from "../Ratings";
import { useParams } from 'react-router-dom';
import './index.scss';


function AccommodationDetails() {
    const { id } = useParams();
    
    const [property, setProperty] = useState(null);
    const [tags, setTags] = useState([]);

    useEffect(() => {
       
        const foundProperty = Properties.find((items) => items.id === id);
        setProperty(foundProperty);
                if ( foundProperty && foundProperty.tags) {
                setTags(foundProperty.tags);
            }
                
    }, [id]);

    if (!property) {
        return <div>Loading...</div>;
    }
    const listItems = tags.map((tag, index) => <li key={index}>{tag}</li>
);
   const name = property.host.name.split(' '); 
   console.log(name);
    return (
              
                <div>
            
                    <h1>{property.title}</h1>
                    <p>{property.location}</p>
                    <div className="host">
                    <div className="name">
                    <span>{name[0] }</span>
                    <span> {name[1] }</span>
                    </div>
                    <img src={property.host.picture} alt="Hote" />
                    </div>

                    <Rating rating={property.rating} />
                    <ul>{listItems}</ul>                  
                </div>
            );
}
export default AccommodationDetails;