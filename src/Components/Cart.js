import React from 'react'

export default function Cart() {
    return (
        <>
            <div className="container my-5">
                <h3 className="mb-4">Shopping Cart</h3>

                <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <h6 className="mb-0">Running Shoe</h6>
                                <small>Qty: 1</small>
                            </div>
                            <strong>₹2,499</strong>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h5>Total</h5>
                            <h5>₹2,499</h5>
                        </div>

                        <div className="mt-4 text-end">
                            <a href="payment.html" className="btn btn-success">
                                Proceed to Payment
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
