//Accommodation data
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect} from "react";
import Properties from '../../components/data/Properties.json';

function AccommodationDetails () {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/Properties.json');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };
        if (Properties && Array.isArray(Properties)) {
            setData(Properties);
        } else {
            fetchData();
        }
    }, []);

    return (
        <div>
            {data.map(post => (
                <div key={post.id}>
                    <img src={post.cover} alt={post.title} />
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <p>{post.host}</p>
                    <p>{post.location}</p>
                    <p>{post.tags}</p>
                </div>
            ))}

        </div>
    );
}
export default AccommodationDetails;