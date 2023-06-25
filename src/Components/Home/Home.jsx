import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import TopCategory from './TopCategory';
import Services from './Services';
import TrendingProducts from './TrendingProducts';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <Banner />
            <TopCategory />
            <Services />
            <TrendingProducts products={products} />
        </div>
    );
};

export default Home;