//Accommodation data
//Data extracted from the json file for the selected property 

import { useState, useEffect} from "react";
import Rating from "../Ratings";
import { useParams } from 'react-router-dom';
import './accommodation.scss';

import DropdownEquipments from "../DropdownEquipment";
import DropdownDescription from "../DropdownDescription";


function AccommodationDetails() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [tags, setTags] = useState([]);

    useEffect(() => {
       const fetchData = async () => {
        try {
            const response = await fetch('/Properties1.json');
            const result = await response.json();
            const foundProperty = result.find((items) => items.id === id);
            setProperty(foundProperty);
                if ( foundProperty && foundProperty.tags) {
                setTags(foundProperty.tags);
        }
       } catch (error) {
        console.error('Error fetching properties1:', error);
       }
    };
    fetchData();    
                
    }, [id]);

    if (!property) {
        return <div>Loading...</div>;
    }
    const listItems = tags.map((tag, index) => <li key={index}>{tag}</li>
);
   const name = property.host.name.split(' '); 
   
    return (
              <div className="accommodation-details">
                <div className="titles">
                    <h1>{property.title}</h1>
                    <p>{property.location}</p>

                    <div className="host-info">
                    <div className="names">
                    <p>{name[0] }</p>
                    <p> {name[1] }</p>
                    </div>
                    <img className="host-photo" src={property.host.picture} alt="Hote" />
                    </div>
                    
                    <ul className="tags">{listItems}</ul> 
                    <Rating rating={property.rating} />

                    <div className="dropdown-list">
                    <DropdownDescription />
                    <DropdownEquipments />
                    </div>                
                </div>
                </div>
            );
}
export default AccommodationDetails;