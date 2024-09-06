//Properties for home page image and title only
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Properties from '../data/Properties.json';
import "./index.scss"

function PropertyData() {
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
        <div className='gallery'>
            {data.map(post => (
                <div className='thumb' key={post.id}>
                   <img src={post.cover} alt={post.title} />
                    <p>{post.title}</p>
                    
                </div>
            ))}
        </div>
    );
}

export default PropertyData;