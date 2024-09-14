//Properties for home page image and title only
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"

function PropertyData() {
   const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/Properties1.json');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };
                fetchData();

        }, []);

    return (
        <div className='gallery'>
            {data.map(post => (
                <Link to ={`/accommodation/${post.id}`} key={post.id} className='thumb'>
                   <img src={post.cover} alt={post.title} />
                    <p>{post.title}</p>
                    
                </Link>
            ))}
        </div>
    );
}

export default PropertyData;