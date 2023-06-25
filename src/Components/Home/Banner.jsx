import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero justify-start min-h-screen bg-base-200 bg-[url('https://cdn.shopify.com/s/files/1/0583/0564/2689/files/slider-1.jpg?v=1625654971')]">
                <div className="hero-content  flex-col lg:flex-row ">
                    <div className='md:ms-20'>
                        <h1 className="md:text-5xl font-bold">Organic fresh fruits <br /> for your health</h1>
                        <p className="py-6">Interdum et malesuada fames ac ante ipsum primis in faucibus. <br />Mauris eleifend sagittis mollis. Nulla finibus arcu eu tortor gravida aliquet</p>
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;