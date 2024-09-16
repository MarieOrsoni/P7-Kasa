//Portfolio of all accommodations available 
//Gallery of accommodations for the home page

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./portfolio.scss"

function PortfolioGallery() {
   const [data, setData] = useState([]);
   const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/Properties1.json');
                
                if (!response.ok) {
                    navigate('/error');
                    return;
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching properties:', error);
                navigate('/error');
            }
        };
                fetchData();

        }, [navigate]);

    return (
        <div className='gallery'>
            {data.map(post => (
                <Link to ={`/accommodation/${post.id}`} key={post.id} className='card'>
                   <img src={post.cover} alt={post.title} />
                    <p>{post.title}</p>
                    
                </Link>
            ))}
        </div>
    );
}

export default PortfolioGallery;