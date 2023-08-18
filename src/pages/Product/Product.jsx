import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
    const item = useLoaderData();
    // console.log(item);
    return (
        <div className='w-4/5 mx-auto'>
            <div className='my-20'>
                <div className='w-full lg:flex p-10 border border-[#2AB3FD]'>
                    <div className='lg:w-[70%] pr-10'>
                        <img className='p-10 h-[450px]' src={item.image} alt="" />
                        <h4 className='tex-2xl font-extrabold mb-5 bor'>Product Details:</h4>
                        <p className='text-sm font-light'>{item.description}</p>
                    </div>
                    <div className='lg:w-[30%] bg-[rgba(42,179,253,0.25)] p-6 '>
                    <p className='text-xl font-bold uppercase mb-8'>{item.title}</p>
                    <p className='text-lg mb-3'>Price: ${item.price}</p>
                    <p className='text-lg mb-3'>Rating: {item.rating.rate}</p>
                    <p className='text-lg mb-3'>Reviews: {item.rating.count}</p>
                    <p className='text-lg mb-8'>Category: {item.category}</p>
                    <button className='my-btn'>Add to Card</button>
                    </div>
                </div>

            </div>
            <div className=''>

            </div>
        </div>
    );
};

export default Product;