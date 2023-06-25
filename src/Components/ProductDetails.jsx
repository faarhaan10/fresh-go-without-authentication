import React from 'react';

const ProductDetails = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="">
                    <img className='w-full' src="https://cdn.shopify.com/s/files/1/0583/0564/2689/products/3_7867cd5c-2eed-49df-a7f2-a27b7963fd9d_350x.jpg?v=1625659877" alt="" />
                </div>
                <div className="ps-4">
                    <h2 className="text-3xl">Fruit - Fresh, Regular, 2 Pcs</h2>
                    <span>⭐️⭐️⭐️⭐️⭐️</span>
                    <h3 className="text-5xl font-bold">$300</h3>
                    <br />
                    <br />
                    <button className="btn btn-success">Pay</button>

                </div>

            </div>
        </div>
    );
};

export default ProductDetails;