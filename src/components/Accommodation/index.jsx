//Accommodation data
import { useState, useEffect} from "react";
import Rating from "../Ratings";
import { useParams } from 'react-router-dom';
import './index.scss';
import DropdownList from "../DropdownList";


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
              
                <div className="titles">
                    <h1>{property.title}</h1>
                    <p>{property.location}</p>
                    <div className="hostInfo">
                    <div className="names">
                    <p>{name[0] }</p>
                    <p> {name[1] }</p>
                    </div>
                
                    <img src={property.host.picture} alt="Hote" />
                    </div>
                    <Rating rating={property.rating} />
                    <ul className="tags">{listItems}</ul> 
                    <div className="dropdown-list">
                    <DropdownList />
                    </div>                
                </div>
            );
}
export default AccommodationDetails;