import React from 'react'
export default function Collect() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">ShoeStore</a>

                    <form className="d-flex ms-auto">
                        <input className="form-control me-2" type="search" placeholder="Search shoes" />
                        <button className="btn btn-outline-light">Search</button>
                    </form>

                    <a href="cart.html" className="btn btn-warning ms-3">🛒 Cart</a>
                </div>
            </nav>


            <div className="container my-5">
                <h3 className="mb-4 text-center">Shoe Collection</h3>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100">
                            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Running Shoe" />
                            <div className="card-body">
                                <h5 className="card-title">Running Shoe</h5>
                                <p className="card-text">Comfortable running shoe for daily use.</p>
                                <h6>₹2,499</h6>
                                <button className="btn btn-primary w-100">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100">
                            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sports Shoe" />
                            <div className="card-body">
                                <h5 className="card-title">Sports Shoe</h5>
                                <p className="card-text">Perfect for gym and sports activities.</p>
                                <h6>₹3,199</h6>
                                <button className="btn btn-primary w-100">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="card h-100">
                            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Casual Shoe" />
                            <div className="card-body">
                                <h5 className="card-title">Casual Shoe</h5>
                                <p className="card-text">Stylish casual wear shoe.</p>
                                <h6>₹1,899</h6>
                                <button className="btn btn-primary w-100">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
