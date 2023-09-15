import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryCard = ({product}) => {
    const {_id, title, image} = product;
    return (
        <div>
            <div className="card h-[200px] overflow-hidden image-full">
                <figure><img className='h-full' src={image} alt="Shoes" /></figure>
                <div className="card-body relative">
                    <h2 className="text-base text-white font-light">{title}</h2>
                    <div className="card-actions absolute bottom-4">
                        <Link to={`/${_id}`} className="my-btn text-lg px-3 py-1">More Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondaryCard;