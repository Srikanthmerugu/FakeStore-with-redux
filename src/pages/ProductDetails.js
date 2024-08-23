import React from 'react';
import { useLoaderData } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const ProductDetails = () => {
    const item = useLoaderData(); // Single item, not an array

    return (
        <div className="container d-flex justify-content-center align-items-center mt-5" style={{ minHeight: '100vh' }}>
            <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ maxWidth: "840px" }}>
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={item.image} className="img-fluid rounded-start" alt={item.title} style={{ maxHeight: '300px' }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center text-md-start">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text fw-bold">Price: ₹{item.price}</p>
                            <p className="card-text">Rating: {item.rating.rate} ⭐ ({item.rating.count} reviews)</p>
                            <p className="card-text"><small className="text-muted">Category: {item.category}</small></p>
                            <button  className='btn btn-sm bg-warning text-white'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
