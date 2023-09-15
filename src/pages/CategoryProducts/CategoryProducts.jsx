import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { categoryActions, fetchCategoryProducts } from '../../store/category-product';

const CategoryProducts = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);

    useEffect(()=>{
        dispatch(fetchCategoryProducts(category[0].category));
        dispatch(categoryActions.fetchCategoryProducts(category[0].category));
    },[dispatch, category])
    return (
        <div>
            <div>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        category.products.map(item => <Card key={item.id} item={item}>

                        </Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryProducts;