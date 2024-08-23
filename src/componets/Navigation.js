import React from 'react';
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom'; // Use Link for routing
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const Navigation = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <h2 className="fw-bold">MyShop</h2>
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center ms-lg-3">
                            <FaCartArrowDown size={28} className="text-primary" />
                            <span className="badge bg-primary text-white ms-2">3</span> {/* Sample cart count */}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
