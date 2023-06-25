import React from 'react';
import { Link } from 'react-router-dom';

const TrendingProducts = ({ products }) => {

    return (
        <div>
            <div className='bg-emerald-600'>
                <div className="container mx-auto py-20">
                    <h1 className='text-center py-6 text-5xl font-bold text-slate-100'>Trending Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4  ">

                        {
                            products.map(product => <div key={product.id} className="card border shadow-xl">
                                <figure><img className='object-cover rounded-lg h-58 w-full' src={product.img} alt={product.name} /></figure>
                                <div className="p-4 card-body flex flex-col justify-between">
                                    <h3 className="text-xl font-extralight	text-slate-100">{product.name}</h3>
                                    <h3 className='text-2xl font-bold text-slate-100'>${product.price}</h3>
                                    <div className="card-actions justify-end">
                                        <Link to={`/product/${product.id}`}>
                                            <button className="btn btn-primary">Buy Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;