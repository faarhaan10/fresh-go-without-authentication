import React from 'react';

const category = [
    {
        categoryName: 'Seasonal Fruits',
        categoryImage: 'https://cdn.shopify.com/s/files/1/0583/0564/2689/collections/2_180x180.jpg?v=1625655414'
    },
    {
        categoryName: 'Cut Fruits',
        categoryImage: 'https://cdn.shopify.com/s/files/1/0583/0564/2689/collections/8_180x180.jpg?v=1625655563'
    },
    {
        categoryName: 'Dry Fruits',
        categoryImage: 'https://cdn.shopify.com/s/files/1/0583/0564/2689/collections/7_180x180.jpg?v=1625655538'
    },
    {
        categoryName: 'Exotic Fruits',
        categoryImage: 'https://cdn.shopify.com/s/files/1/0583/0564/2689/collections/5_180x180.jpg?v=1625655516'
    },
    {
        categoryName: 'Fresh Fruits',
        categoryImage: 'https://cdn.shopify.com/s/files/1/0583/0564/2689/collections/1_180x180.jpg?v=1625655382'
    },
    {
        categoryName: 'Fresh Vegies',
        categoryImage: 'https://cdn.shopify.com/s/files/1/0583/0564/2689/collections/5_180x180.png?v=1626264335'
    },
]
const TopCategory = () => {

    return (
        <div className='container mx-auto py-28'>
            <h1 className='text-center py-6 text-5xl font-bold'>Top Category</h1>
            <br />
            <div className="grid  grid-cols-1 lg:grid-cols-6 gap-2">
                {
                    category.map(item => <div key={item.categoryName} className="avatar flex flex-col justify-between">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-200 ring-offset-4 mx-auto">
                            <img src={item.categoryImage} />
                        </div>
                        <br />
                        <h2 className='text-center' >{item.categoryName}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopCategory;