import React from 'react';

const Heading = ({title}) => {
    return (
        <div className='flex gap-10'>
            <h1 className='text-5xl font-extrabold uppercase mb-8'>{title}</h1>
            <div className='bg-[#2ab3fd] flex-grow mb-8'></div>
        </div>
    );
};

export default Heading;