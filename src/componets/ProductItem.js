import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ProductItem = () => {
    const items = useLoaderData();
    // console.log(items, 'itemsdata3456789');
    
    const navigate = useNavigate()

    return (
        <>
        <div className="container mt-4">
            <div className="row g-4">
                {items.map(item => (
                    <div className="col-md-4 col-lg-3" onClick={()=>navigate(`/products/${item.id}`)} key={item.id}>
                        <div className="card h-100 shadow-sm">
                            <img src={item.image} className="card-img-top p-3" style={{ height: '250px', objectFit: 'contain' }} alt={item.title} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{item.title.substring(0, 17)+ '...'}</h5>
                                <p className="card-text mb-2">Price: ₹{item.price}</p>
                                <p className="card-text text-muted">Rating: {item.rating.rate} ⭐ a</p>
                                <button className="btn btn-primary mt-auto">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
        </>
    );
};

export default ProductItem;
