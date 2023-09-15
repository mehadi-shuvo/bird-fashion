
import React from 'react';
import { FaStar, FaRegStar, FaRegStarHalf } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { visitedAction } from '../../store/visited-slice';
import { Link } from 'react-router-dom';
const Card = ({item}) => {
    const dispatch = useDispatch();
    const {_id, title, price, category, image, rating} = item;
    const detailsHandler=()=>{
        dispatch(visitedAction.userActivity(item));
    }
    
    return (
        <div className="card card-compact border border-[#2AB3FD] rounded-none p-6 ">
            <figure className=''><img className='h-[250px] w-4/5 mx-auto' src={image} alt='' /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-[#2ab3fd]">{title.slice(0,25)}</h2>
                <p className='text-lg font-semibold'>Price: ${price}</p>
                <p className='text-lg font-semibold'>Rating: {rating.rate} </p>
                <div className="card-actions justify-between">
                    <button
                         
                        className="my-btn">Add to Cart</button>
                    <Link to={`/${_id}`} onClick={detailsHandler} className="my-btn">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;