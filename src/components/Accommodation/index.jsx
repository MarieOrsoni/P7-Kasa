//Accommodation data
//Data extracted from the json file for the selected property

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../Carousel";
import DropdownEquipments from "../Dropdown-equipment";
import DropdownDescription from "../Dropdown-description";
import Rating from "../Ratings";
import HostInfo from "../Host-info";
import "./accommodation.scss";

function AccommodationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Properties1.json");
        const result = await response.json();
        const foundProperty = result.find((items) => items.id === id);
        if (!foundProperty) {
          navigate("/error");
          return;
        }

        setProperty(foundProperty);
        if (foundProperty && foundProperty.tags) {
          setTags(foundProperty.tags);
        }
      } catch (error) {
        console.error("Error fetching properties1:", error);
        navigate("/error");
      }
    };
    fetchData();
  }, [id, navigate]);

  if (!property) {
    return <div>Loading...</div>;
  }
  const listItems = tags.map((tag, index) => <li key={index}>{tag}</li>);

  return (
    <div className="accommodation-details">
       <div className="Carousel">
      <Carousel pictures={property.pictures} />
      </div>
      
      <div className="titles">
        <h1>{property.title}</h1>
        <p>{property.location}</p>
      </div>
      
      <HostInfo fullName={property.host.name} picture={property.host.picture} />

      <Rating rating={property.rating} />

      <ul className="tags">{listItems}</ul>

      <div className="dropdown-list">
        <DropdownDescription description={property.description} />
        {property.equipments && (
          <DropdownEquipments options={property.equipments} />
        )}
      </div>
    </div>
  );
}
export default AccommodationDetails;
