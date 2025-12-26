import React from 'react'
export default function Payment() {
    return (
        <>
            <div className="container my-5">
                <h3 className="mb-4">Credit Card Payment</h3>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Card Holder Name</label>
                                <input type="text" className="form-control" placeholder="John Doe" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Card Number</label>
                                <input type="text" className="form-control" placeholder="1234 5678 9012 3456" />
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Expiry Date</label>
                                    <input type="text" className="form-control" placeholder="MM/YY" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">CVV</label>
                                    <input type="password" className="form-control" placeholder="***" />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Pay Now
                            </button>
                        </form>
                        <a href="cart.html" className="btn btn-link mt-3">
                            ⬅ Back to Cart
                        </a>
                    </div>


                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                Order Summary
                            </div>
                            <div className="card-body">
                                <p>Running Shoe × 1</p>
                                <hr />
                                <strong>Total: ₹2,499</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
